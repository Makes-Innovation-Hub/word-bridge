const data = {
  status: "success",
  data: [
    {
      Ar: "هو",
      He: "הוא",
      ArEn: "huwa",
      HeEn: "hu",
      _id: "669115f0d3680c7369762604",
      __v: 0,
      id: "669115f0d3680c7369762604",
    },
    {
      Ar: "إلي",
      He: "לי",
      ArEn: "ilay",
      HeEn: "li",
      _id: "669115f0d3680c736976260c",
      __v: 0,
      id: "669115f0d3680c736976260c",
    },
  ],
};
const RestructuringDataFormat = () => {
  console.log("hi");
  const hebrew = data.data.map((element) => {
    if (element.HeEn)
      return {
        He: element.He,
        HeEn: element.HeEn,
        id: element._id,
        match: false,
      };
    else
      return {
        He: element.He,
        match: false,
      };
  });
  const arabic = data.data.map((element) => {
    if (element.ArEn)
      return {
        Ar: element.Ar,
        ArEn: element.ArEn,
        id: element._id,
        match: false,
      };
    else
      return {
        Ar: element.Ar,
        match: false,
      };
  });
  console.log(hebrew);
  console.log(arabic);
  return { arabic: arabic, hebrew: hebrew };
};

export default RestructuringDataFormat;
