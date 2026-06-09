import { useAuth } from '@/lib/auth';
import { MOCK_USERS } from '@/lib/mockData';
import { DashboardLayout } from './Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function StaffDashboard() {
  const { user } = useAuth();
  
  const fullUser = MOCK_USERS.find(u => u.id === user?.id) || user;
  const tasks = fullUser?.tasks || [];

  return (
    <DashboardLayout title="Staff Portal">
      
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card className="glass-card bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Current Shift</h3>
            <p className="text-2xl font-serif">{fullUser.shift || 'Morning'}</p>
            <p className="text-sm text-primary mt-2">Active</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Assigned Events Today</h3>
            <p className="text-2xl font-serif">{fullUser.assignedEvents?.length || 0}</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Tasks Completed</h3>
            <p className="text-2xl font-serif">
              {tasks.filter((t: any) => t.done).length} / {tasks.length}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-serif text-2xl mb-4">Your Tasks</h2>
          <Card className="glass border-border/50">
            <div className="divide-y divide-border/50">
              {tasks.map((task: any) => (
                <div key={task.id} className="p-4 flex items-start gap-4 hover:bg-white/5 transition-colors">
                  <button className="mt-1 text-primary">
                    {task.done ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5 text-muted-foreground" />}
                  </button>
                  <div className="flex-1">
                    <p className={`font-medium ${task.done ? 'line-through text-muted-foreground' : ''}`}>{task.task}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                      <Badge variant="outline" className="text-[10px]">{task.event}</Badge>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {task.dueTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <h2 className="font-serif text-2xl mb-4">Event Details</h2>
          <Card className="glass border-border/50">
            <CardContent className="p-6">
              <Badge className="mb-4 bg-primary text-primary-foreground">BK-001</Badge>
              <h3 className="font-serif text-xl mb-2">Wedding Reception</h3>
              <p className="text-muted-foreground mb-6">Main venue set up. 150 guests expected.</p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">Location</p>
                  <p className="text-sm text-muted-foreground">Grand Ballroom, Westlands</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Key Contacts</p>
                  <p className="text-sm text-muted-foreground">Manager: Sarah (Ext. 401)</p>
                </div>
                <Button className="w-full mt-4">View Run Sheet</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

    </DashboardLayout>
  );
}
