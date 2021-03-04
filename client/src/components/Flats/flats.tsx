import classes from "./flats.module.scss";

function Flats() {
  const fictionalFlats = [
    {
      price: 110,
      rooms: 2,
      beds: 2,
      title: "Pleasure At Germany",
      description:
        "Bacon ipsum dolor amet tongue buffalo alcatra salami fatback t-bone, shankle chicken pork belly rump. Meatloaf salami boudin beef ribs brisket, jowl pork chop tenderloin landjaeger. Corned beef cupim salami hamburger beef. Pork chop flank ham chuck, shoulder prosciutto turkey pastrami ball tip shankle ground round tail chislic. Shoulder landjaeger sausage kevin buffalo. Bresaola boudin alcatra ball tip.",
    },
    {
      price: 210,
      rooms: 4,
      beds: 3,
      title: "Frankfrut Apartments",
      description:
        "Bacon ipsum dolor amet tongue buffalo alcatra salami fatback t-bone, shankle chicken pork belly rump. Meatloaf salami boudin beef ribs brisket, jowl pork chop tenderloin landjaeger. Corned beef cupim salami hamburger beef. Pork chop flank ham chuck, shoulder prosciutto turkey pastrami ball tip shankle ground round tail chislic. Shoulder landjaeger sausage kevin buffalo. Bresaola boudin alcatra ball tip.",
    },
  ];
  console.log(fictionalFlats, "Flats");
  return (
    <div className={classes.Flats}>
      <h1>Most Recent Apartments</h1>
      <ul>
        {fictionalFlats.map((flat, index) => {
          return (
            <li className={classes.flat} key={index}>
              <h1>{flat.title}</h1>
              <p>{flat.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Flats;
