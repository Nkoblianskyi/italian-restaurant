export const restaurantData = {
  name: "Bella Vista",
  description: "Authentic Italian Cuisine in the Heart of the City",
  contact: {
    address: "123 Italian Street, City Center",
    phone: "(555) 123-4567",
    email: "info@bellavista.com",
  },
  hours: {
    weekdays: "Mon-Thu: 11:30 AM - 10:00 PM",
    weekend: "Fri-Sat: 11:30 AM - 11:00 PM",
    sunday: "Sunday: 12:00 PM - 9:00 PM",
  },
  gallery: [
    {
      src: "/placeholder.svg?height=400&width=600&text=Elegant+dining+room",
      alt: "Elegant dining room with warm lighting",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Chef+preparing+pasta",
      alt: "Master chef preparing fresh handmade pasta",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Wine+cellar",
      alt: "Our extensive wine cellar with Italian selections",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Outdoor+terrace",
      alt: "Beautiful outdoor terrace dining area",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Open+kitchen",
      alt: "Open kitchen where magic happens",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Private+dining",
      alt: "Private dining room for special occasions",
    },
  ],
}

export const menuData = {
  antipasti: {
    name: "Antipasti",
    description: "Traditional Italian starters to awaken your palate",
    dishes: [
      {
        id: "bruschetta-classica",
        name: "Bruschetta Classica",
        shortDescription: "Toasted bread with fresh tomatoes, basil, and garlic",
        fullDescription:
          "Our signature Bruschetta Classica features perfectly toasted artisanal bread topped with vine-ripened San Marzano tomatoes, fresh basil from our herb garden, and roasted garlic. Each slice is drizzled with our finest extra virgin olive oil from Tuscany and finished with a sprinkle of sea salt.",
        image: "/d1e31a83248c969558c8a86bf35e3615.jpg",
        ingredients: [
          "Artisanal sourdough bread",
          "San Marzano tomatoes",
          "Fresh basil",
          "Roasted garlic",
          "Tuscan extra virgin olive oil",
          "Sea salt",
          "Aged balsamic vinegar",
        ],
        allergens: ["Gluten"],
        nutritionalBenefits: [
          "Rich in lycopene from fresh tomatoes",
          "Heart-healthy olive oil",
          "Antioxidants from fresh basil",
          "High in vitamin C",
        ],
        preparationTime: "10 minutes",
        origin: "Central Italy - Lazio region",
      },
      {
        id: "antipasto-della-casa",
        name: "Antipasto della Casa",
        shortDescription: "Selection of cured meats, cheeses, and marinated vegetables",
        fullDescription:
          "Our house specialty antipasto platter showcases the finest Italian delicacies. Featuring aged Prosciutto di Parma, creamy Mozzarella di Bufala, sharp Parmigiano-Reggiano, and tangy Gorgonzola. Accompanied by marinated artichokes, roasted peppers, Kalamata olives, and fresh figs.",
        image: "/963367c3a85f2207e9f2cc70dcf51aea.jpg",
        ingredients: [
          "Prosciutto di Parma (24 months aged)",
          "Mozzarella di Bufala",
          "Parmigiano-Reggiano",
          "Gorgonzola DOP",
          "Marinated artichokes",
          "Roasted bell peppers",
          "Kalamata olives",
          "Fresh figs",
          "Honey",
          "Walnuts",
        ],
        allergens: ["Dairy", "Nuts"],
        nutritionalBenefits: [
          "High-quality protein from aged meats",
          "Calcium from authentic Italian cheeses",
          "Healthy fats from olives and nuts",
          "Probiotics from aged cheeses",
        ],
        preparationTime: "15 minutes",
        origin: "Traditional Italian - Various regions",
      },
    ],
  },
  pasta: {
    name: "Pasta",
    description: "Handmade pasta dishes crafted with traditional techniques",
    dishes: [
      {
        id: "spaghetti-carbonara",
        name: "Spaghetti Carbonara",
        shortDescription: "Classic Roman pasta with eggs, cheese, and pancetta",
        fullDescription:
          "A timeless Roman masterpiece that embodies the soul of Italian cooking. Our Carbonara features house-made spaghetti tossed with crispy pancetta, farm-fresh eggs, aged Pecorino Romano, and freshly cracked black pepper. The sauce is created through the traditional technique of combining hot pasta with egg mixture, creating a silky, creamy texture without cream.",
        image: "/35eec4557d610d4fd10e62863aacd085.jpg",
        ingredients: [
          "Fresh house-made spaghetti",
          "Pancetta (guanciale when available)",
          "Farm-fresh organic eggs",
          "Aged Pecorino Romano",
          "Fresh black pepper",
          "Sea salt",
          "Extra virgin olive oil",
        ],
        allergens: ["Gluten", "Eggs", "Dairy"],
        nutritionalBenefits: [
          "High-quality protein from eggs and pancetta",
          "Complex carbohydrates from fresh pasta",
          "Calcium and probiotics from aged cheese",
          "Essential amino acids",
        ],
        preparationTime: "12 minutes",
        origin: "Rome, Lazio - Traditional recipe from 1944",
      },
      {
        id: "fettuccine-alfredo",
        name: "Fettuccine Alfredo",
        shortDescription: "Silky ribbon pasta in rich cream and Parmesan sauce",
        fullDescription:
          "Our interpretation of the Roman classic, featuring silky house-made fettuccine ribbons tossed in a luxurious sauce of heavy cream, aged Parmigiano-Reggiano, and sweet butter. Each strand is perfectly coated in this heavenly sauce that melts on your tongue, finished with a touch of fresh nutmeg and white pepper.",
        image: "/8de8afa8afe4da9d8c3628e25c6825dd.jpg",
        ingredients: [
          "Fresh house-made fettuccine",
          "Heavy cream",
          "Aged Parmigiano-Reggiano (24 months)",
          "European sweet butter",
          "Fresh nutmeg",
          "White pepper",
          "Sea salt",
        ],
        allergens: ["Gluten", "Dairy"],
        nutritionalBenefits: [
          "Calcium from aged Parmesan cheese",
          "Vitamin A from quality dairy",
          "Complex carbohydrates",
          "Protein from cheese and pasta",
        ],
        preparationTime: "8 minutes",
        origin: "Rome - Created by Alfredo di Lelio in 1914",
      },
      {
        id: "penne-arrabbiata",
        name: "Penne all'Arrabbiata",
        shortDescription: "Spicy tomato sauce with garlic and red peppers",
        fullDescription:
          "Fire up your taste buds with this passionate Roman dish. Bronze-die penne pasta is tossed in a fiery sauce made from San Marzano tomatoes, fresh garlic, Calabrian chilies, and fresh basil. The name 'Arrabbiata' means 'angry' in Italian, referring to the heat of the chilies that gives this dish its characteristic kick.",
        image: "/7b41cabbaf24bc20e44f97120287f04b.jpg",
        ingredients: [
          "Bronze-die penne pasta",
          "San Marzano tomatoes",
          "Fresh garlic",
          "Calabrian chilies",
          "Fresh basil",
          "Extra virgin olive oil",
          "Sea salt",
          "Fresh parsley",
        ],
        allergens: ["Gluten"],
        nutritionalBenefits: [
          "Lycopene from San Marzano tomatoes",
          "Capsaicin from chilies (metabolism boost)",
          "Antioxidants from fresh herbs",
          "Heart-healthy olive oil",
        ],
        preparationTime: "15 minutes",
        origin: "Rome, Lazio - Traditional spicy pasta dish",
      },
    ],
  },
  pizza: {
    name: "Pizza",
    description: "Wood-fired pizzas with authentic Neapolitan techniques",
    dishes: [
      {
        id: "pizza-margherita",
        name: "Pizza Margherita",
        shortDescription: "Traditional pizza with tomato, mozzarella, and fresh basil",
        fullDescription:
          "The queen of all pizzas, our Margherita is a tribute to Queen Margherita of Italy and represents the colors of the Italian flag. Made with our 48-hour fermented dough, San Marzano tomato sauce, fresh Mozzarella di Bufala, and aromatic basil leaves. Baked in our wood-fired oven at 900°F for that perfect leopard-spotted crust.",
        image: "/9d2f62b46c1a23bd26df0d455c3a388f.jpg",
        ingredients: [
          "48-hour fermented pizza dough",
          "San Marzano tomato sauce",
          "Mozzarella di Bufala DOP",
          "Fresh basil leaves",
          "Extra virgin olive oil",
          "Sea salt",
          "Tipo 00 flour",
        ],
        allergens: ["Gluten", "Dairy"],
        nutritionalBenefits: [
          "Probiotics from fermented dough",
          "Lycopene from San Marzano tomatoes",
          "High-quality protein from buffalo mozzarella",
          "Antioxidants from fresh basil",
        ],
        preparationTime: "3 minutes in wood-fired oven",
        origin: "Naples, Campania - Created in 1889",
      },
      {
        id: "pizza-quattro-stagioni",
        name: "Pizza Quattro Stagioni",
        shortDescription: "Four seasons pizza with artichokes, ham, mushrooms, and olives",
        fullDescription:
          "Experience the four seasons of Italy on one pizza. Each quarter represents a different season: spring with artichokes, summer with tomatoes and basil, autumn with mushrooms, and winter with ham and olives. This classic combination creates a perfect harmony of flavors and textures on our signature sourdough crust.",
        image: "/c008dbe5cdbe24e5fb75054d38aa7a17.jpg",
        ingredients: [
          "48-hour fermented pizza dough",
          "San Marzano tomato sauce",
          "Mozzarella di Bufala",
          "Marinated artichokes",
          "Prosciutto cotto",
          "Porcini mushrooms",
          "Kalamata olives",
          "Fresh basil",
          "Extra virgin olive oil",
        ],
        allergens: ["Gluten", "Dairy"],
        nutritionalBenefits: [
          "Antioxidants from mixed vegetables",
          "High-quality protein from prosciutto",
          "Fiber from artichokes and mushrooms",
          "Healthy fats from olives",
        ],
        preparationTime: "3-4 minutes in wood-fired oven",
        origin: "Traditional Italian - Represents the four seasons",
      },
    ],
  },
  secondi: {
    name: "Secondi Piatti",
    description: "Main courses featuring the finest meats and seafood",
    dishes: [
      {
        id: "osso-buco",
        name: "Osso Buco alla Milanese",
        shortDescription: "Braised veal shanks with vegetables and white wine",
        fullDescription:
          "A masterpiece of Lombard cuisine, our Osso Buco features tender veal shanks slowly braised in white wine with aromatic vegetables, herbs, and rich beef stock. The marrow in the bone adds incredible richness to the dish. Traditionally served with creamy risotto alla milanese and finished with gremolata - a zesty mixture of lemon zest, garlic, and parsley.",
        image: "/c2cb0916bcb3b78e0f23671719270715.jpg",
        ingredients: [
          "Premium veal shanks",
          "Dry white wine",
          "San Marzano tomatoes",
          "Carrots",
          "Celery",
          "Onions",
          "Rich beef stock",
          "Fresh thyme",
          "Bay leaves",
          "Gremolata (lemon zest, garlic, parsley)",
        ],
        allergens: [],
        nutritionalBenefits: [
          "High-quality protein from veal",
          "Collagen and minerals from bone marrow",
          "Vitamins from fresh vegetables",
          "Iron and B-vitamins",
        ],
        preparationTime: "3 hours slow braising",
        origin: "Milan, Lombardy - Traditional since 18th century",
      },
      {
        id: "branzino-in-crosta",
        name: "Branzino in Crosta di Sale",
        shortDescription: "Whole sea bass baked in sea salt crust with herbs",
        fullDescription:
          "Fresh Mediterranean sea bass encased in a dramatic sea salt and herb crust, then baked to perfection. This ancient cooking method seals in all the natural juices and flavors while the herbs infuse the fish with aromatic essence. Served tableside with a ceremonial breaking of the salt crust, revealing the perfectly flaky, moist fish within.",
        image: "/b8a642f31ddbe4508f18a63c855d770a.jpg",
        ingredients: [
          "Fresh whole Mediterranean sea bass",
          "Coarse sea salt",
          "Fresh rosemary",
          "Fresh thyme",
          "Lemon zest",
          "Egg whites",
          "Extra virgin olive oil",
          "Fresh lemon",
          "Cherry tomatoes",
        ],
        allergens: ["Fish", "Eggs"],
        nutritionalBenefits: [
          "High-quality lean protein",
          "Omega-3 fatty acids",
          "Low in saturated fat",
          "Rich in vitamins B12 and D",
        ],
        preparationTime: "45 minutes",
        origin: "Southern Italy - Ancient Mediterranean technique",
      },
    ],
  },
  dolci: {
    name: "Dolci",
    description: "Traditional Italian desserts to sweeten your experience",
    dishes: [
      {
        id: "tiramisu",
        name: "Tiramisù della Casa",
        shortDescription: "Classic coffee-flavored dessert with mascarpone and cocoa",
        fullDescription:
          "Our signature Tiramisù is crafted the traditional way with layers of coffee-soaked ladyfingers and silky mascarpone cream, dusted with premium cocoa powder. Made with strong espresso, Marsala wine, and farm-fresh eggs, this dessert literally means 'pick me up' in Italian, and it certainly lives up to its name.",
        image: "/962dbf7bf690d9822c84016dcb5a054f.jpg",
        ingredients: [
          "Fresh mascarpone cheese",
          "Savoiardi ladyfingers",
          "Strong espresso coffee",
          "Farm-fresh eggs",
          "Marsala wine",
          "Premium cocoa powder",
          "Sugar",
          "Dark chocolate shavings",
        ],
        allergens: ["Dairy", "Eggs", "Gluten", "Alcohol"],
        nutritionalBenefits: [
          "Caffeine for energy boost",
          "Calcium from mascarpone",
          "Antioxidants from cocoa",
          "Protein from eggs",
        ],
        preparationTime: "4 hours chilling time",
        origin: "Veneto region - Created in the 1960s",
      },
    ],
  },
}

export const getAllDishes = () => {
  const allDishes: any[] = []
  Object.values(menuData).forEach((category) => {
    allDishes.push(...category.dishes)
  })
  return allDishes
}

export const getDishById = (id: string) => {
  return getAllDishes().find((dish: any) => dish.id === id)
}
