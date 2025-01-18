import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Plus, Upload, Trash2, Save } from 'lucide-react';

// Initial data structure
const initialImpact = {
  stats: [
    {
      id: 1,
      label: "Member Cooperatives",
      value: "55+",
      description: "Active cooperative members"
    },
    {
      id: 2,
      label: "Years of Service",
      value: "20+",
      description: "Supporting farmers"
    },
    {
      id: 3,
      label: "Farmers Supported",
      value: "1000+",
      description: "Direct beneficiaries"
    }
  ],
  successStories: [
    {
      id: 1,
      title: "Modernizing Niger Seed Production",
      description: "Implementation of modern farming techniques led to 40% yield increase",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
      year: "2023"
    }
  ],
  reports: [
    {
      id: 1,
      title: "Annual Impact Report 2023",
      url: "/reports/impact-2023.pdf",
      publishDate: "2024-01-15"
    }
  ]
};

export default function Impact() {
  const [impact, setImpact] = useState(initialImpact);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSave = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Changes saved successfully",
        description: "Impact content has been updated.",
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

  const addStat = () => {
    const newStat = {
      id: Date.now(),
      label: "New Statistic",
      value: "0",
      description: ""
    };
    setImpact({
      ...impact,
      stats: [...impact.stats, newStat]
    });
  };

  const addSuccessStory = () => {
    const newStory = {
      id: Date.now(),
      title: "New Success Story",
      description: "",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
      year: new Date().getFullYear().toString()
    };
    setImpact({
      ...impact,
      successStories: [...impact.successStories, newStory]
    });
  };

  const addReport = () => {
    const newReport = {
      id: Date.now(),
      title: "New Report",
      url: "",
      publishDate: new Date().toISOString().split('T')[0]
    };
    setImpact({
      ...impact,
      reports: [...impact.reports, newReport]
    });
  };

  return (
    <AdminLayout currentPage="impact">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-neutral-900">Impact Management</h1>
            <p className="text-sm text-neutral-500">Manage impact metrics and success stories</p>
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

        {/* Impact Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Impact Statistics</CardTitle>
            <CardDescription>Manage key impact metrics and figures</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {impact.stats.map((stat, index) => (
              <div key={stat.id} className="p-4 border rounded-lg space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2 flex-1">
                    <Label>Statistic Label</Label>
                    <Input
                      value={stat.label}
                      onChange={(e) => {
                        const newStats = [...impact.stats];
                        newStats[index] = {
                          ...stat,
                          label: e.target.value
                        };
                        setImpact({
                          ...impact,
                          stats: newStats
                        });
                      }}
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => {
                      const newStats = impact.stats.filter(
                        s => s.id !== stat.id
                      );
                      setImpact({
                        ...impact,
                        stats: newStats
                      });
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Value</Label>
                    <Input
                      value={stat.value}
                      onChange={(e) => {
                        const newStats = [...impact.stats];
                        newStats[index] = {
                          ...stat,
                          value: e.target.value
                        };
                        setImpact({
                          ...impact,
                          stats: newStats Continuing the Impact.tsx file content exactly where it left off:

                        });
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Input
                      value={stat.description}
                      onChange={(e) => {
                        const newStats = [...impact.stats];
                        newStats[index] = {
                          ...stat,
                          description: e.target.value
                        };
                        setImpact({
                          ...impact,
                          stats: newStats
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}

            <Button onClick={addStat}>
              <Plus className="w-4 h-4 mr-2" />
              Add Statistic
            </Button>
          </CardContent>
        </Card>

        {/* Success Stories */}
        <Card>
          <CardHeader>
            <CardTitle>Success Stories</CardTitle>
            <CardDescription>Share impactful stories from our community</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {impact.successStories.map((story, index) => (
              <div key={story.id} className="p-4 border rounded-lg space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2 flex-1">
                    <Label>Story Title</Label>
                    <Input
                      value={story.title}
                      onChange={(e) => {
                        const newStories = [...impact.successStories];
                        newStories[index] = {
                          ...story,
                          title: e.target.value
                        };
                        setImpact({
                          ...impact,
                          successStories: newStories
                        });
                      }}
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => {
                      const newStories = impact.successStories.filter(
                        s => s.id !== story.id
                      );
                      setImpact({
                        ...impact,
                        successStories: newStories
                      });
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={story.description}
                    onChange={(e) => {
                      const newStories = [...impact.successStories];
                      newStories[index] = {
                        ...story,
                        description: e.target.value
                      };
                      setImpact({
                        ...impact,
                        successStories: newStories
                      });
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Year</Label>
                    <Input
                      value={story.year}
                      onChange={(e) => {
                        const newStories = [...impact.successStories];
                        newStories[index] = {
                          ...story,
                          year: e.target.value
                        };
                        setImpact({
                          ...impact,
                          successStories: newStories
                        });
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Featured Image</Label>
                    <div className="flex items-center space-x-4">
                      <div className="relative w-40 h-24 bg-neutral-100 rounded-lg overflow-hidden">
                        <img
                          src={story.image}
                          alt={story.title}
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
              </div>
            ))}

            <Button onClick={addSuccessStory}>
              <Plus className="w-4 h-4 mr-2" />
              Add Success Story
            </Button>
          </CardContent>
        </Card>

        {/* Impact Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Impact Reports</CardTitle>
            <CardDescription>Manage published impact reports and documents</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {impact.reports.map((report, index) => (
              <div key={report.id} className="p-4 border rounded-lg space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2 flex-1">
                    <Label>Report Title</Label>
                    <Input
                      value={report.title}
                      onChange={(e) => {
                        const newReports = [...impact.reports];
                        newReports[index] = {
                          ...report,
                          title: e.target.value
                        };
                        setImpact({
                          ...impact,
                          reports: newReports
                        });
                      }}
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => {
                      const newReports = impact.reports.filter(
                        r => r.id !== report.id
                      );
                      setImpact({
                        ...impact,
                        reports: newReports
                      });
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>URL</Label>
                    <Input
                      value={report.url}
                      onChange={(e) => {
                        const newReports = [...impact.reports];
                        newReports[index] = {
                          ...report,
                          url: e.target.value
                        };
                        setImpact({
                          ...impact,
                          reports: newReports
                        });
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Publish Date</Label>
                    <Input
                      type="date"
                      value={report.publishDate}
                      onChange={(e) => {
                        const newReports = [...impact.reports];
                        newReports[index] = {
                          ...report,
                          publishDate: e.target.value
                        };
                        setImpact({
                          ...impact,
                          reports: newReports
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}

            <Button onClick={addReport}>
              <Plus className="w-4 h-4 mr-2" />
              Add Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}