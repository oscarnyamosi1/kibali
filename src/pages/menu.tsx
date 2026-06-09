import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const MENU_CATEGORIES = ['All', 'Appetizers', 'Mains', 'Desserts', 'Beverages'];

const MENU_ITEMS = [
  { id: 1, name: "All sorts of Pilau", category: "Appetizers", price: "Shs 2800", description: "Crispy plantain tostones topped with crème fraîche and sustainable ossetra caviar.", tags: ["gluten-free"], img: "/images/dish-appetizers.jpg" },
  { id: 2, name: "Nyama Choma", category: "Appetizers", price: "Shs 3200", description: "Pan-seared diver scallops with a spicy suya peanut glaze and micro cilantro.", tags: ["halal"], img: "/images/dish-appetizers.jpg" },
  { id: 3, name: "Vegetable Rice", category: "Mains", price: "Shs 4500", description: "Oxtail braised for 12 hours in rich tomato and butter bean sauce, served with root mash.", tags: ["halal", "gluten-free"], img: "/images/dish-stew.jpg" },
  { id: 4, name: "Local Delicacies (eg. Managu)", category: "Mains", price: "Shs 3800", description: "Arborio rice cooked in smoky jollof broth with charred bell peppers and king prawns.", tags: ["halal", "gluten-free"], img: "/images/dish-stew.jpg" },
  { id: 5, name: "(`Ebusaa`) Kisii Beer", category: "Mains", price: "Shs 3400", description: "Roasted baby eggplants stuffed with melon seed stew and wild mushrooms.", tags: ["vegan", "gluten-free"], img: "/images/dish-stew.jpg" },
  { id: 6, name: "Matoke", category: "Dessert", price: "KSH 1800", description: "Zobo (hibiscus) infused curd in a shortbread shell with torched meringue.", tags: ["vegetarian"], img: "/images/dish-dessert.jpg" },
  { id: 7, name: "Pumpkin Chapati", category: "Dessert", price: "Shs 2200", description: "Silky panna cotta infused with baobab powder, topped with passion fruit coulis.", tags: ["gluten-free", "vegetarian"], img: "/images/dish-dessert.jpg" },
  { id: 8, name: "Signature Zobo Blend", category: "Beverages", price: "Ksh1200", description: "Chilled hibiscus tea with ginger, cloves, and a splash of sparkling water.", tags: ["vegan", "gluten-free"], img: "/images/beverage.jpg" },
  { id: 9, name: "Palm Wine Spritz", category: "Beverages", price: "Ksh 1500", description: "Fresh palm wine mixed with prosecco and a twist of lime.", tags: ["gluten-free"], img: "/images/beverage.jpg" }
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase mb-4 block">Our Culinary Offerings</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">The Featured Menu</h1>
          <p className="text-lg text-muted-foreground">
            A curated selection of our finest dishes. Every plate is a journey through rich heritage, crafted with modern techniques and the finest ingredients.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {MENU_CATEGORIES.map(cat => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                className={`rounded-full ${activeCategory === cat ? 'shadow-md' : 'bg-background/50 backdrop-blur-sm'}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search menu..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 rounded-full bg-background/50 backdrop-blur-sm border-border/50 h-10"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-[2rem] overflow-hidden flex flex-col group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-sm font-mono font-medium shadow-sm">
                    {item.price}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-2xl">{item.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-0 font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No menu items found matching your criteria.</p>
            <Button variant="link" onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="mt-4">
              Clear filters
            </Button>
          </div>
        )}

      </div>
    </div>
  );
}
