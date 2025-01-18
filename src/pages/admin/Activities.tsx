import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Plus, Upload, Trash2, Save } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Initial data structure
const initialActivities = {
  mainActivities: [
    {
      id: 1,
      title: "Fertilizer Distribution",
      description: "Importing and distributing high-quality fertilizers to member cooperatives on credit.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
      startDate: "2024-01-01",
      status: "active"
    },
    {
      id: 2,
      title: "Agricultural Products",
      description: "Purchasing staple crops directly from members at competitive prices.",
      image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8",
      startDate: "2024-01-01",
      status: "active"
    }
  ],
  initiatives: [
    {
      id: 1,
      title: "Niger Seed Oil Production",
      description: "Establishing semi-refinery facilities for niger seed oil production",
      timeline: "Q2 2024",
      status: "planning"
    }
  ]
};

export default function Activities() {
  const [activities, setActivities] = useState(initialActivities);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSave = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Changes saved successfully",
        description: "Activities have been updated.",
      });
    } catch (error) {
      toast({
        title: "Error saving changes",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = () => {
    toast({
      title: "Image upload started",
      description: "Your image is being processed...",
    });
  };

  const addMainActivity = () => {
    const newActivity = {
      id: Date.now(),
      title: "New Activity",
      description: "",
      image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8",
      startDate: new Date().toISOString().split('T')[0],
      status: "planned"
    };
    setActivities({
      ...activities,
      mainActivities: [...activities.mainActivities, newActivity]
    });
  };

  const addInitiative = () => {
    const newInitiative = {
      id: Date.now(),
      title: "New Initiative",
      description: "",
      timeline: "Upcoming",
      status: "planning"
    };
    setActivities({
      ...activities,
      initiatives: [...activities.initiatives, newInitiative]
    });
  };

  return (
    <AdminLayout currentPage="activities">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-neutral-900">Activities Management</h1>
            <p className="text-sm text-neutral-500">Manage your organization's activities and initiatives</p>
          </div>
          <Button
            onClick={handleSave}
            disabled={isSubmitting}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            <Save className="w-4 h-4 mr-2" />
            {isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
        </div>

        {/* Main Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Main Activities</CardTitle>
            <CardDescription>Manage your organization's core activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {activities.mainActivities.map((activity, index) => (
              <div key={activity.id} className="p-4 border rounded-lg space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2 flex-1">
                    <Label>Activity Title</Label>
                    <Input
                      value={activity.title}
                      onChange={(e) => {
                        const newActivities = [...activities.mainActivities];
                        newActivities[index] = {
                          ...activity,
                          title: e.target.value
                        };
                        setActivities({
                          ...activities,
                          mainActivities: newActivities
                        });
                      }}
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => {
                      const newActivities = activities.mainActivities.filter(
                        a => a.id !== activity.id
                      );
                      setActivities({
                        ...activities,
                        mainActivities: newActivities
                      });
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={activity.description}
                    onChange={(e) => {
                      const newActivities = [...activities.mainActivities];
                      newActivities[index] = {
                        ...activity,
                        description: e.target.value
                      };
                      setActivities({
                        ...activities,
                        mainActivities: newActivities
                      });
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Input
                      type="date"
                      value={activity.startDate}
                      onChange={(e) => {
                        const newActivities = [...activities.mainActivities];
                        newActivities[index] = {
                          ...activity,
                          startDate: e.target.value
                        };
                        setActivities({
                          ...activities,
                          mainActivities: newActivities
                        });
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <Select
                      value={activity.status}
                      onValueChange={(value) => {
                        const newActivities = [...activities.mainActivities];
                        newActivities[index] = {
                          ...activity,
                          status: value
                        };
                        setActivities({
                          ...activities,
                          mainActivities: newActivities
                        });
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="planned">Planned</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="paused">Paused</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Featured Image</Label>
                  <div className="flex items-center space-x-4">
                    <div className="relative w-40 h-24 bg-neutral-100 rounded-lg overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Button variant="outline" onClick={handleImageUpload}>
                      <Upload className="w-4 h-4 mr-2" />
                      Change Image
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            <Button onClick={addMainActivity}>
              <Plus className="w-4 h-4 mr-2" />
              Add Activity
            </Button>
          </CardContent>
        </Card>

        {/* Initiatives */}
        <Card>
          <CardHeader>
            <CardTitle>Initiatives</CardTitle>
            <CardDescription>Manage ongoing and upcoming initiatives</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {activities.initiatives.map((initiative, index) => (
              <div key={initiative.id} className="p-4 border rounded-lg space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2 flex-1">
                    <Label>Initiative Title</Label>
                    <Input
                      value={initiative.title}
                      onChange={(e) => {
                        const newInitiatives = [...activities.initiatives];
                        newInitiatives[index] = {
                          ...initiative,
                          title: e.target.value
                        };
                        setActivities({
                          ...activities,
                          initiatives: newInitiatives
                        });
                      }}
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => {
                      const newInitiatives = activities.initiatives.filter(
                        i => i.id !== initiative.id
                      );
                      setActivities({
                        ...activities,
                        initiatives: newInitiatives
                      });
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={initiative.description}
                    onChange={(e) => {
                      const newInitiatives = [...activities.initiatives];
                      newInitiatives[index] = {
                        ...initiative,
                        description: e.target.value
                      };
                      setActivities({
                        ...activities,
                        initiatives: newInitiatives
                      });
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Timeline</Label>
                    <Input
                      value={initiative.timeline}
                      onChange={(e) => {
                        const newInitiatives = [...activities.initiatives];
                        newInitiatives[index] = {
                          ...initiative,
                          timeline: e.target.value
                        };
                        setActivities({
                          ...activities,
                          initiatives: newInitiatives
                        });
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <Select
                      value={initiative.status}
                      onValueChange={(value) => {
                        const newInitiatives = [...activities.initiatives];
                        newInitiatives[index] = {
                          ...initiative,
                          status: value
                        };
                        setActivities({
                          ...activities,
                          initiatives: newInitiatives
                        });
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="planning">Planning</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="on-hold">On Hold</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            ))}

            <Button onClick={addInitiative}>
              <Plus className="w-4 h-4 mr-2" />
              Add Initiative
            </Button>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}