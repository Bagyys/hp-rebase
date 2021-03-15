import { useEffect, useRef, useState } from "react";
import classes from "./DropDown.module.scss";
import arrow from "../../assets/images/arrowDown.png";

export interface DropDownInterface {
  title: string;
  items: any;
  type: string;
}

function DropDown({ title, items, type }: DropDownInterface) {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = (value: boolean) => {
    setOpen(value);
  };

  // TO DO: CLick outside and Toggle MultiDropdowns -- Need to refactor to more sufficient code
  // TO DO: Clean ANY type in typescript

  let menuRef: any = useRef();

  useEffect(() => {
    let handler = (event: any) => {
      if (!menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div ref={menuRef} className={classes.ddWrapper}>
      <div
        tabIndex={0}
        className={classes.ddHeader}
        role="button"
        onKeyPress={(e) => toggle(!open)}
        onClick={(e) => toggle(!open)}
      >
        <div className={classes.ddHeaderTitle}>
          <p>{title}</p>
        </div>
        <div className={classes.ddHeaderAction}>
          <p>
            {open ? (
              <img className={classes.ArrowClose} src={arrow} />
            ) : (
              <img className={classes.ArrowOpen} src={arrow} />
            )}
          </p>
        </div>
      </div>
      {open && (
        <ul className={classes.ddList}>
          {type != "list" ? (
            <div className={classes.inputs}>
              <input
                type="tel"
                pattern="\$?(\d|\,)*"
                maxLength={type === "mixed" ? 6 : 1}
                placeholder={type === "mixed" ? "Min Price" : "Min Beds"}
              />
              <span>-</span>
              <input
                type="tel"
                pattern="\$?(\d|\,)*"
                maxLength={type === "mixed" ? 6 : 1}
                placeholder={type === "mixed" ? "Max Price" : "Max Beds"}
              />
            </div>
          ) : null}

          <div className={classes.list}>
            {type === "mixed" ? (
              <li className={classes.Active}>
                <span>No Min</span>
              </li>
            ) : null}

            {items.map((item: any) => {
              if (type === "mixed") {
                return (
                  <li key={item.id}>
                    <span>{item.value}€</span>
                  </li>
                );
              } else if (type === "list") {
                return (
                  <li className={classes.ddItem} key={item.id}>
                    <span>{item.value}(Totals)</span>
                  </li>
                );
              } else {
                return null;
              }
            })}
          </div>
        </ul>
      )}
    </div>
  );
}

export default DropDown;
