import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Star, Clock, Calendar, Users } from 'lucide-react';

import { SERVICES } from '@/lib/mockData';
import { MENU_ITEMS } from '@/lib/mockData';
export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.jpg" 
            alt="Upscale African Catering Event" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6 mx-auto text-center mt-[-10vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <span className="text-primary tracking-[0.3em] text-sm md:text-base font-medium uppercase drop-shadow-md">A Taste of Heritage, Elevated</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight drop-shadow-lg">
              Exceptional <br />
              <span className="italic text-white/90">African</span> Catering
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              Where traditional warmth meets modern elegance. We craft unforgettable culinary experiences for your most cherished moments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="rounded-full px-8 text-base h-14 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="/booking">Book Your Event</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-14 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20" asChild>
                <Link href="/menu">Explore Menu</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card-round p-2 relative z-10">
                <img src="https://res.cloudinary.com/dw0l7b86h/image/upload/v1780941153/beverage_cico6a.jpg" alt="Fine dining table" className="w-full h-full object-cover rounded-[calc(var(--radius)+4px)]" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl md:text-5xl">The Art of <br/><span className="text-primary italic">Hospitality</span></h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Kibali Caterers was born from a simple desire: to elevate the rich, vibrant flavors of the African continent to the realm of fine dining. We believe that a meal is more than sustenance—it is a story, a celebration, and a connection.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From intimate gatherings to grand corporate galas, our team meticulously curates every detail. Rich mahogany, crisp linens, and the intoxicating aroma of slow-cooked delicacies define the Kibali experience.
              </p>
              <Button variant="link" className="px-0 group text-foreground font-medium" asChild>
                <Link href="/about">Read Our Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card/50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl">Curated Experiences</h2>
            <p className="text-muted-foreground">Tailored catering services designed to match the scale and significance of your event.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="glass-card overflow-hidden rounded-3xl h-full flex flex-col">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-1">{service.description}</p>
                    <Link href="/services" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                      Discover <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl">Culinary Signatures</h2>
              <p className="text-muted-foreground">A glimpse into our contemporary take on timeless classics.</p>
            </div>
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MENU_ITEMS.slice(0, 4).map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-4 rounded-3xl flex flex-col group cursor-pointer"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="px-2 pb-2">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">{item.category}</span>
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="font-serif text-lg leading-tight">{item.name}</h4>
                    {/* <span className="font-mono text-muted-foreground">{item.price}</span> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass max-w-3xl mx-auto p-12 md:p-16 rounded-[3rem]"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to Host?</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Let us handle the details while you enjoy the moment. Reserve your date and begin customizing your menu today.
            </p>
            <Button size="lg" className="rounded-full px-10 h-14 text-lg" asChild>
              <Link href="/booking">Request a Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
