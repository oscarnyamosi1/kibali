import { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/lib/auth';
import { MOCK_USERS } from '@/lib/mockData';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Loader2, ShieldCheck, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const [, setLocation] = useLocation();
  const { login, isLoading: authLoading } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsSubmitting(true);
    try {
      await login(data.email, data.password);
      toast.success('Successfully logged in');
      
      // Look up user to determine redirect
      const user = MOCK_USERS.find(u => u.email === data.email);
      if (user) {
        setLocation(`/dashboard/${user.role.replace('_', '-')}`);
      } else {
        setLocation('/');
      }
    } catch (error) {
      toast.error('Invalid email or password');
    } finally {
      setIsSubmitting(false);
    }
  };

  const prefill = (email: string, pass: string) => {
    form.setValue('email', email);
    form.setValue('password', pass);
  };

  return (
    <div className="min-h-screen pt-20 pb-12 flex items-center justify-center bg-background/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10" />

      <div className="container max-w-5xl px-4 grid md:grid-cols-2 gap-8 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md mx-auto"
        >
          <Card className="glass border-0 shadow-2xl">
            <CardHeader className="space-y-1 text-center pb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-3xl font-serif">Welcome Back</CardTitle>
              <CardDescription>
                Sign in to your Kibali Caterers account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="name@example.com" 
                            className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary rounded-xl h-12" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel>Password</FormLabel>
                          <a href="#" className="text-sm font-medium text-primary hover:underline">
                            Forgot password?
                          </a>
                        </div>
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="••••••••" 
                            className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary rounded-xl h-12" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-12 rounded-full text-base font-medium" 
                    disabled={isSubmitting || authLoading}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Authenticating...
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </Button>
                </form>
              </Form>

              <div className="mt-8 text-center text-sm text-muted-foreground relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border/50" />
                </div>
                <span className="relative bg-[var(--glass-bg)] px-4">Secure Session</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block"
        >
          <Card className="glass border-0 bg-secondary/30 backdrop-blur-xl h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Info className="w-5 h-5 text-primary" />
                Demo Credentials
              </CardTitle>
              <CardDescription>
                Use these test accounts to explore different roles in the system. Click any role to prefill.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {MOCK_USERS.map((user) => (
                <div 
                  key={user.id}
                  onClick={() => prefill(user.email, user.password)}
                  className="p-4 rounded-2xl border border-border/50 bg-background/40 hover:bg-primary/5 hover:border-primary/30 transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium group-hover:text-primary transition-colors">{user.name}</span>
                    <Badge variant={user.role === 'super_admin' ? 'destructive' : user.role === 'admin' ? 'default' : 'secondary'} className="capitalize">
                      {user.role.replace('_', ' ')}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] gap-1 text-sm text-muted-foreground">
                    <span>Email:</span>
                    <span className="font-mono">{user.email}</span>
                    <span>Password:</span>
                    <span className="font-mono">{user.password}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </div>
  );
}
