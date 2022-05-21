const data = [
  {
    name: "Hummus Eliahu",
    templateUrl: "templates/templateA.html",
    texts: ["Mesabaha", "thini", "Pita", "Soda"],
    imagesUrl: [
      "https://eilat.city/images/3362-%D7%97%D7%95%D7%9E%D7%95%D7%A1-%D7%90%D7%9C%D7%99%D7%94%D7%95-%D7%90%D7%99%D7%9C%D7%AA-12.jpg"
      ],
    timesToShow: [{
      fromDate: "1/1/2022",
      toDate: "12/31/2022",
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
    }],
    timeDuration: 5,
    screens: [1,2]
  },
  {
    name: "Pandora",
    templateUrl: "templates/templateB.html",
    texts: ["Braclet", "shine", "woman", "man", "earings", "jewelry", "hands", "necklace", "rings", "beautiful"],
    imagesUrl: ["https://canarywharf.com/wp-content/uploads/2020/05/canary-wharf-shops-services-pandora-ss20-1-710x690-1.jpg"],
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
    screens: [1,3]
  },
  {
    name: "Apple",
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
    screens: [2,3]

  },
  {
    name: "Cars",
    templateUrl: "templates/templateA.html",
    texts: ["Fast", "Furious"],
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
    timeDuration: 15,
    screens: [1]
  },
  {
    name: "McDonalds",
    templateUrl: "templates/templateB.html",
    texts: ["Eat with us", "Yummi", "I'm Loving it", "Soda", "onion rings", "burgers", "fries"],
    imagesUrl: [
      "https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Big-Mac-Extra-Value-Meals:product-header-desktop?wid=830&hei=456&dpr=off",
     "https://malls.amot.co.il/files/mcdonalds.png"
    ],
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
    timeDuration: 15,
    screens: [3]
  },

];


module.exports = data;
