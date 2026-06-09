import { ReactNode } from 'react';
import { useAuth } from '@/lib/auth';
import { Link, useLocation } from 'wouter';
import { 
  LayoutDashboard, 
  Calendar, 
  Settings, 
  FileText, 
  LogOut,
  Users,
  CheckSquare,
  Coffee,
  PieChart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function DashboardLayout({ children, title }: { children: ReactNode, title: string }) {
  const { user, logout } = useAuth();
  const [location] = useLocation();

  if (!user) return null; // Let App router handle redirect

  const roleNavItems = {
    user: [
      { name: 'Overview', href: '/dashboard/user', icon: LayoutDashboard },
      { name: 'My Bookings', href: '#', icon: Calendar },
      { name: 'Invoices', href: '#', icon: FileText },
      { name: 'Settings', href: '#', icon: Settings },
    ],
    staff: [
      { name: 'Schedule', href: '/dashboard/staff', icon: Calendar },
      { name: 'Tasks', href: '#', icon: CheckSquare },
      { name: 'Events', href: '#', icon: Coffee },
      { name: 'Profile', href: '#', icon: Settings },
    ],
    admin: [
      { name: 'Dashboard', href: '/dashboard/admin', icon: LayoutDashboard },
      { name: 'Bookings', href: '#', icon: Calendar },
      { name: 'Staff', href: '#', icon: Users },
      { name: 'Menu', href: '#', icon: Coffee },
      { name: 'Reports', href: '#', icon: PieChart },
    ],
    super_admin: [
      { name: 'Overview', href: '/dashboard/super-admin', icon: LayoutDashboard },
      { name: 'Users', href: '#', icon: Users },
      { name: 'System', href: '#', icon: Settings },
    ]
  };

  const navItems = roleNavItems[user.role as keyof typeof roleNavItems] || [];

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row pt-20">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-border bg-card/30 backdrop-blur-md flex flex-col hidden md:flex h-[calc(100vh-5rem)] sticky top-20">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-serif text-xl uppercase font-bold">
              {user.name.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-sm">{user.name}</p>
              <p className="text-xs text-muted-foreground capitalize">{user.role.replace('_', ' ')}</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive ? "bg-primary text-primary-foreground" : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="w-4 h-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border mt-auto">
          <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-500/10" onClick={() => logout()}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden min-h-[calc(100vh-5rem)]">
        <div className="p-6 md:p-8 flex-1">
          <h1 className="font-serif text-3xl md:text-4xl mb-8">{title}</h1>
          {children}
        </div>
      </main>
    </div>
  );
}
