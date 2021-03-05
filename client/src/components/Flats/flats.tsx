import classes from "./flats.module.scss";
import { Link } from "react-router-dom";

function Flats() {
  const fictionalFlats = [
    {
      id: 1,
      price: 110,
      rooms: 2,
      beds: 2,
      title: "Pleasure At Germany",
      description:
        "Bacon ipsum dolor amet tongue buffalo alcatra salami fatback t-bone, shankle chicken pork belly rump. Meatloaf salami boudin beef ribs brisket, jowl pork chop tenderloin landjaeger. Corned beef cupim salami hamburger beef. Pork chop flank ham chuck, shoulder prosciutto turkey pastrami ball tip shankle ground round tail chislic. Shoulder landjaeger sausage kevin buffalo. Bresaola boudin alcatra ball tip.",
      mainImage: "/flat2.jpg",
      mostRecent: true,
    },
    {
      id: 2,
      price: 210,
      rooms: 4,
      beds: 3,
      title: "Frankfrut Apartments",
      description:
        "Bacon ipsum dolor amet tongue buffalo alcatra salami fatback t-bone, shankle chicken pork belly rump. Meatloaf salami boudin beef ribs brisket, jowl pork chop tenderloin landjaeger. Corned beef cupim salami hamburger beef. Pork chop flank ham chuck, shoulder prosciutto turkey pastrami ball tip shankle ground round tail chislic. Shoulder landjaeger sausage kevin buffalo. Bresaola boudin alcatra ball tip.",
      mainImage: "/flat.jpg",
      mostRecent: false,
    },
    {
      id: 3,
      price: 50,
      rooms: 1,
      beds: 1,
      title: "Guest House Frankfrut",
      description:
        "Bacon ipsum dolor amet tongue buffalo alcatra salami fatback t-bone, shankle chicken pork belly rump. Meatloaf salami boudin beef ribs brisket, jowl pork chop tenderloin landjaeger. Corned beef cupim salami hamburger beef. Pork chop flank ham chuck, shoulder prosciutto turkey pastrami ball tip shankle ground round tail chislic. Shoulder landjaeger sausage kevin buffalo. Bresaola boudin alcatra ball tip.",
      mainImage: "./flat2.jpg",
      mostRecent: false,
    },
    {
      id: 4,
      price: 75,
      rooms: 5,
      beds: 2,
      title: "Hostel Frankfrut",
      description:
        "Bacon ipsum dolor amet tongue buffalo alcatra salami fatback t-bone, shankle chicken pork belly rump. Meatloaf salami boudin beef ribs brisket, jowl pork chop tenderloin landjaeger. Corned beef cupim salami hamburger beef. Pork chop flank ham chuck, shoulder prosciutto turkey pastrami ball tip shankle ground round tail chislic. Shoulder landjaeger sausage kevin buffalo. Bresaola boudin alcatra ball tip.",
      mainImage: "./flat.jpg",
      mostRecent: true,
    },
  ];
  console.log(fictionalFlats, "Flats");
  return (
    <div className={classes.Flats}>
      <h1>Most Recent Apartments</h1>
      <ul>
        {fictionalFlats.map((flat: any, index) => {
          return (
            <li className={classes.flat} key={index}>
              <div>
                <img src={flat.mainImage} alt="Main-Flat-Photo" />
                {flat.mostRecent ? <p className={classes.NEW}>NEW!</p> : null}
              </div>
              <div className={classes.aboutFlat}>
                <h1>{flat.title}</h1>
                <p>{flat.description}</p>
              </div>
              <div className={classes.SpecInfo}>
                <h2>Price {flat.price}€</h2>
                <h2>Rooms {flat.rooms}</h2>
                <h2>Beds {flat.beds}</h2>
              </div>
              <button>
                <Link
                  to={{
                    pathname: `/flat/${flat.id}`,
                    state: { flat: flat },
                  }}
                >
                  Read More
                </Link>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Flats;
