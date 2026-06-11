import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { companyData } from "@/primarydata/staticData"

const BUSINESS_PHONE_NUMBER = companyData.businessContacts.phone
const BUSINESS_EMAIL = companyData.businessContacts.email

const COMPANY_NAME = companyData.name

const COMPANY_STREET = companyData.location.street
const COMPANY_CITY = companyData.location.city
const COMPANY_COUNTRY = companyData.location.country


const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '', email: '', phone: '', subject: '', message: ''
    }
  });

  // const onSubmit = async (data: z.infer<typeof contactSchema>) => {
  //   setIsSubmitting(true);
  //   // Simulate API call
  //   await new Promise(r => setTimeout(r, 1000));
  //   toast.success("Message sent successfully! We'll be in touch shortly.");
  //   form.reset();
  //   setIsSubmitting(false);
  // };



const onSubmit = async (data: z.infer<typeof contactSchema>) => {
  setIsSubmitting(true);

  try {
    const whatsappNumber = "254795404843";

    const fullMessage = `
*New Contact Form Message*

🏷 Name: ${data.name}
📧 Email: ${data.email}
📞 Phone: ${data.phone}
📌 Subject: ${data.subject}

💬 Message:
${data.message}
`.trim();

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

    // small delay for UX (optional)
    await new Promise((r) => setTimeout(r, 500));

    window.open(url, "_blank");

    toast.success("Redirecting you to WhatsApp...");

    form.reset();
  } catch (err) {
    toast.error("Failed to open WhatsApp");
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase mb-4 block">Get in Touch</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have a question or want to discuss an upcoming event? Our team is ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl">
              <div>
                <h3 className="font-serif text-2xl mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">{COMPANY_NAME} HQ</p>
                      <p>{COMPANY_STREET}, {COMPANY_CITY}</p>
                      <p>{COMPANY_CITY}, {COMPANY_COUNTRY}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <p>{BUSINESS_PHONE_NUMBER}</p>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <p>{BUSINESS_EMAIL}</p>
                  </div>
                  <div className="flex items-start gap-4 text-muted-foreground">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Office Hours</p>
                      <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p>Sat: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-48 bg-secondary/50 rounded-3xl border border-border flex items-center justify-center">
                <p className="text-muted-foreground text-sm font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Interactive Map Area
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl">
              <h3 className="font-serif text-3xl mb-8">Send a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl><Input placeholder="John Doe" className="bg-background/50" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl><Input placeholder="john@example.com" className="bg-background/50" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl><Input placeholder="+254..." className="bg-background/50" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="subject" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl><Input placeholder="General Inquiry" className="bg-background/50" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can we help you?" className="min-h-[150px] bg-background/50 rounded-3xl resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button type="submit" className="w-full sm:w-auto px-8 h-12 rounded-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : (
                      <span className="flex items-center gap-2">Send Message <Send className="w-4 h-4" /></span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
