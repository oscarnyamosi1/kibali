import { motion } from 'framer-motion';
import { Award, Heart, Leaf, Star } from 'lucide-react';

const imagePrefix = import.meta.env.VITE_CLOUDINARY_PREFIX

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase block">Our Story</span>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight">Elevating <br/><span className="text-muted-foreground italic">African</span> Cuisine</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2015, Kibali Caterers began with a singular vision: to present the complex, diverse flavors of the African continent with the refinement and precision of contemporary fine dining.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't just cook food; we curate experiences. From the sourcing of authentic spices to the final exquisite plating, every step is guided by a deep respect for our heritage and a passion for hospitality.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass p-2 rounded-[2rem] relative"
          >
            <img src={`${imagePrefix}/images/kibali.jpg` } alt="Our culinary approach" className="rounded-[1.5rem] w-full aspect-square md:aspect-[4/5] object-cover" />
          </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass p-2 rounded-[2rem] relative"
          >
            <img src={`${imagePrefix}/images/kibali2.jpg` } alt="mr . kibali" className="rounded-[1.5rem] w-full aspect-square md:aspect-[4/5] object-cover" />
          </motion.div>

                  <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass p-2 rounded-[2rem] relative"
          >
            <img src={`${imagePrefix}/images/hero.jpg` }alt="mr . kibali" className="rounded-[1.5rem] w-full aspect-square md:aspect-[4/5] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-card/50 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl mb-4">Our Philosophy</h2>
            <p className="text-muted-foreground">The principles that guide our kitchen and our service.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "Excellence", desc: "Uncompromising quality in ingredients, preparation, and presentation." },
              { icon: Heart, title: "Heritage", desc: "Honoring traditional recipes while embracing modern culinary techniques." },
              { icon: Leaf, title: "Sustainability", desc: "Sourcing locally and minimizing our environmental footprint." },
              { icon: Award, title: "Hospitality", desc: "Anticipating needs and exceeding expectations at every touchpoint." }
            ].map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div 
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 rounded-3xl text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl mb-3">{val.title}</h3>
                  <p className="text-sm text-muted-foreground">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="font-serif text-4xl mb-16 text-center">Our Journey</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border">
            {[
              { year: "2015", title: "The Beginning", desc: "Started as a boutique private chef service catering to intimate gatherings of 10-20 people." },
              { year: "2018", title: "Expansion", desc: "Opened our first commercial kitchen and expanded into wedding and mid-sized corporate events." },
              { year: "2021", title: "Recognition", desc: "Awarded 'Best Contemporary African Caterer' by Culinary Excellence Magazine." },
              { year: "2024", title: "Today", desc: "A team of 50+ professionals executing large-scale, high-end events across the region." }
            ].map((item, i) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-background border-4 border-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl">
                  <span className="text-primary font-mono font-bold text-xl mb-2 block">{item.year}</span>
                  <h4 className="font-serif text-xl mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
