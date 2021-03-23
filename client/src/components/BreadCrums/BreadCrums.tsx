import classes from "./BreadCrums.module.scss";

interface BreadCrumbsInterface {
  pathname: string;
}

function BreadCrumbs(props: BreadCrumbsInterface) {
  console.log(props, " kokie props");
  return (
    <div className={classes.BreadCrumbs}>
      <a href="/">Home</a>
      <a href={props.pathname}>{props.pathname}</a>
    </div>
  );
}

export default BreadCrumbs;
