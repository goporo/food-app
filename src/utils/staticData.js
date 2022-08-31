import images from "assets/imgs";
import svgs from "assets/svgs";

// import {
//   Beef,
//   Chicken,
//   Coffee,
//   Dinner,
//   Burger,
//   Juice,
//   Lunch,
//   Pork,
//   Tea,
// } from "./homeSvgs";

// home
// const homeBannersData = [
//   {
//     className: "banner-st",
//     title: "Enjoy your meal",
//     description: "Good food is wise",
//     strong: " medicine",
//     background: BannerOne,
//   },
//   {
//     className: "banner-nd",
//     title: "Happy your special",
//     description: "Love at first",
//     strong: " bite",
//     background: BannerSecond,
//   },
//   {
//     className: "banner-rd",
//     title: "Good food is good mood",
//     description: "The belly rules the",
//     strong: " mind",
//     background: BannerThree,
//   },
// ];

const homeWorkData = [
  {
    img: images.step1,
    step: "1",
    content: "Choose Your Favorite",
    arrow: images.arrow1,
  },
  {
    img: images.step2,
    step: "2",
    content: "We Deliver Your Meals",
    arrow: images.arrow2,
  },
  {
    img: images.step3,
    step: "3",
    content: "Cash on Delivery",
    arrow: images.arrow3,
  },
  {
    img: images.step4,
    step: "4",
    content: "Eat And Enjoy",
  },
];

const homeIngredientsData = {
  leftData: [
    {
      title: "Mild Butter",
      content:
        "Patak's Butter Chicken Mild is a creamy tomato and butter flavour curry sauce",
      order: "01",
    },
    {
      title: "Slices Beef",
      content: "Get quality Beef Slices at Tesco. Shop in store or online",
      order: "02",
    },
    {
      title: "Sleek Onion",
      content:
        "Green onions have a sleek linear shape with white or pale-green bulbs and long green tops",
      order: "03",
    },
  ],
  rightData: [
    {
      title: "Fresh Bread",
      content:
        "Homemade bread is more nutritious than your store-bought variety",
      order: "04",
    },
    {
      title: "Lettuce Leaf",
      content:
        "It is most often grown as a leaf vegetable, but sometimes for its stem and seeds",
      order: "05",
    },
    {
      title: "Glow Cheese",
      content: "Glowfood. Cheese. Is. Unreal! As a cheese fanatic",
      order: "06",
    },
  ],
};

const homeCategoryData = [
  {
    img: svgs.burger,
    name: "breakfast",
  },
  {
    img: svgs.coffee,
    name: "coffee",
  },
  {
    img: svgs.pork,
    name: "pork ham",
  },
  {
    img: svgs.dinner,
    name: "dinner",
  },
  {
    img: svgs.tea,
    name: "tea",
  },
  {
    img: svgs.lunch,
    name: "lunch",
  },
  {
    img: svgs.juice,
    name: "juice",
  },
  {
    img: svgs.chicken,
    name: "grilled chicken",
  },
  {
    img: svgs.beef,
    name: "roast beef",
  },
];

const homeProductsData = [
  {
    img: images.product1,
    name: "Crazy Burger",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "49",
  },
  {
    img: images.product2,
    name: "Beefcakes Burgers",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "39",
  },
  {
    img: images.product3,
    name: "The Crispy Bun",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "19",
  },
  {
    img: images.product4,
    name: "Bugout Burgers",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "69",
  },
  {
    img: images.product1,
    name: "Juicy Burger",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "29",
  },
  {
    img: images.product2,
    name: "Lava Burgers",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "39",
  },
];

const homeReviewsData = [
  {
    img: images.review1,
    name: "mark zuckerberg",
    role: "Co-founding Facebook, Inc",
    comment:
      "I chose food G because of their value And incredible superior customer Service they really awesome Food with quality service Ha of their value And incredible sup with quality",
  },
  {
    img: images.review2,
    name: "Rose",
    role: "Main vocalist of Backpink group",
    comment:
      "Had dinner with girl friends. Menu is perfect, something for everyone. Service was awesome and Jason was very accommodating. Will be back definitely!",
  },
  {
    img: images.review3,
    name: "Tim Cook",
    role: "CEO of Apple",
    comment:
      "I had lunch with some of my colleagues at Echo on Day 1. I had the wedge salad - it was delicious. On Night 2, I enjoyed a drink at the bar. I had a Margarita. The service was excellent",
  },
];

const homeAnalysisData = [
  {
    suffix: "+",
    description: "Cups of Coffee",
    quantity: 358
  },
  {
    suffix: "+",
    description: "Orders Everyday",
    quantity: 2578
  },
  {
    description: "Skilled Professionals",
    quantity: 52
  },
  {
    description: "Sandwichs at Hour",
    quantity: 31
  },
];

// // detail
// const detailTableData = [
//   {
//     title: null,
//     description: "28 cm size",
//     ingredients: "Ingredients",
//   },
//   {
//     title: "24",
//     description: "28 cm size",
//     ingredients: "Egg",
//   },
//   {
//     title: "728",
//     description: "Energy",
//     ingredients: "Milk Protein",
//   },
//   {
//     title: "1054",
//     description: "Calo",
//     ingredients: "Sesame",
//   },
//   {
//     title: "68",
//     description: "Fat",
//     ingredients: "Lactose",
//   },
//   {
//     title: "25",
//     description: "Gluxit",
//     ingredients: "Gluten",
//   },
//   {
//     title: "548",
//     description: "Protein",
//     ingredients: "Mustard",
//   },
// ];

export {
  // homeBannersData,
  homeWorkData,
  homeCategoryData,
  homeIngredientsData,
  homeReviewsData,
  homeProductsData,
  homeAnalysisData,
  // detailTableData,
};
