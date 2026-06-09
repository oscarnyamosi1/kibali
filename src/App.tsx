import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/lib/auth";
import { useThemeStore } from "@/lib/themes";

import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/home";
import Login from "@/pages/login";
import MenuPage from "@/pages/menu";
import ServicesPage from "@/pages/services";
import AboutPage from "@/pages/about";
import GalleryPage from "@/pages/gallery";
import ContactPage from "@/pages/contact";
import BookingPage from "@/pages/booking";

import UserDashboard from "@/pages/dashboards/UserDashboard";
import StaffDashboard from "@/pages/dashboards/StaffDashboard";
import AdminDashboard from "@/pages/dashboards/AdminDashboard";
import SuperAdminDashboard from "@/pages/dashboards/SuperAdminDashboard";

import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

// Auth Guard for Dashboards
function ProtectedRoute({ component: Component, allowedRoles }: { component: any, allowedRoles?: string[] }) {
  const { user, isLoading } = useAuth();
  
  if (isLoading) return <div className="min-h-screen flex items-center justify-center font-serif text-2xl animate-pulse">Loading...</div>;
  if (!user) {
    window.location.href = '/login';
    return null;
  }
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-4xl font-serif text-destructive mb-2">Access Denied</h1>
          <p className="text-muted-foreground">You do not have permission to view this page.</p>
        </div>
      </Layout>
    );
  }
  
  return <Layout><Component /></Layout>;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Layout><Home /></Layout>} />
      <Route path="/menu" component={() => <Layout><MenuPage /></Layout>} />
      <Route path="/services" component={() => <Layout><ServicesPage /></Layout>} />
      <Route path="/about" component={() => <Layout><AboutPage /></Layout>} />
      <Route path="/gallery" component={() => <Layout><GalleryPage /></Layout>} />
      <Route path="/contact" component={() => <Layout><ContactPage /></Layout>} />
      <Route path="/booking" component={() => <Layout><BookingPage /></Layout>} />
      <Route path="/login" component={() => <Layout><Login /></Layout>} />
      
      {/* Protected Dashboards */}
      <Route path="/dashboard/user" component={() => <ProtectedRoute component={UserDashboard} allowedRoles={['user', 'super_admin']} />} />
      <Route path="/dashboard/staff" component={() => <ProtectedRoute component={StaffDashboard} allowedRoles={['staff', 'super_admin']} />} />
      <Route path="/dashboard/admin" component={() => <ProtectedRoute component={AdminDashboard} allowedRoles={['admin', 'super_admin']} />} />
      <Route path="/dashboard/super-admin" component={() => <ProtectedRoute component={SuperAdminDashboard} allowedRoles={['super_admin']} />} />
      
      {/* Generic redirect based on role */}
      <Route path="/dashboard" component={() => {
        const { user, isLoading } = useAuth();
        if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
        if (!user) {
          window.location.href = '/login';
          return null;
        }
        window.location.href = `/dashboard/${user.role.replace('_', '-')}`;
        return null;
      }} />

      <Route component={NotFound} />
    </Switch>
  );
}

function ThemeManager() {
  const { theme } = useThemeStore();
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.className = theme === 'dark' || theme === 'navy-blue' ? 'dark' : '';
  }, [theme]);
  
  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeManager />
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
