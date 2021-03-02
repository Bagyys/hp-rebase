const { Door } = require("../models/doorModel");

exports.getDoor = async (req, res) => {
  const data = req.query;
  const { doorID } = req.query.id;
  console.log(data, "data");
  try {
    const door = await Door.findOne(doorID);
    if (!req.query.t || req.query.t !== "A3%nm*Wb") {
      return res.status(404).send("netu metki");
    }

    if (data.o1 === "0") {
      console.log("0 data");
      await door.updateOne({
        $set: {
          door: {
            i1: data.i1,
            i2: data.i2,
            i3: data.i3,
            i4: data.i4,
            i5: data.i5,
            i6: data.i6,
            i7: data.i7,
            i8: data.i8,
            i9: data.i9,
            n1: data.n1,
            n2: data.n2,
            n3: data.n3,
            o1: 1,
            o2: data.o2,
            o3: data.o3,
          },
        },
      });
    } else {
      console.log("1 data");
      await door.updateOne({
        $set: {
          door: {
            i1: data.i1,
            i2: data.i2,
            i3: data.i3,
            i4: data.i4,
            i5: data.i5,
            i6: data.i6,
            i7: data.i7,
            i8: data.i8,
            i9: data.i9,
            n1: data.n1,
            n2: data.n2,
            n3: data.n3,
            o1: 0,
            o2: data.o2,
            o3: data.o3,
          },
        },
      });
    }

    // A3%nm*Wb_ID=Lg18299RHS10MxSh_&i1=1_&i2=1_&i3=1_&i4=1_&i5=1_&i6=1_&i7=1_&i8=1_&i9=1_&n1=1_&n2=1_&n3=1_&o1=0_&o2=0_&o3=0_&e=0

    res.json(door);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
