const restaurantDetails = [
  {
    id: 1,
    name: "Pizza Hut",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/8/19/091ca8bb-fc99-4386-b2fe-62e6e6ca0a32_d6d588ac-2493-44f3-9e5b-43c319c6b4bd.jpg",
    description:
      "Famous for delicious pizzas, sides, and refreshing beverages. A global chain known for quality and quick service.",
    cuisines: ["Pizzas"],
    rating: 4.2,
    deliveryTime: "23 mins",
    costForTwo: "₹350 for two",
    availability: "Open",
    location: "Sector 18 Market",
    locality: "Noida",
  },

  {
    id: 2,
    name: "Chinese Wok",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
    description:
      "Hot and fresh wok bowls with customizable sauces, rice, noodles, and authentic Asian flavors.",
    cuisines: ["Chinese", "Asian", "Tibetan"],
    rating: 4.2,
    deliveryTime: "26 mins",
    costForTwo: "₹250 for two",
    availability: "Open",
    location: "Cyber Hub",
    locality: "Gurgaon",
  },

  {
    id: 3,
    name: "Olio - The Wood Fired Pizzeria",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/11/20/674aeaf2-4d29-466b-9044-c1fd1491edd1_6378e136-96b5-4bbb-a87a-3c7d87cb51cf.png",
    description:
      "Authentic wood-fired pizzas, handcrafted pastas, and Italian-style starters.",
    cuisines: ["Pizzas", "Pastas", "Italian", "Fast Food"],
    rating: 4.3,
    deliveryTime: "37 mins",
    costForTwo: "₹300 for two",
    availability: "Open",
    location: "MG Road",
    locality: "Gurgaon",
  },

  {
    id: 4,
    name: "Apni Veg Rasoi",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/9/24/41c364d8-2c4b-410a-a5d5-174c3517e9a3_9086e74e-7d0b-447c-a2ec-b33567436dd8.jpg",
    description:
      "Simple, homely Indian dishes with thalis, sabzi, roti, and snacks at affordable prices.",
    cuisines: ["North Indian", "Snacks", "Indian", "Thalis"],
    rating: 3.9,
    deliveryTime: "28 mins",
    costForTwo: "₹250 for two",
    availability: "Open",
    location: "Sector 62",
    locality: "Noida",
  },

  {
    id: 5,
    name: "Cruffin Premium - Cakes and Desserts",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/6/5/5471c5e4-1ca2-456d-bc9c-edaca2531119_11768119-18d3-471a-89e7-00ec707a01ac.jpg",
    description:
      "Indulgent cakes, pastries, muffins, and premium desserts baked fresh daily.",
    cuisines: ["Bakery", "Desserts"],
    rating: 4.6,
    deliveryTime: "24 mins",
    costForTwo: "₹250 for two",
    availability: "Open",
    location: "Sushant Lok",
    locality: "Gurgaon",
  },

  {
    id: 6,
    name: "Dana Choga",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/6f6d848b-d629-4fc8-bcaa-9eeca8c26e11_323600%20(1).jpg",
    description:
      "Known for delicious North Indian curries, biryani, breads, and kebabs.",
    cuisines: ["North Indian"],
    rating: 4.5,
    deliveryTime: "33 mins",
    costForTwo: "₹500 for two",
    availability: "Open",
    location: "Rajouri Garden",
    locality: "Delhi",
  },

  {
    id: 7,
    name: "Dum Safar Biryani",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/xfrukzybbbalygk4chfe",
    description:
      "Slow-cooked biryani with kebabs and grilled meats, rich in flavors and spices.",
    cuisines: ["Biryani", "Kebabs", "North Indian", "Barbecue"],
    rating: 4.4,
    deliveryTime: "26 mins",
    costForTwo: "₹500 for two",
    availability: "Open",
    location: "Sector 15",
    locality: "Gurgaon",
  },

  {
    id: 8,
    name: "Meghna Foods",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/1/13/7755cfa2-4bce-47ca-af36-d97dbfc7a157_af8bb4a8-2eee-428a-b664-7e38f498b5bf.jpg",
    description:
      "Popular for authentic biryani and North Indian dishes with bold spices.",
    cuisines: ["North Indian", "Biryani"],
    rating: 4.4,
    deliveryTime: "30 mins",
    costForTwo: "₹400 for two",
    availability: "Open",
    location: "HSR Layout",
    locality: "Bangalore",
  },

  {
    id: 9,
    name: "Green Bowl",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&auto=format&fit=crop",
    description:
      "Fresh salads, bowls, and balanced meals perfect for healthy eating.",
    cuisines: ["Salads", "Healthy"],
    rating: 3.9,
    deliveryTime: "20 mins",
    costForTwo: "₹350 for two",
    availability: "Open",
    location: "Koregaon Park",
    locality: "Pune",
  },

  {
    id: 10,
    name: "Pasta Palace",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/6/30/567fe7fb-5d26-4d48-b485-6499740981e1_1cd6f0d4-986a-499f-a89c-0d6c812f11d1.jpg_compressed",
    description:
      "Classic Italian pasta dishes with rich sauces and aromatic herbs.",
    cuisines: ["Italian", "Pasta"],
    rating: 4.2,
    deliveryTime: "35 mins",
    costForTwo: "₹500 for two",
    availability: "Open",
    location: "Baner",
    locality: "Pune",
  },

  {
    id: 11,
    name: "Spice Hub",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/9/0b80cf19-1b13-4893-b8fb-d88124d34d0f_29f94631-155f-4f2a-bd99-b3a7ea17f17d.png_compressed",
    description:
      "Chinese and Indo-Chinese flavors with noodles, fried rice, and spicy starters.",
    cuisines: ["Chinese", "Indo-Chinese"],
    rating: 3.6,
    deliveryTime: "25 mins",
    costForTwo: "₹250 for two",
    availability: "Open",
    location: "Vaishali",
    locality: "Ghaziabad",
  },

  {
    id: 12,
    name: "Sushi World",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80&auto=format&fit=crop",
    description:
      "Premium sushi rolls, sashimi, and Japanese delicacies freshly prepared.",
    cuisines: ["Japanese", "Sushi"],
    rating: 4.8,
    deliveryTime: "40 mins",
    costForTwo: "₹800 for two",
    availability: "Open",
    location: "Koramangala",
    locality: "Bangalore",
  },

  {
    id: 13,
    name: "Taco Town",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/3/31/d4e08de4-bf55-4777-afab-7fc227c4ffe8_49b9d160-df1d-4190-91cf-e876e919a54f.png",
    description:
      "Authentic Mexican tacos, burritos, nachos and spicy dips.",
    cuisines: ["Mexican", "Tacos"],
    rating: 3.0,
    deliveryTime: "22 mins",
    costForTwo: "₹300 for two",
    availability: "Open",
    location: "Andheri West",
    locality: "Mumbai",
  },

  {
    id: 14,
    name: "The Dosa Corner",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/iyymp6ylvrbrcmfzbw3o",
    description:
      "Crispy dosas, idlis, vadas, and delicious South Indian breakfasts.",
    cuisines: ["South Indian", "Breakfast"],
    rating: 4.6,
    deliveryTime: "18 mins",
    costForTwo: "₹220 for two",
    availability: "Open",
    location: "BTM Layout",
    locality: "Bangalore",
  },

  {
    id: 15,
    name: "Midnight Pizza",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/7/18/e583bc07-410f-4f27-b7a1-5fd3bb72ddfa_169faa36-e46f-4e5b-b720-863ca0246289.jpg",
    description:
      "Late-night pizzas with bold flavors and cheesy toppings.",
    cuisines: ["Pizza", "Fast Food"],
    rating: 3.8,
    deliveryTime: "28 mins",
    costForTwo: "₹420 for two",
    availability: "Open",
    location: "Connaught Place",
    locality: "Delhi",
  },

  {
    id: 16,
    name: "Vegan Delight",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/25964f84f1523df7e07f294ebb03e446",
    description:
      "Plant-based meals crafted with nutritious and wholesome ingredients.",
    cuisines: ["Vegan", "Healthy"],
    rating: 4.5,
    deliveryTime: "24 mins",
    costForTwo: "₹370 for two",
    availability: "Open",
    location: "Powai",
    locality: "Mumbai",
  },

  {
    id: 17,
    name: "Cafe Mocha",
    image:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80&auto=format&fit=crop",
    description:
      "Chilled cafe with coffee, pastries, sandwiches, and comfort snacks.",
    cuisines: ["Cafe", "Bakery"],
    rating: 4.2,
    deliveryTime: "15 mins",
    costForTwo: "₹180 for two",
    availability: "Open",
    location: "Galleria Market",
    locality: "Gurgaon",
  },

  {
    id: 18,
    name: "Kebabi Express",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&auto=format&fit=crop",
    description:
      "Juicy kebabs, rolls, North Indian curries, and grilled platters.",
    cuisines: ["Kebabs", "North Indian"],
    rating: 4.0,
    deliveryTime: "32 mins",
    costForTwo: "₹450 for two",
    availability: "Open",
    location: "Karol Bagh",
    locality: "Delhi",
  },
];

export default restaurantDetails;
