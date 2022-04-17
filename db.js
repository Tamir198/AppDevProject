const data = [
  {
    name: "one",
    templateUrl: "templates/templateA.html",
    texts: ["text1", "text2", "text3", "text4"],
    imagesUrl: ["images/img1.jpg", "images/img2.jpg"],
    days: {
      monday: {
        fromHour: 6,
        toHour: 12
      },
      wednesday: {
        fromHour: 13,
        toHour: 20
      }
    },

    fromDate: "1/1/2022",
    toDate: "31/12/2022",

  },
  {
    name: "two",
    templateUrl: "templates/templateB.html",
    texts: ["text1", "text2", "text3", "text4", "text5", "text6", "text7", "text8", "text9", "text10"],
    imagesUrl: ["images/img1.jpg"],
    days: {
      Tuesday: {
        fromHour: 10,
        toHour: 16
      },
      wednesday: {
        fromHour: 10,
        toHour: 16
      }
    },

    fromDate: "1/3/2022",
    toDate: "30/4/2022",

  },
  {
    name: "Third",
    templateUrl: "templates/templateB.html",
    texts: [],
    imagesUrl: [],
    days: {
      Sunday: {
        fromHour: 8,
        toHour: 22
      },
      monday: {
        fromHour: 8,
        toHour: 22
      },
      tuesday: {
        fromHour: 8,
        toHour: 22
      },
      wednesday: {
        fromHour: 8,
        toHour: 22
      },
      thursday: {
        fromHour: 8,
        toHour: 22
      },
      friday: {
        fromHour: 8,
        toHour: 22
      },
      saturday: {
        fromHour: 8,
        toHour: 22
      },
    },
    fromDate: "1/5/2022",
    toDate: "15/6/2022",

  },
  {
    name: "Fourth",
    templateUrl: "templates/templateA.html",
    texts: ["text1", "text2"],
    imagesUrl: [],
    days: {
      monday: {
        fromHour: 15,
        toHour: 19
      },
    },

    fromDate: "29/3/2022",
    toDate: "15/4/2022",

  },
  {
    name: "Fifth",
    templateUrl: "templates/templateB.html",
    texts: ["text1", "text2", "text3", "text4", "text5", "text6", "text7"],
    imagesUrl: ["images/img1.jpg", "images/img2.jpg"],
    days: {
      monday: {
        fromHour: 1,
        toHour: 23
      },
      tuesday: {
        fromHour: 1,
        toHour: 23
      },
      wednesday: {
        fromHour: 1,
        toHour: 23
      },
    },

    fromDate: "1/4/2022",
    toDate: "30/4/2022",
  },

];


export default data