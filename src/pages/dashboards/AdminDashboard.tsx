import { DashboardLayout } from './Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, Users, Calendar, DollarSign, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminDashboard() {
  
  const mockBookings = [
    { id: "BK-001", client: "Amara Okonkwo", event: "Wedding Reception", date: "2025-08-15", amount: "Ksh 4,500", status: "confirmed" },
    { id: "BK-002", client: "Tech Corp Inc.", event: "Annual Gala", date: "2025-09-01", amount: "Ksh 1200,000", status: "pending" },
    { id: "BK-003", client: "David Smith", event: "Private Dinner", date: "2025-07-20", amount: "Ksh 850", status: "confirmed" },
    { id: "BK-004", client: "Sarah Jane", event: "Birthday Party", date: "2025-08-05", amount: "Ksh 1,200", status: "cancelled" },
  ];

  return (
    <DashboardLayout title="Admin Overview">
      
      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <Badge variant="outline" className="text-green-500 bg-green-500/10 border-0">+12%</Badge>
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Monthly Revenue</p>
            <h3 className="font-serif text-3xl">Ksh 4,523,189</h3>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-500" />
              </div>
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Pending Bookings</p>
            <h3 className="font-serif text-3xl">12</h3>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-500" />
              </div>
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Active Staff</p>
            <h3 className="font-serif text-3xl">24</h3>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-orange-500" />
              </div>
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Conversion Rate</p>
            <h3 className="font-serif text-3xl">68%</h3>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-2xl">Recent Bookings</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <Card className="glass border-border/50 overflow-hidden">
            <Table>
              <TableHeader className="bg-secondary/50">
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockBookings.map((b) => (
                  <TableRow key={b.id} className="hover:bg-white/5 border-border/50">
                    <TableCell className="font-mono font-medium">{b.id}</TableCell>
                    <TableCell>{b.client}</TableCell>
                    <TableCell>{b.event}</TableCell>
                    <TableCell>
                      <Badge variant={b.status === 'confirmed' ? 'default' : b.status === 'pending' ? 'secondary' : 'destructive'} 
                             className={b.status === 'confirmed' ? 'bg-primary/20 text-primary border-0' : ''}>
                        {b.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">{b.amount}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        <div>
          <h2 className="font-serif text-2xl mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Button className="w-full justify-start h-12 text-left" variant="outline">
              Create New Booking
            </Button>
            <Button className="w-full justify-start h-12 text-left" variant="outline">
              Generate Invoice
            </Button>
            <Button className="w-full justify-start h-12 text-left" variant="outline">
              Manage Staff Schedule
            </Button>
            <Button className="w-full justify-start h-12 text-left" variant="outline">
              Update Menu Items
            </Button>
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
}
