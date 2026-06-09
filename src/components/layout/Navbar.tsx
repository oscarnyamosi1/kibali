import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useAuth } from '@/lib/auth';
import { useThemeStore } from '@/lib/themes';
import { Menu, X, Moon, Sun, Monitor, Droplets, Droplet } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { user, logout } = useAuth();
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const themeOptions = [
    { id: 'dark', icon: Moon },
    { id: 'warm', icon: Sun },
    { id: 'light', icon: Droplets },
    { id: 'navy-blue', icon: Droplet },
    { id: 'mac-os', icon: Monitor },
  ] as const;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-[var(--glass-bg)] border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] shadow-sm'
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center shrink-0">
            <span className="font-serif text-2xl font-bold tracking-wider leading-none text-primary">KIBALI</span>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase mt-1 text-foreground/80">Caterers</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    location === link.href ? 'text-primary' : 'text-foreground/80'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4 border-l border-border pl-6">
              {/* Theme Switcher Pill */}
              <div className="flex items-center bg-secondary/50 rounded-full p-1 border border-border/50">
                {themeOptions.map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setTheme(opt.id)}
                      className={cn(
                        'p-1.5 rounded-full transition-all',
                        theme === opt.id ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                      )}
                      aria-label={`Switch to ${opt.id} theme`}
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  );
                })}
              </div>

              {user ? (
                <div className="flex items-center space-x-2">
                  <Button variant="outline" className="rounded-full" asChild>
                    <Link href={`/dashboard/${user.role}`}>Dashboard</Link>
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => logout()} className="rounded-full border border-border/50">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" className="rounded-full" asChild>
                    <Link href="/login">Log In</Link>
                  </Button>
                  <Button className="rounded-full" asChild>
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
               <Link
               key={link.name}
               href={link.href}
               className={cn(
                 'block text-lg font-medium py-2',
                 location === link.href ? 'text-primary' : 'text-foreground/80'
               )}
               onClick={() => setIsMobileMenuOpen(false)}
             >
               {link.name}
             </Link>
            ))}
            
            <div className="pt-4 border-t border-border flex justify-between items-center">
              <span className="text-sm font-medium">Theme</span>
              <div className="flex space-x-2">
                {themeOptions.map((opt) => {
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setTheme(opt.id)}
                        className={cn(
                          'p-2 rounded-full',
                          theme === opt.id ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
                        )}
                      >
                        <Icon className="w-4 h-4" />
                      </button>
                    );
                  })}
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-2">
              {user ? (
                <>
                  <Button className="w-full rounded-full" asChild onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href={`/dashboard/${user.role}`}>Dashboard</Link>
                  </Button>
                  <Button variant="outline" className="w-full rounded-full" onClick={() => { logout(); setIsMobileMenuOpen(false); }}>
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button className="w-full rounded-full" asChild onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="/booking">Book Now</Link>
                  </Button>
                  <Button variant="outline" className="w-full rounded-full" asChild onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="/login">Log In</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
