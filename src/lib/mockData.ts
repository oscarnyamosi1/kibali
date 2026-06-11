// Mock Data for Kibali Caterers

export const MOCK_USERS = [
  {
    id: 1,
    name: "Amara Okonkwo",
    email: "user@kibali.com",
    password: "user123",
    role: "user",
    avatar: null,
    phone: "+254 712 345 678",
    joinedAt: "2024-01-15",
    bookings: [
      { id: "BK-001", event: "Wedding Reception", date: "2025-08-15", guests: 150, status: "confirmed", total: 450000 },
      { id: "BK-002", event: "Birthday Party", date: "2025-09-20", guests: 50, status: "pending", total: 85000 }
    ]
  },
  {
    id: 2,
    name: "David Mwangi",
    email: "staff@kibali.com",
    password: "staff123",
    role: "staff",
    avatar: null,
    phone: "+254 723 456 789",
    joinedAt: "2023-06-01",
    department: "Events",
    shift: "Morning",
    assignedEvents: ["BK-001", "BK-003"],
    tasks: [
      { id: 1, task: "Set up wedding venue", event: "BK-001", dueTime: "08:00", done: false },
      { id: 2, task: "Prepare appetizer station", event: "BK-001", dueTime: "10:00", done: true },
      { id: 3, task: "Coordinate with florist", event: "BK-001", dueTime: "09:00", done: false }
    ]
  },
  {
    id: 3,
    name: "Grace Wanjiru",
    email: "admin@kibali.com",
    password: "admin123",
    role: "admin",
    avatar: null,
    phone: "+254 734 567 890",
    joinedAt: "2022-03-15",
    permissions: ["manage_bookings", "manage_staff", "view_revenue", "manage_menu"]
  },
  {
    id: 4,
    name: "Kibali Owner",
    email: "superadmin@kibali.com",
    password: "super123",
    role: "super_admin",
    avatar: null,
    phone: "+254 745 678 901",
    joinedAt: "2020-01-01",
    permissions: ["all"]
  }
];


export const MENU_ITEMS = [
  { id: 1, name: "All sorts of Pilau", category: "Appetizers", price: "Shs 2800", description: "Crispy plantain tostones topped with crème fraîche and sustainable ossetra caviar.", tags: ["gluten-free"], img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780941002/unnamed_16_wgsjxy.jpg" },
  { id: 2, name: "Nyama Choma", category: "Appetizers", price: "Shs 3200", description: "Pan-seared diver scallops with a spicy suya peanut glaze and micro cilantro.", tags: ["halal"], img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780941161/unnamed_8_zyvxyb.jpg" },
  { id: 3, name: "Vegetable Rice", category: "Mains", price: "Shs 4500", description: "Oxtail braised for 12 hours in rich tomato and butter bean sauce, served with root mash.", tags: ["halal", "gluten-free"], img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780941161/unnamed_7_gw27ih.jpg" },
  { id: 4, name: "Local Delicacies (eg. Managu)", category: "Mains", price: "Shs 3800", description: "Arborio rice cooked in smoky jollof broth with charred bell peppers and king prawns.", tags: ["halal", "gluten-free"], img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780941006/unnamed_6_hwhemh.jpg" },
  { id: 5, name: "(`Ebusaa`) Kisii Beer", category: "Mains", price: "Shs 3400", description: "Roasted baby eggplants stuffed with melon seed stew and wild mushrooms.", tags: ["vegan", "gluten-free"], img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780941006/unnamed_6_hwhemh.jpg" },
  { id: 6, name: "Matoke", category: "Dessert", price: "KSH 1800", description: "Kisii Native Green Bananas.", tags: ["vegetarian"], img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780940999/unnamed_9_srdtfb.jpg" },
  { id: 7, name: "Pumpkin Chapati", category: "Dessert", price: "Shs 2200", description: "Silky panna cotta infused with baobab powder, topped with passion fruit coulis.", tags: ["gluten-free", "vegetarian"], img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780940999/unnamed_9_srdtfb.jpg" },
  { id: 8, name: "Signature Zobo Blend", category: "Beverages", price: "Ksh1200", description: "Chilled hibiscus tea with ginger, cloves, and a splash of sparkling water.", tags: ["vegan", "gluten-free"], img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780941000/unnamed_5_vollox.jpg" },
  { id: 9, name: "Brown Ugali", category: "Mains", price: "Ksh 1500", description: "Made with traditional mtama flour .", tags: ["gluten-free"], img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780941001/unnamed_13_rhsd3o.jpg" }
];

export const SERVICES = [
  {
    id: "weddings",
    title: "Weddings",
    description: "From intimate ceremonies to grand receptions, we craft menus that reflect your love story. Our full-service wedding catering includes tastings, table settings, and dedicated event coordination.",
    capacity: "50 - 1000+ Guests",
    startingPrice: "Ksh1200 per person",
    features: ["Complimentary tasting for two", "Custom menu design", "Signature cocktail creation", "Cake cutting service"],
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780941156/unnamed_qytfdo.jpg"
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Elevate your business gatherings with our sophisticated corporate catering. Perfect for galas, product launches, board meetings, and multi-day conferences.",
    capacity: "20 - 2000 Guests",
    startingPrice: "Ksh 7500 per person",
    features: ["Dedicated corporate manager", "Dietary accommodation", "Branded food stations", "Seamless silent service"],
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780941151/715710306_1590878306374291_2281066382870309413_n_j6rigl.jpg"
  },
  {
    id: "private",
    title: "Private Parties",
    description: "Bring the fine dining experience to your home or chosen venue. Our chefs create immersive culinary journeys for birthdays, anniversaries, and exclusive dinners.",
    capacity: "10 - 100 Guests",
    startingPrice: "Ksh 3500 per person",
    features: ["Interactive chef experience", "Sommelier wine pairing", "Bespoke tablescaping", "Post-event cleanup"],
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780940999/unnamed_1_ci6hfa.jpg",
  },
  {
    id: "stations",
    title: "Interactive Food Stations",
    description: "Engage your guests with live action culinary stations. From Suya grilling to fresh oyster shucking, our stations add a dynamic element to any event.",
    capacity: "100+ Guests",
    startingPrice: "Ksh 3250 per person",
    features: ["Live chef demonstrations", "Customizable station themes", "Global flavor profiles", "Perfect for networking"],
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780941000/unnamed_5_vollox.jpg"
  }
];