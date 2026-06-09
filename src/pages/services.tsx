import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { CheckCircle2, Users, Calendar, Trophy } from 'lucide-react';

import { SERVICES } from "@/lib/mockData"

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase mb-4 block">What We Do</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Catering Services</h1>
          <p className="text-lg text-muted-foreground">
            Impeccable service, exquisite flavors, and meticulous attention to detail. 
            We tailor our offerings to perfectly suit the scale and style of your occasion.
          </p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="glass p-2 rounded-[2.5rem] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full aspect-[4/3] object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="font-serif text-4xl">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-6 py-6 border-y border-border/50">
                  <div>
                    <span className="text-sm text-muted-foreground uppercase tracking-wider block mb-1">Capacity</span>
                    <span className="font-medium flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> {service.capacity}</span>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground uppercase tracking-wider block mb-1">Starting From</span>
                    <span className="font-medium flex items-center gap-2"><Trophy className="w-4 h-4 text-primary" /> {service.startingPrice}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Included Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Button className="rounded-full px-8" asChild>
                    <Link href={`/booking?type=${service.id}`}>Book This Service</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
