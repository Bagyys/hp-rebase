const { Lock } = require("../models/lockModel");
let debug = require("debug");

exports.handleDoor = async (req, res) => {
  console.log("handleDoor");
  const data = req.query;
  console.log("data");
  console.log(data);
  if (data.o1 === undefined || data.o2 === undefined || data.n2 === undefined) {
    console.log("data o1, o2, n2 undefined");
    console.log("send error");
    return res.status(404).send("netu parametrof");
  }
  try {
    if (!data.h || data.h !== "A3%nm*Wb") {
      console.log("data h undefined or incorrect");
      console.log("send error");
      // TODO : reset to initial state  ???
      return res.status(404).send("netu metki");
    }
    let updatedLock;
    let dataInDb = await Lock.findOne({ lockId: data.id });
    console.log("dataInDb");
    console.log(dataInDb);
    console.log("dataInDb.o1");
    console.log(dataInDb.o1);
    console.log("dataInDb.o2");
    console.log(dataInDb.o2);
    //gauname o1===0, o2===0, n2===0
    if (data.o1 === "0" && data.o2 === "0" && data.n2 === "0") {
      console.log("query o1=0, o2=0, n2=0");
      //tikriname DB o1 ir 02
      // jei o1 ir o2 lygus 0
      if (dataInDb.o1 == 0 && dataInDb.o2 == 0) {
        console.log("db o1=0, o2=0");
        const {
          i1,
          i2,
          i3,
          i4,
          i5,
          i6,
          i7,
          i8,
          i9,
          o1,
          o2,
          o3,
          interval: t,
        } = dataInDb;
        const { n1, n2, n3, e } = data;

        // ciklas nulis
        // return o1, o2 ir n2 kaip requeste
        const result = `A3%nm*Wb&ID=Lg18299RHS10MxSh&i1=${i1}&$i2=${i2}&i3=${i3}&i4=${i4}&i5=${i5}&i6=${i6}&i7=${i7}&i8=${i8}&i9=${i9}&n1=${n1}&n2=${n2}&n3=${n3}&o1=${o1}&o2=${o2}&o3=${o3}&t=${t}&e=${e}`;
        console.log(`return o1=${o1}, o2=${o2}, n2=${n2}`);
        return res.status(200).send(result);

        // jei o1 arba o2 DB lygus 1
      } else if (
        (dataInDb.o1 == 1 && dataInDb.o2 == 0) ||
        (dataInDb.o2 == 1 && dataInDb.o1 == 0)
      ) {
        console.log("db o1=1, o2=0 or db o1=0, o2=1");
        const {
          i1,
          i2,
          i3,
          i4,
          i5,
          i6,
          i7,
          i8,
          i9,
          o1,
          o2,
          o3,
          interval: t,
        } = dataInDb;
        const { n1, n2, n3, e } = data;

        // return o1 arba o2 (ta, kuris lygus 1) ir n2=1
        const result = `A3%nm*Wb&ID=Lg18299RHS10MxSh&i1=${i1}&$i2=${i2}&i3=${i3}&i4=${i4}&i5=${i5}&i6=${i6}&i7=${i7}&i8=${i8}&i9=${i9}&n1=${n1}&n2=${n2}&n3=${n3}&o1=${o1}&o2=${o2}&o3=${o3}&t=${t}&e=${e}`;
        console.log(`return o1=${o1}, o2=${o2}, n2=${n2}`);
        return res.status(200).send(result);
      }
      //gauname o1===1 arba o2===1, n2===1
    } else if (
      ((data.o1 === "1" && data.o2 === "0") ||
        (data.o2 === "1" && data.o1 === "0")) &&
      data.n2 === "1"
    ) {
      console.log("query n2=1 and o1=1 o2=0 / o1=0, o2=1");

      //tikriname DB o1 ir o2
      // jei DB o1 ar o2 buvo 1, keiciame i 0
      // return o1 arba o2 0 ir n2 1

      if (
        data.o1 === "1" &&
        data.o2 === "0" &&
        dataInDb.o1 == 1 &&
        dataInDb.o2 == 0
      ) {
        console.log("query o1=1 o2=0 and db o1=1, o2=0");

        updatedLock = await Lock.findOneAndUpdate(
          { lockId: data.id },
          {
            $set: {
              i1: data.i1,
              i2: data.i2,
              i3: data.i3,
              i4: data.i4,
              i5: data.i5,
              i6: data.i6,
              i7: data.i7,
              i8: data.i8,
              i9: data.i9,
              o1: 0,
              o2: +data.o2,
              o3: data.o3,
            },
            $push: { [`closed.o1`]: new Date() },
          },
          { new: true }
        );
        // get values to return from updated door
        const {
          i1,
          i2,
          i3,
          i4,
          i5,
          i6,
          i7,
          i8,
          i9,
          o1,
          o2,
          o3,
          interval: t,
          e,
        } = updatedLock;
        const n1 = data.n1;
        const n2 = 1;
        const n3 = data.n3;

        const result = `A3%nm*Wb&ID=Lg18299RHS10MxSh&i1=${i1}&$i2=${i2}&i3=${i3}&i4=${i4}&i5=${i5}&i6=${i6}&i7=${i7}&i8=${i8}&i9=${i9}&n1=${n1}&n2=${n2}&n3=${n3}&o1=${o1}&o2=${o2}&o3=${o3}&t=${t}&e=${e}`;
        console.log(`return o1=${o1}, o2=${o2}, n2=${n2}`);
        return res.status(200).send(result);
      } else if (
        data.o2 === "1" &&
        data.o1 === "0" &&
        dataInDb.o2 == 1 &&
        dataInDb.o1 == 0
      ) {
        console.log("query o1=0 o2=1 and db o1=0, o2=1");
        updatedLock = await Lock.findOneAndUpdate(
          { lockId: data.id },
          {
            $set: {
              i1: data.i1,
              i2: data.i2,
              i3: data.i3,
              i4: data.i4,
              i5: data.i5,
              i6: data.i6,
              i7: data.i7,
              i8: data.i8,
              i9: data.i9,
              o1: +data.o1,
              o2: 0,
              o3: +data.o3,
            },
            $push: { [`closed.o2`]: new Date() },
          },
          { new: true }
        );
        // get values to return from updated door
        const {
          i1,
          i2,
          i3,
          i4,
          i5,
          i6,
          i7,
          i8,
          i9,
          o1,
          o2,
          o3,
          interval: t,
          e,
        } = updatedLock;
        const n1 = 0;
        const n2 = 1;
        const n3 = data.n3;

        const result = `A3%nm*Wb&ID=Lg18299RHS10MxSh&i1=${i1}&$i2=${i2}&i3=${i3}&i4=${i4}&i5=${i5}&i6=${i6}&i7=${i7}&i8=${i8}&i9=${i9}&n1=${n1}&n2=${n2}&n3=${n3}&o1=${o1}&o2=${o2}&o3=${o3}&t=${t}&e=${e}`;
        console.log(`return o1=${o1}, o2=${o2}, n2=${n2}`);
        return res.status(200).send(result);
      }

      //gauname o1===0, o2===0, n2===1
    } else if (data.o1 === "0" && data.o2 === "0" && data.n2 === "1") {
      console.log("query o1=0 o2=0 n2=1");
      //tikriname DB o1 ir 02
      // jei o1 ir o2 lygus 0
      if (dataInDb.o1 == 0 && dataInDb.o2 == 0) {
        console.log("db o1=0 o2=0");
        const {
          i1,
          i2,
          i3,
          i4,
          i5,
          i6,
          i7,
          i8,
          i9,
          o1,
          o2,
          o3,
          interval: t,
        } = dataInDb;
        const { n1, n2, n3, e } = data;
        // URL EXAMPLE
        // A3%nm*Wb_ID=Lg18299RHS10MxSh_&i1=1_&i2=1_&i3=1_&i4=1_&i5=1_&i6=1_&i7=1_&i8=1_&i9=1_&n1=1_&n2=1_&n3=1_&o1=0_&o2=0_&o3=0_&e=0

        // return o1===0, o2===0, n2===1
        const result = `A3%nm*Wb&ID=Lg18299RHS10MxSh&i1=${i1}&$i2=${i2}&i3=${i3}&i4=${i4}&i5=${i5}&i6=${i6}&i7=${i7}&i8=${i8}&i9=${i9}&n1=${n1}&n2=${n2}&n3=${n3}&o1=${o1}&o2=${o2}&o3=${o3}&t=${t}&e=${e}`;
        console.log(`return o1=${o1}, o2=${o2}, n2=${n2}`);
        return res.status(200).send(result);
      }

      // unsupported combination - reset to initial state
    } else {
      console.log("edge cases - reset to initial state");
      updatedLock = await Lock.findOneAndUpdate(
        { lockId: data.id },
        {
          $set: {
            i1: data.i1,
            i2: data.i2,
            i3: data.i3,
            i4: data.i4,
            i5: data.i5,
            i6: data.i6,
            i7: data.i7,
            i8: data.i8,
            i9: data.i9,
            o1: 0,
            o2: 0,
            o3: 0,
          },
          $push: { [`closed.o1`]: new Date(), [`closed.o2`]: new Date() },
        },
        { new: true }
      );
      // get values to return from updated door
      const {
        i1,
        i2,
        i3,
        i4,
        i5,
        i6,
        i7,
        i8,
        i9,
        o1,
        o2,
        o3,
        interval: t,
        e,
      } = updatedLock;
      const n1 = data.n1;
      const n2 = 0;
      const n3 = data.n3;
      const result = `A3%nm*Wb&ID=Lg18299RHS10MxSh&i1=${i1}&$i2=${i2}&i3=${i3}&i4=${i4}&i5=${i5}&i6=${i6}&i7=${i7}&i8=${i8}&i9=${i9}&n1=${n1}&n2=${n2}&n3=${n3}&o1=${o1}&o2=${o2}&o3=${o3}&t=${t}&e=${e}`;
      console.log(`return o1=${o1}, o2=${o2}, n2=${n2}`);
      return res.status(200).send(result);
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.openLock = async (req, res) => {
  console.log("openDoor");
  console.log("req.query");
  console.log(req.query);
  const data = req.query;

  try {
    if (!req.query.h || req.query.h !== "A3%nm*Wb") {
      return res.status(404).send("netu metki");
    }
    let openedLock;

    // ar reikia apsidrausti, kai jau esama o1 open = true? arba o2 open = true?
    if (data.o1 != undefined && data.o1 == 1) {
      // ar praeina
      openedLock = await Lock.findOneAndUpdate(
        { lockId: data.id },
        {
          $set: { o1: +data.o1 },
          $push: { [`opened.o1`]: new Date() },
        },
        { new: true }
      );
      if (openedLock === undefined || openedLock === null) {
        return res.status(404).send("No doors found by ID");
      }
    }
    if (data.o2 != undefined && data.o2 == 1) {
      openedLock = await Lock.findOneAndUpdate(
        { lockId: data.id },
        {
          $set: { o2: +data.o2 },
          $push: { [`opened.o2`]: new Date() },
        },
        { new: true }
      );
      if (openedLock === undefined || openedLock === null) {
        return res.status(404).send("No doors found by ID");
      }
    }

    if (openedLock === undefined || openedLock === null) {
      return res.status(404).send("e11");
    }
    return res.status(200).send(openedLock);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.reset = async (req, res) => {
  console.log("reset");
  console.log("req.query");
  console.log(req.query);
  const { id } = req.query;

  const resetLock = await Lock.findOneAndUpdate(
    { lockId: id },
    {
      $set: {
        o1: 0,
        o2: 0,
      },
      $push: { [`closed.o1`]: new Date(), [`closed.o2`]: new Date() },
    },
    { new: true }
  );
  if (resetLock === undefined || resetLock === null) {
    return res.status(404).send("No lock found by ID");
  }
  return res.status(200).send(resetLock);
};
