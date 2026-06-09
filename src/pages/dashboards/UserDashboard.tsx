import { useAuth } from '@/lib/auth';
import { MOCK_USERS } from '@/lib/mockData';
import { DashboardLayout } from './Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, CreditCard, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function UserDashboard() {
  const { user } = useAuth();
  
  // Find full user data from mock
  const fullUser = MOCK_USERS.find(u => u.id === user?.id) || user;
  const bookings = fullUser?.bookings || [];

  return (
    <DashboardLayout title="Welcome back, Amara">
      <div className="grid gap-6 mb-8 md:grid-cols-3">
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Bookings</CardTitle>
            <Calendar className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-serif">{bookings.length}</div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Events</CardTitle>
            <Clock className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-serif">{bookings.filter((b: any) => b.status !== 'completed').length}</div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Spent</CardTitle>
            <CreditCard className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-serif">$535,000</div>
          </CardContent>
        </Card>
      </div>

      <h2 className="font-serif text-2xl mb-4">Your Bookings</h2>
      <div className="space-y-4">
        {bookings.map((booking: any) => (
          <Card key={booking.id} className="glass border-border/50">
            <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-xs text-muted-foreground">{booking.id}</span>
                  <Badge variant={booking.status === 'confirmed' ? 'default' : 'secondary'} className="capitalize bg-primary/20 text-primary">
                    {booking.status}
                  </Badge>
                </div>
                <h3 className="font-serif text-xl">{booking.event}</h3>
                <div className="text-sm text-muted-foreground mt-2 flex gap-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {booking.date}</span>
                  <span className="flex items-center gap-1"><UsersIcon className="w-3 h-3" /> {booking.guests} Guests</span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono font-medium text-lg mb-2">${booking.total.toLocaleString()}</div>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}

const UsersIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
)
