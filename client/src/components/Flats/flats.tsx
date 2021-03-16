import classes from "./flats.module.scss";
import { Link } from "react-router-dom";
import newImg from "../../assets/images/lightning.png";
import phoneImg from "../../assets/images/phone.png";
import arrowRight from "../../assets/images/arrowRight.png";
import arrowLeft from "../../assets/images/arrowLeft.png";

export interface FlatInterface {
  id: number;
  price: number;
  rooms: number;
  beds: number;
  type: string;
  title: string;
  isAvailable: boolean;
  oneMonthFree: boolean;
  description: string;
  mainImage: string;
  mostRecent: boolean;
  address: string;
  phone: string;
}

function Flats() {
  const boxNew = (
    <div className={classes.NEW}>
      <img src={newImg} alt="New!" />
      <p>New</p>
    </div>
  );

  const fictionalFlats = [
    {
      id: 1,
      price: 110,
      rooms: 2,
      beds: 2,
      type: "Studio",
      title: "Pleasure At Germany",
      isAvailable: true,
      oneMonthFree: true,
      description:
        "Bacon ipsum dolor amet tongue buffalo alcatra salami fatback t-bone, shankle chicken pork belly rump. Meatloaf salami boudin beef ribs brisket, jowl pork chop tenderloin landjaeger. Corned beef cupim salami hamburger beef. Pork chop flank ham chuck, shoulder prosciutto turkey pastrami ball tip shankle ground round tail chislic. Shoulder landjaeger sausage kevin buffalo. Bresaola boudin alcatra ball tip.",
      mainImage: "/flat2.jpg",
      mostRecent: true,
      address: "930 W Altgeld St, Chicago, IL 60614",
      phone: "847-440-3110",
    },
    {
      id: 2,
      price: 210,
      rooms: 4,
      beds: 3,
      type: "Apartment",
      title: "Frankfrut Apartments",
      isAvailable: false,
      oneMonthFree: false,
      description:
        "Bacon ipsum dolor amet tongue buffalo alcatra salami fatback t-bone, shankle chicken pork belly rump. Meatloaf salami boudin beef ribs brisket, jowl pork chop tenderloin landjaeger. Corned beef cupim salami hamburger beef. Pork chop flank ham chuck, shoulder prosciutto turkey pastrami ball tip shankle ground round tail chislic. Shoulder landjaeger sausage kevin buffalo. Bresaola boudin alcatra ball tip.",
      mainImage: "/flat.jpg",
      mostRecent: false,
      address: "930 W Altgeld St, Chicago, IL 60614",
      phone: "847-440-3110",
    },
    {
      id: 3,
      price: 50,
      rooms: 1,
      beds: 1,
      type: "Apartment",
      title: "Guest House Frankfrut",
      isAvailable: true,
      oneMonthFree: true,
      description:
        "Bacon ipsum dolor amet tongue buffalo alcatra salami fatback t-bone, shankle chicken pork belly rump. Meatloaf salami boudin beef ribs brisket, jowl pork chop tenderloin landjaeger. Corned beef cupim salami hamburger beef. Pork chop flank ham chuck, shoulder prosciutto turkey pastrami ball tip shankle ground round tail chislic. Shoulder landjaeger sausage kevin buffalo. Bresaola boudin alcatra ball tip.",
      mainImage: "./flat2.jpg",
      mostRecent: false,
      address: "930 W Altgeld St, Chicago, IL 60614",
      phone: "847-440-3110",
    },
    {
      id: 4,
      price: 75,
      rooms: 5,
      beds: 2,
      type: "Studio",
      title: "Hostel Frankfrut",
      isAvailable: true,
      oneMonthFree: false,
      description:
        "Bacon ipsum dolor amet tongue buffalo alcatra salami fatback t-bone, shankle chicken pork belly rump. Meatloaf salami boudin beef ribs brisket, jowl pork chop tenderloin landjaeger. Corned beef cupim salami hamburger beef. Pork chop flank ham chuck, shoulder prosciutto turkey pastrami ball tip shankle ground round tail chislic. Shoulder landjaeger sausage kevin buffalo. Bresaola boudin alcatra ball tip.",
      mainImage: "./flat.jpg",
      mostRecent: true,
      address: "930 W Altgeld St, Chicago, IL 60614",
      phone: "847-440-3110",
    },
  ];
  return (
    <div className={classes.Flats}>
      <ul>
        {fictionalFlats.map((flat: FlatInterface, index: number) => {
          return (
            <li className={classes.flat} key={index}>
              <div className={classes.aboutFlat}>
                <h1>{flat.title}</h1>
                <p>{flat.address}</p>
              </div>
              <div className={classes.flatContent}>
                <div className={classes.flatImg}>
                  <button className={classes.arrowLeft}>
                    <img src={arrowLeft} alt="arrowRight" />
                  </button>
                  <img
                    className={classes.MainImage}
                    src={flat.mainImage}
                    alt="Main-Flat"
                  />
                  <button className={classes.arrowRight}>
                    <img src={arrowRight} alt="arrowRight" />
                  </button>
                </div>
                <div className={classes.rightSide}>
                  <div className={classes.top}>
                    {flat.mostRecent ? boxNew : null}
                    {flat.oneMonthFree ? <p>1 Month Free Rent</p> : null}
                  </div>
                  <div className={classes.SpecInfo}>
                    <h2>{flat.price}€</h2>
                    <h2>Rooms {flat.rooms}</h2>
                    <h2>
                      {flat.type} - {flat.beds}Beds
                    </h2>
                    {flat.isAvailable ? (
                      <h2>Avail. Now</h2>
                    ) : (
                      <h2>Not Avail.</h2>
                    )}
                    <a className={classes.Phone} href="tel:847-440-3110">
                      <img src={phoneImg} alt="Flat-Phone-Number" />
                      {flat.phone}
                    </a>
                    <button>
                      <Link
                        to={{
                          pathname: `/flat/${flat.id}`,
                          state: { flat: flat },
                        }}
                      >
                        Check Availability
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Flats;
