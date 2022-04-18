const data = [
  {
    name: "First",
    templateUrl: "templates/templateA.html",
    texts: ["text1", "text2", "text3", "text4"],
    imagesUrl: ["images/img1.jpg", "images/img2.jpg"],
    timesToShow: [{
      fromDate: "1/1/2022",
      toDate: "12/31/2022",
      days: {
        monday: {
          fromHour: 6,
          toHour: 12
        },
        wednesday: {
          fromHour: 6,
          toHour: 12
        }
      },
    }],
    timeDuration: 5,
    screens: { "1": true, "3": true }
  },
  {
    name: "Second",
    templateUrl: "templates/templateB.html",
    texts: ["text1", "text2", "text3", "text4", "text5", "text6", "text7", "text8", "text9", "text10"],
    imagesUrl: ["images/img1.jpg"],
    timesToShow: [{
      fromDate: "3/1/2022",
      toDate: "4/30/2022",
      days: {
        tuesday: {
          fromHour: 10,
          toHour: 16
        },
        wednesday: {
          fromHour: 10,
          toHour: 16
        }
      },
    }],
    timeDuration: 5,
    screens: { "1": true, "3": true }
  },
  {
    name: "Third",
    templateUrl: "templates/templateC.html",
    texts: [],
    imagesUrl: [],
    timesToShow: [{
      fromDate: "5/1/2022",
      toDate: "6/15/2022",
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
    }],
    timeDuration: 5,
    screens: { "1": true, "3": true }

  },
  {
    name: "Fourth",
    templateUrl: "templates/templateA.html",
    texts: ["text1", "text2"],
    imagesUrl: [],
    timesToShow: [{
      fromDate: "3/29/2022",
      toDate: "4/15/2022",
      days: {
        monday: {
          fromHour: 15,
          toHour: 19
        },
      },
    }],
    timeDuration: 5,
    screens: { "1": true, "3": true }
  },
  {
    name: "Fifth",
    templateUrl: "templates/templateB.html",
    texts: ["text1", "text2", "text3", "text4", "text5", "text6", "text7"],
    imagesUrl: ["images/img1.jpg", "images/img2.jpg"],
    timesToShow: [{
      fromDate: "4/1/2022",
      toDate: "4/30/2022",
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
    }],
    timeDuration: 5,
    screens: { "1": true, "3": true }
  },

];


export default data;