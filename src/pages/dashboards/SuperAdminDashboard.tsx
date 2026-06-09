import { DashboardLayout } from './Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ShieldAlert, Users, Database, Settings, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MOCK_USERS } from '@/lib/mockData';

export default function SuperAdminDashboard() {
  return (
    <DashboardLayout title="System Control">
      
      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <Card className="glass-card bg-red-500/5 border-red-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5 text-red-500" />
              </div>
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-1">System Status</p>
            <h3 className="font-serif text-2xl text-red-500">All Systems Go</h3>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Total Users</p>
            <h3 className="font-serif text-3xl">{MOCK_USERS.length}</h3>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Database className="w-5 h-5 text-blue-500" />
              </div>
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Database Storage</p>
            <h3 className="font-serif text-3xl">45%</h3>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Settings className="w-5 h-5 text-purple-500" />
              </div>
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-1">API Requests/min</p>
            <h3 className="font-serif text-3xl">1.2k</h3>
          </CardContent>
        </Card>
      </div>

      <h2 className="font-serif text-2xl mb-4">User Management</h2>
      <Card className="glass border-border/50 overflow-hidden mb-8">
        <Table>
          <TableHeader className="bg-secondary/50">
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_USERS.map((u) => (
              <TableRow key={u.id} className="hover:bg-white/5 border-border/50">
                <TableCell className="font-mono text-muted-foreground">{u.id}</TableCell>
                <TableCell className="font-medium">{u.name}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>
                  <Badge variant={u.role === 'super_admin' ? 'destructive' : u.role === 'admin' ? 'default' : 'secondary'} className="capitalize">
                    {u.role.replace('_', ' ')}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-500"><Edit className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500"><Trash2 className="w-4 h-4" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="glass border-border/50">
          <CardHeader>
            <CardTitle>System Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
              <span>Maintenance Mode</span>
              <Badge variant="outline">Disabled</Badge>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
              <span>Mock Mode</span>
              <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30 border-0">Enabled</Badge>
            </div>
            <Button className="w-full mt-4">Save Configuration</Button>
          </CardContent>
        </Card>
      </div>

    </DashboardLayout>
  );
}
