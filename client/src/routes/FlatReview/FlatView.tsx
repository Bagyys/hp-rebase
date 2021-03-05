import classes from "./FlatReview.module.scss";

function FlatView(props: any) {
  const flat = props.location.state.flat;
  console.log(flat);
  console.log(flat.mainImage, "koks url");
  return (
    <div className={classes.FlatReview}>
      <h1>Flat Review</h1>
      <div className={classes.FlatBox}>
        <div className={classes.ImagesBox}>
          <div className={classes.MainImage}>
            <img src={flat.mainImage} alt="Flat-main-image" />
          </div>
          <div className={classes.OtherImages}>
            <img src={flat.mainImage} alt="Flat-other-image" />
            <img src={flat.mainImage} alt="Flat-other-image" />
            <img src={flat.mainImage} alt="Flat-other-image" />
          </div>
        </div>
        <div className={classes.FlatDescription}>
          <div className={classes.AboutFlat}>
            <h2>{flat.title}</h2>
            <p>{flat.description}</p>
          </div>
          <div className={classes.FlatSpecifications}>
            <p>Price {flat.price} €</p>
            <p>Rooms {flat.rooms}</p>
            <p>Beds {flat.beds}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlatView;
