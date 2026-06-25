export type MenuItem = { name: string; price: string; note?: string };
export type MenuSection = { title: string; items: MenuItem[]; note?: string };

export const specials: MenuItem[] = [
  { name: "Beef T-bone Steak", price: "R129.95/kg" },
  { name: "Beef Club Steak", price: "R119.95/kg" },
  { name: "Beef Sirloin Steak", price: "R144.95/kg" },
  { name: "Beef Rump Steak", price: "R139.95/kg" },
  { name: "Beef Shortrib", price: "R79.95/kg" },
  { name: "Beef Stew", price: "R79.95/kg" },
  { name: "Classic Boerewors", price: "R99.95/kg" },
  { name: "Beef Mince", price: "R89.95/kg" },
];

export const menu: MenuSection[] = [
  {
    title: "Braai Grills",
    items: [
      { name: "Rump 200g / 300g", price: "R70 / R120" },
      { name: "Sirloin 200g / 300g", price: "R70 / R120" },
      { name: "T-Bone 350g / 700g", price: "R95 / R180" },
      { name: "Club Steak 200g", price: "R85" },
      { name: "Beef Rashers", price: "R70" },
      { name: "Brisket", price: "R70" },
      { name: "Rump Sosaties", price: "R55" },
      { name: "Sosatie", price: "R60" },
      { name: "Chicken Deboned Thigh", price: "R50" },
      { name: "Chicken Wings", price: "R42" },
      { name: "Chicken Livers Peri-Peri", price: "R45" },
      { name: "Pork Kaiings", price: "R120" },
      { name: "Lamb Chops", price: "R75" },
      { name: "Pork Loin Chops", price: "R75" },
      { name: "Pork Rashers", price: "R75" },
    ],
  },
  {
    title: "Specialty Meals",
    items: [
      { name: "Homemade Bobotie", price: "R70" },
      { name: "Beef Stew Boneless", price: "R90" },
      { name: "Whole Grilled Chicken", price: "R80" },
      { name: "Chicken Schnitzel", price: "R60" },
    ],
  },
  {
    title: "Daily Hot Meals",
    items: [
      { name: "Mon — Beef Lasagne", price: "R50" },
      { name: "Tue — Creamy Macaroni & Cheese", price: "R70" },
      { name: "Wed — Eisbein & Chips", price: "R135" },
      { name: "Thu — Oxtail & Rice/Pap/Samp", price: "R120" },
    ],
  },
  {
    title: "Burgers",
    items: [
      { name: "Beef Burger", price: "R70" },
      { name: "Double Beef Burger", price: "R115" },
      { name: "Cheese Burger", price: "R78" },
      { name: "Grilled Chicken Fillet Burger", price: "R55" },
      { name: "Crumbed Chicken Fillet Burger", price: "R60" },
      { name: "Pork Rib Eye Burger", price: "R50" },
    ],
  },
  {
    title: "Rolls",
    items: [
      { name: "Boerewors", price: "R40" },
      { name: "Plain Hotdog", price: "R30" },
      { name: "Beef Rump", price: "R48" },
      { name: "Chicken Fillet", price: "R42" },
      { name: "Chicken Cheese Griller", price: "R47" },
    ],
  },
  {
    title: "Wraps",
    items: [
      { name: "Grilled Chicken Mayo", price: "R60" },
      { name: "Pulled Pork", price: "R60" },
      { name: "Rump", price: "R60" },
    ],
  },
  {
    title: "Braai Sandwich",
    items: [
      { name: "Tomato, Cheese & Onion", price: "R45" },
      { name: "Ham & Cheese", price: "R35" },
      { name: "Grilled Chicken Mayo", price: "R50" },
      { name: "Bacon, Cheese & Egg", price: "R53" },
    ],
  },
  {
    title: "Braai Platter Box",
    note: "Build your own — choose any 4 items",
    items: [
      { name: "Platter (4 items)", price: "R120" },
      { name: "Mini Cheese Griller", price: "" },
      { name: "Mini Chicken Griller", price: "" },
      { name: "Chicken Wings", price: "" },
      { name: "Cocktail Boerewors", price: "" },
      { name: "Steak Strips", price: "" },
      { name: "Crispy Fried Pork Belly Strips", price: "" },
      { name: "Lamb Riblets", price: "" },
      { name: "Bacon Rolls", price: "" },
      { name: "Chicken Nuggets", price: "" },
      { name: "Samoosas", price: "" },
      { name: "Spring Rolls", price: "" },
    ],
  },
  {
    title: "Specialty Salad Bowls",
    items: [
      { name: "Biltong Salad", price: "R60" },
      { name: "Grilled Chicken Bowl", price: "R55" },
      { name: "Green Salad — Large", price: "R40" },
      { name: "Pulled Pork Bowl", price: "R58" },
    ],
  },
  {
    title: "Salads",
    items: [
      { name: "Coleslaw", price: "R32" },
      { name: "Noodle", price: "R49" },
      { name: "Potato", price: "R55" },
      { name: "Curry Noodle", price: "R52" },
    ],
  },
  {
    title: "Extras",
    items: [
      { name: "Chips — Single", price: "R25" },
      { name: "Chips — Double", price: "R40" },
      { name: "Rice", price: "R20" },
      { name: "Mash", price: "R25" },
      { name: "Yellow Rice", price: "R22" },
      { name: "Samp", price: "R25" },
      { name: "Pap", price: "R20" },
      { name: "Slice Cheese", price: "R10" },
      { name: "Fried Onion Rings", price: "R10" },
      { name: "Green Salad Small", price: "R20" },
      { name: "Cheese Sauce", price: "R10" },
      { name: "Mushroom Sauce", price: "R10" },
      { name: "Pepper Sauce", price: "R10" },
    ],
  },
  {
    title: "Veggies",
    items: [
      { name: "Sweet Pumpkin", price: "R20" },
      { name: "Creamed Spinach", price: "R20" },
      { name: "Sweet Potato Tart", price: "R20" },
      { name: "Roast Veggie", price: "R20" },
      { name: "Green Beans", price: "R20" },
    ],
  },
  {
    title: "Kiddies",
    items: [
      { name: "Mini Hamburger", price: "R20" },
      { name: "Mini Hotdog", price: "R20" },
      { name: "Chicken Nuggets", price: "R35" },
      { name: "Chicken Strips", price: "R32" },
    ],
  },
  {
    title: "Beverages",
    items: [
      { name: "Soft Drinks", price: "R18" },
      { name: "Water", price: "R18" },
    ],
  },
  {
    title: "Hot Drinks",
    note: "Short / Tall",
    items: [
      { name: "Americano", price: "R25 / R30" },
      { name: "Cappuccino", price: "R25 / R30" },
      { name: "Flat White", price: "R25 / R30" },
      { name: "Hot Chocolate", price: "R35 / R40" },
      { name: "Latte", price: "R25 / R40" },
      { name: "Rooibos Cappuccino", price: "R35 / R40" },
    ],
  },
  {
    title: "Milkshakes",
    items: [
      { name: "Blueberry", price: "R40" },
      { name: "Blue Unicorn", price: "R40" },
      { name: "Cherry Berry", price: "R40" },
      { name: "Pink Unicorn", price: "R40" },
      { name: "Salted Caramel", price: "R40" },
      { name: "Turkish Delight", price: "R40" },
      { name: "Vanilla", price: "R40" },
      { name: "Chocolate", price: "R40" },
    ],
  },
];
