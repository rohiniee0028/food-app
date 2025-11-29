const resList = [
  {
    id: 1,
    name: "Pizza Hut",
    cuisines: ["Pizzas"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/8/19/091ca8bb-fc99-4386-b2fe-62e6e6ca0a32_d6d588ac-2493-44f3-9e5b-43c319c6b4bd.jpg",
    avgRating: "4.2",
    deliveryTime: "23 mins",
    costForTwo: "₹350 for two"
  },
  {
    id: 2,
    name: "Chinese Wok",
    cuisines: ["Chinese", "Asian", "Tibetan"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
    avgRating: "4.2",
    deliveryTime: "26 mins",
    costForTwo: "₹250 for two"
  },
  {
    id: 3,
    name: "Olio - The Wood Fired Pizzeria",
    cuisines: ["Pizzas", "Pastas", "Italian", "Fast Food"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/11/20/674aeaf2-4d29-466b-9044-c1fd1491edd1_6378e136-96b5-4bbb-a87a-3c7d87cb51cf.png",
    avgRating: "4.3",
    deliveryTime: "37 mins",
    costForTwo: "₹300 for two"
  },
  {
    id: 4,
    name: "Apni Veg Rasoi",
    cuisines: ["North Indian", "Snacks", "Indian", "Thalis"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/9/24/41c364d8-2c4b-410a-a5d5-174c3517e9a3_9086e74e-7d0b-447c-a2ec-b33567436dd8.jpg",
    avgRating: "3.9",
    deliveryTime: "28 mins",
    costForTwo: "₹250 for two"
  },
  {
    id: 5,
    name: "Cruffin Premium - Cakes and Desserts",
    cuisines: ["Bakery", "Desserts"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/6/5/5471c5e4-1ca2-456d-bc9c-edaca2531119_11768119-18d3-471a-89e7-00ec707a01ac.jpg",
    avgRating: "4.6",
    deliveryTime: "24 mins",
    costForTwo: "₹250 for two"
  },
  {
    id: 6,
    name: "Dana Choga",
    cuisines: ["North Indian"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/6f6d848b-d629-4fc8-bcaa-9eeca8c26e11_323600%20(1).jpg",
    avgRating: "4.5",
    deliveryTime: "33 mins",
    costForTwo: "₹500 for two"
  },
  {
    id: 7,
    name: "Dum Safar Biryani",
    cuisines: ["Biryani", "Kebabs", "North Indian", "Barbecue"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/xfrukzybbbalygk4chfe",
    avgRating: "4.4",
    deliveryTime: "26 mins",
    costForTwo: "₹500 for two"
  },

  // -------------------------
  // Your Additional Items (Corrected)
  // -------------------------

  {
    id: 8,
    name: "Meghna Foods",
    cuisines: ["North Indian", "Biryani"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/1/13/7755cfa2-4bce-47ca-af36-d97dbfc7a157_af8bb4a8-2eee-428a-b664-7e38f498b5bf.jpg",
    avgRating: "4.4",
    deliveryTime: "30 mins",
    costForTwo: "₹400 for two"
  },
  {
    id: 9,
    name: "Green Bowl",
    cuisines: ["Salads", "Healthy"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&s=0a6b3a0a1f3b3f4d1a2c5d6e7f8a9b0c",
    avgRating: "3.9",
    deliveryTime: "20 mins",
    costForTwo: "₹350 for two"
  },
  {
    id: 10,
    name: "Pasta Palace",
    cuisines: ["Italian", "Pasta"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/6/30/567fe7fb-5d26-4d48-b485-6499740981e1_1cd6f0d4-986a-499f-a89c-0d6c812f11d1.jpg_compressed",
    avgRating: "4.2",
    deliveryTime: "35 mins",
    costForTwo: "₹500 for two"
  },
  {
    id: 11,
    name: "Spice Hub",
    cuisines: ["Chinese", "Indo-Chinese"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/9/0b80cf19-1b13-4893-b8fb-d88124d34d0f_29f94631-155f-4f2a-bd99-b3a7ea17f17d.png_compressed",
    avgRating: "3.6",
    deliveryTime: "25 mins",
    costForTwo: "₹250 for two"
  },
  {
    id: 12,
    name: "Sushi World",
    cuisines: ["Japanese", "Sushi"],
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b2c1d0e9f8a7b6c5d4e3f2012345678",
    avgRating: "4.8",
    deliveryTime: "40 mins",
    costForTwo: "₹800 for two"
  },
  {
    id: 13,
    name: "Taco Town",
    cuisines: ["Mexican", "Tacos"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/3/31/d4e08de4-bf55-4777-afab-7fc227c4ffe8_49b9d160-df1d-4190-91cf-e876e919a54f.png",
    avgRating: "3.0",
    deliveryTime: "22 mins",
    costForTwo: "₹300 for two"
  },
  {
    id: 14,
    name: "The Dosa Corner",
    cuisines: ["South Indian", "Breakfast"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/iyymp6ylvrbrcmfzbw3o",
    avgRating: "4.6",
    deliveryTime: "18 mins",
    costForTwo: "₹220 for two"
  },
  {
    id: 15,
    name: "Midnight Pizza",
    cuisines: ["Pizza", "Fast Food"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/7/18/e583bc07-410f-4f27-b7a1-5fd3bb72ddfa_169faa36-e46f-4e5b-b720-863ca0246289.jpg",
    avgRating: "3.8",
    deliveryTime: "28 mins",
    costForTwo: "₹420 for two"
  },
  {
    id: 16,
    name: "Vegan Delight",
    cuisines: ["Vegan", "Healthy"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/25964f84f1523df7e07f294ebb03e446",
    avgRating: "4.5",
    deliveryTime: "24 mins",
    costForTwo: "₹370 for two"
  },
  {
    id: 17,
    name: "Cafe Mocha",
    cuisines: ["Cafe", "Bakery"],
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&s=1234567890abcdef1234",
    avgRating: "4.2",
    deliveryTime: "15 mins",
    costForTwo: "₹180 for two"
  },
  {
    id: 18,
    name: "Kebabi Express",
    cuisines: ["Kebabs", "North Indian"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&s=0fedcba9876543210fed",
    avgRating: "4.0",
    deliveryTime: "32 mins",
    costForTwo: "₹450 for two"
  }
];

export default resList;
