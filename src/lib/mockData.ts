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


export const SERVICES = [
  {
    id: "weddings",
    title: "Weddings",
    description: "From intimate ceremonies to grand receptions, we craft menus that reflect your love story. Our full-service wedding catering includes tastings, table settings, and dedicated event coordination.",
    capacity: "50 - 1000+ Guests",
    startingPrice: "Ksh1200 per person",
    features: ["Complimentary tasting for two", "Custom menu design", "Signature cocktail creation", "Cake cutting service"],
    img: "/images/wedding.jpg"
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Elevate your business gatherings with our sophisticated corporate catering. Perfect for galas, product launches, board meetings, and multi-day conferences.",
    capacity: "20 - 2000 Guests",
    startingPrice: "Ksh 7500 per person",
    features: ["Dedicated corporate manager", "Dietary accommodation", "Branded food stations", "Seamless silent service"],
    img: "/images/corporate.jpg"
  },
  {
    id: "private",
    title: "Private Parties",
    description: "Bring the fine dining experience to your home or chosen venue. Our chefs create immersive culinary journeys for birthdays, anniversaries, and exclusive dinners.",
    capacity: "10 - 100 Guests",
    startingPrice: "Ksh 3500 per person",
    features: ["Interactive chef experience", "Sommelier wine pairing", "Bespoke tablescaping", "Post-event cleanup"],
    img: "/images/gallery-table.jpg"
  },
  {
    id: "stations",
    title: "Interactive Food Stations",
    description: "Engage your guests with live action culinary stations. From Suya grilling to fresh oyster shucking, our stations add a dynamic element to any event.",
    capacity: "100+ Guests",
    startingPrice: "Ksh 3250 per person",
    features: ["Live chef demonstrations", "Customizable station themes", "Global flavor profiles", "Perfect for networking"],
    img: "/images/dish-appetizers.jpg"
  }
];