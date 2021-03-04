const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
require("dotenv").config();
require("./db/connection")();
const morgan = require("morgan");
const cors = require("cors");
morgan("tiny");
const helmet = require("helmet");

app.use(helmet());

// setup static files and bodyparser
app.use(express.static(__dirname + "/public"));
app.use(cors());
app.use(express.json());
// extended false leidzia parse'inti non default features
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(
  morgan("dev", {
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  })
);

// log all requests to access.log
app.use(
  morgan("common", {
    stream: fs.createWriteStream(path.join(__dirname, "access.log"), {
      flags: "a",
    }),
  })
);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);

// app.get("/", (req, res) => {
//   const data = req.query;
//   console.log(data.i1, "data");

// A3%nm*Wb_ID=Lg18299RHS10MxSh_&i1=1_&i2=1_&i3=1_&i4=1_&i5=1_&i6=1_&i7=1_&i8=1_&i9=1_&n1=1_&n2=1_&n3=1_&o1=0_&o2=0_&o3=0_&e=0
//   if (!req.query.t || req.query.t !== "A3%nm*Wb") {
//     return res.status(404).send("netu metki");
//   }
//   let i1 = data.i1;

//   // requestas i db atnaujinti

//   // gavai is db atsakyma

//   // jei successful duodi dinamiskai atgal atnaujinta data

// A3%nm*WB&id=Lg18299RHS10MxSh&i1=1&i2=1&i3=1&i4=1&i5=1&i6=1&i7=1&i8=1&i9=1&n1=1&n2=1&n3=1&o1=0&o2=0&o3=0&e=0

//   res.send(
//     `A3%nm*Wb_ID=Lg18299RHS10MxSh_&i1=1_&i2=1_&i3=1_&i4=1_&i5=1_&i6=1_&i7=1_&i8=1_&i9=1_&n1=1_&n2=1_&n3=1_&o1=0_&o2=0_&o3=0_&e=0`
//   );
// });

// app.get("/posts", (req, res) => {
//   res.send("We are on posts");
// });

const allDoors = require("./routes/doorRoutes");
const allFlats = require("./routes/flatRoutes");

app.use("/", allDoors);
app.use("/flat/", allFlats);

app.listen(9000);
