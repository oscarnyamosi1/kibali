import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const bookingSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  eventType: z.string().min(1, "Event type is required"),
  date: z.date({ required_error: "Date is required" }),
  guests: z.coerce.number().min(10, "Minimum 10 guests required"),
  venue: z.string().min(1, "Venue details required"),
  dietary: z.string().optional(),
  message: z.string().optional(),
});

export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: '', email: '', phone: '', eventType: '', guests: 50, venue: '', dietary: '', message: ''
    }
  });

  const onSubmit = async (data: z.infer<typeof bookingSchema>) => {
    setIsSubmitting(true);
    // Simulate API Call
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass max-w-lg mx-auto p-12 text-center rounded-[3rem]"
        >
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-serif text-4xl mb-4">Request Received</h2>
          <p className="text-muted-foreground mb-8">
            Thank you for choosing Kibali Caterers. Our events team will review your details and contact you within 24 hours to discuss your menu and finalize the quote.
          </p>
          <Button onClick={() => window.location.href = '/'} className="rounded-full px-8">Return Home</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase mb-4 block">Reserve Your Date</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Book an Event</h1>
          <p className="text-lg text-muted-foreground">
            Provide us with the details of your upcoming event, and let's start crafting your perfect menu.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 md:p-12 rounded-[2rem]"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Section 1: Contact Details */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl border-b border-border/50 pb-2">Client Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="fullName" render={({ field }) => (
                    <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input {...field} className="bg-background/50" /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input type="email" {...field} className="bg-background/50" /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input {...field} className="bg-background/50" /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
              </div>

              {/* Section 2: Event Details */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl border-b border-border/50 pb-2 mt-8">Event Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="eventType" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding Reception</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="private">Private Party</SelectItem>
                          <SelectItem value="gala">Charity Gala</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  
                  <FormField control={form.control} name="date" render={({ field }) => (
                    <FormItem className="flex flex-col pt-1">
                      <FormLabel>Event Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn("pl-3 text-left font-normal bg-background/50 border-border/50 h-10", !field.value && "text-muted-foreground")}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date < new Date()} initialFocus />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="guests" render={({ field }) => (
                    <FormItem><FormLabel>Estimated Guest Count</FormLabel><FormControl><Input type="number" {...field} className="bg-background/50" /></FormControl><FormMessage /></FormItem>
                  )} />
                  
                  <FormField control={form.control} name="venue" render={({ field }) => (
                    <FormItem><FormLabel>Venue Location / Address</FormLabel><FormControl><Input placeholder="Name or address of venue" {...field} className="bg-background/50" /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
              </div>

              {/* Section 3: Additional details */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl border-b border-border/50 pb-2 mt-8">Preferences</h3>
                <FormField control={form.control} name="dietary" render={({ field }) => (
                  <FormItem><FormLabel>Dietary Requirements</FormLabel><FormControl><Input placeholder="e.g. 5 vegans, 2 gluten-free" {...field} className="bg-background/50" /></FormControl><FormMessage /></FormItem>
                )} />
                
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem><FormLabel>Additional Information</FormLabel><FormControl><Textarea placeholder="Tell us more about your vision, themes, or specific menu requests..." className="min-h-[120px] rounded-3xl bg-background/50 resize-none" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>

              <div className="pt-6">
                <Button type="submit" size="lg" className="w-full rounded-full h-14 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting Request...' : 'Submit Booking Request'}
                </Button>
              </div>

            </form>
          </Form>
        </motion.div>

      </div>
    </div>
  );
}
