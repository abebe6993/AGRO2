import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Calendar } from '@/components/ui/calendar';
import { Upload, Image as ImageIcon, Link, Type, Layout, Settings, History, Eye, Save, Trash2, Plus } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Initial data structure with SEO and review metadata
const initialData = {
  metadata: {
    lastReviewed: new Date().toISOString(),
    nextReviewDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(), // 90 days from now
    reviewCycle: 'quarterly',
    version: '1.0',
    status: 'published'
  },
  activities: {
    title: "Our Activities",
    description: "Supporting farmers through comprehensive services and innovative initiatives",
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
    ],
    seo: {
      title: "Agricultural Activities & Services | Admas Cooperative Union",
      description: "Explore our comprehensive agricultural services including fertilizer distribution, product trading, and innovative farming initiatives.",
      keywords: "agriculture, farming, fertilizer, crops, ethiopia"
    }
  },
  community: {
    title: "Our Community",
    subtitle: "Growing Together, Harvesting Success",
    description: "Join Ethiopia's leading agricultural cooperative, where farmers work together to achieve greater success.",
    benefits: [
      {
        id: 1,
        title: "Collective Bargaining",
        description: "Access better market prices through our unified network",
        icon: "handshake"
      }
    ],
    testimonials: [
      {
        id: 1,
        name: "Alemayehu Tadesse",
        role: "Niger Seed Farmer",
        quote: "Joining Admas transformed my farming business.",
        image: "https://images.unsplash.com/photo-1507103011901-e954d6ec0988",
        verified: true
      }
    ],
    stats: {
      members: "1000+",
      cooperatives: "55+",
      experience: "20+ years"
    },
    seo: {
      title: "Join Our Farming Community | Admas Cooperative Union",
      description: "Be part of Ethiopia's leading agricultural community. Join 1000+ farmers in sustainable agriculture.",
      keywords: "community, farmers, cooperative, membership, ethiopia"
    }
  },
  impact: {
    title: "Our Impact",
    description: "Making a difference in Ethiopian agriculture through sustainable practices",
    stats: [
      {
        id: 1,
        label: "Member Cooperatives",
        value: "55+",
        description: "Active cooperative members"
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
    ],
    seo: {
      title: "Our Agricultural Impact | Admas Cooperative Union",
      description: "Discover how we're transforming Ethiopian agriculture through sustainable practices and farmer empowerment.",
      keywords: "impact, sustainable agriculture, farmer empowerment, ethiopia"
    }
  },
  contact: {
    office: {
      address: "Injibara, Awi Zone\nAmhara Region, Ethiopia",
      email: "info@admascooperative.com",
      phone: "+251 123 456 789",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM"
    },
    social: {
      facebook: "https://facebook.com/admascooperative",
      twitter: "https://twitter.com/admascooperative",
      linkedin: "https://linkedin.com/company/admascooperative"
    },
    emergencyContact: {
      name: "Support Hotline",
      phone: "+251 123 456 790",
      available: "24/7"
    },
    seo: {
      title: "Contact Admas Cooperative Union",
      description: "Get in touch with Ethiopia's leading agricultural cooperative union. We're here to help.",
      keywords: "contact, support, location, ethiopia cooperative"
    }
  }
};

export default function FrontPage() {
  const { toast } = useToast();
  const [data, setData] = useState(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSection, setSelectedSection] = useState('activities');
  const [showPreview, setShowPreview] = useState(false);

  const handleSave = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update last reviewed date
      setData(prev => ({
        ...prev,
        metadata: {
          ...prev.metadata,
          lastReviewed: new Date().toISOString()
        }
      }));

      toast({
        title: "Changes saved successfully",
        description: "Content has been updated and published.",
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

  const handleImageUpload = (section: string, id: number) => {
    // Implement image upload logic
    toast({
      title: "Image upload started",
      description: "Your image is being processed...",
    });
  };

  const scheduleReview = (date: Date) => {
    setData(prev => ({
      ...prev,
      metadata: {
        ...prev.metadata,
        nextReviewDate: date.toISOString()
      }
    }));

    toast({
      title: "Review scheduled",
      description: `Next content review scheduled for ${date.toLocaleDateString()}`,
    });
  };

  return (
    <AdminLayout currentPage="front-page">
      <div className="space-y-6">
        {/* Header with metadata */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-neutral-900">Content Management</h1>
            <p className="text-sm text-neutral-500">
              Last reviewed: {new Date(data.metadata.lastReviewed).toLocaleDateString()} | 
              Next review: {new Date(data.metadata.nextReviewDate).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center"
            >
              <Eye className="w-4 h-4 mr-2" />
              {showPreview ? "Exit Preview" : "Preview"}
            </Button>
            <Button
              onClick={handleSave}
              disabled={isSubmitting}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <Save className="w-4 h-4 mr-2" />
              {isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>

        {/* Main content management interface */}
        <Tabs defaultValue="activities" className="space-y-6" onValueChange={setSelectedSection}>
          <TabsList>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          {/* Activities Tab */}
          <TabsContent value="activities">
            <Card>
              <CardHeader>
                <CardTitle>Activities Section</CardTitle>
                <CardDescription>Manage your organization's activities and initiatives</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Section Title</Label>
                  <Input
                    value={data.activities.title}
                    onChange={(e) => setData({
                      ...data,
                      activities: { ...data.activities, title: e.target.value }
                    })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Section Description</Label>
                  <Textarea
                    value={data.activities.description}
                    onChange={(e) => setData({
                      ...data,
                      activities: { ...data.activities, description: e.target.value }
                    })}
                  />
                </div>

                {/* Main Activities */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Main Activities</Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const newActivity = {
                          id: Date.now(),
                          title: "New Activity",
                          description: "",
                          image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8",
                          startDate: new Date().toISOString().split('T')[0],
                          status: "planned"
                        };
                        setData({
                          ...data,
                          activities: {
                            ...data.activities,
                            mainActivities: [...data.activities.mainActivities, newActivity]
                          }
                        });
                      }}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Activity
                    </Button>
                  </div>

                  {data.activities.mainActivities.map((activity, index) => (
                    <div key={activity.id} className="p-4 border rounded-lg space-y-4">
                      <div className="flex justify-between items-start">
                        <Input
                          value={activity.title}
                          onChange={(e) => {
                            const newActivities = [...data.activities.mainActivities];
                            newActivities[index] = { ...activity, title: e.target.value };
                            setData({
                              ...data,
                              activities: { ...data.activities, mainActivities: newActivities }
                            });
                          }}
                          className="flex-1 mr-4"
                          placeholder="Activity Title"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={() => {
                            const newActivities = data.activities.mainActivities.filter(
                              a => a.id !== activity.id
                            );
                            setData({
                              ...data,
                              activities: { ...data.activities, mainActivities: newActivities }
                            });
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <Textarea
                        value={activity.description}
                        onChange={(e) => {
                          const newActivities = [...data.activities.mainActivities];
                          newActivities[index] = { ...activity, description: e.target.value };
                          setData({
                            ...data,
                            activities: { ...data.activities, mainActivities: newActivities }
                          });
                        }}
                        placeholder="Activity Description"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community">
            <Card>
              <CardHeader>
                <CardTitle>Community Section</CardTitle>
                <CardDescription>Manage community content and testimonials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Section Title</Label>
                  <Input
                    value={data.community.title}
                    onChange={(e) => setData({
                      ...data,
                      community: { ...data.community, title: e.target.value }
                    })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Subtitle</Label>
                  <Input
                    value={data.community.subtitle}
                    onChange={(e) => setData({
                      ...data,
                      community: { ...data.community, subtitle: e.target.value }
                    })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={data.community.description}
                    onChange={(e) => setData({
                      ...data,
                      community: { ...data.community, description: e.target.value }
                    })}
                  />
                </div>

                {/* Testimonials */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Testimonials</Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const newTestimonial = {
                          id: Date.now(),
                          name: "",
                          role: "",
                          quote: "",
                          image: "https://images.unsplash.com/photo-1507103011901-e954d6ec0988",
                          verified: true
                        };
                        setData({
                          ...data,
                          community: {
                            ...data.community,
                            testimonials: [...data.community.testimonials, newTestimonial]
                          }
                        });
                      }}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Testimonial
                    </Button>
                  </div>

                  {data.community.testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="p-4 border rounded-lg space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1 space-y-4">
                          <Input
                            value={testimonial.name}
                            onChange={(e) => {
                              const newTestimonials = [...data.community.testimonials];
                              newTestimonials[index] = { ...testimonial, name: e.target.value };
                              setData({
                                ...data,
                                community: { ...data.community, testimonials: newTestimonials }
                              });
                            }}
                            placeholder="Member Name"
                          />
                          <Input
                            value={testimonial.role}
                            onChange={(e) => {
                              const newTestimonials = [...data.community.testimonials];
                              newTestimonials[index] = { ...testimonial, role: e.target.value };
                              setData({
                                ...data,
                                community: { ...data.community, testimonials: newTestimonials }
                              });
                            }}
                            placeholder="Member Role"
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 ml-4"
                          onClick={() => {
                            const newTestimonials = data.community.testimonials.filter(
                              t => t.id !== testimonial.id
                            );
                            setData({
                              ...data,
                              community: { ...data.community, testimonials: newTestimonials }
                            });
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <Textarea
                        value={testimonial.quote}
                        onChange={(e) => {
                          const newTestimonials = [...data.community.testimonials];
                          newTestimonials[index] = { ...testimonial, quote: e.target.value };
                          setData({
                            ...data,
                            community: { ...data.community, testimonials: newTestimonials }
                          });
                        }}
                        placeholder="Testimonial Quote"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Impact Tab */}
          <TabsContent value="impact">
            <Card>
              <CardHeader>
                <CardTitle>Impact Section</CardTitle>
                <CardDescription>Manage impact statistics and success stories</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Section Title</Label>
                  <Input
                    value={data.impact.title}
                    onChange={(e) => setData({
                      ...data,
                      impact: { ...data.impact, title: e.target.value }
                    })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={data.impact.description}
                    onChange={(e) => setData({
                      ...data,
                      impact: { ...data.impact, description: e.target.value }
                    })}
                  />
                </div>

                {/* Impact Stats */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Impact Statistics</Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const newStat = {
                          id: Date.now(),
                          label: "New Statistic",
                          value: "0",
                          description: ""
                        };
                        setData({
                          ...data,
                          impact: {
                            ...data.impact,
                            stats: [...data.impact.stats, newStat]
                          }
                        });
                      }}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Statistic
                    </Button>
                  </div>

                  {data.impact.stats.map((stat, index) => (
                    <div key={stat.id} className="p-4 border rounded-lg space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1 space-y-4">
                          <Input
                            value={stat.label}
                            onChange={(e) => {
                              const newStats = [...data.impact.stats];
                              newStats[index] = { ...stat, label: e.target.value };
                              setData({
                                ...data,
                                impact: { ...data.impact, stats: newStats }
                              });
                            }}
                            placeholder="Statistic Label"
                          />
                          <Input
                            value={stat.value}
                            onChange={(e) => {
                              const newStats = [...data.impact.stats];
                              newStats[index] = { ...stat, value: e.target.value };
                              setData({
                                ...data,
                                impact: { ...data.impact, stats: newStats }
                              });
                            }}
                            placeholder="Statistic Value"
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 ml-4"
                          onClick={() => {
                            const newStats = data.impact.stats.filter(
                              s => s.id !== stat.id
                            );
                            setData({
                              ...data,
                              impact: { ...data.impact, stats: newStats }
                            });
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Manage contact details and social media links</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Office Address</Label>
                    <Textarea
                      value={data.contact.office.address}
                      onChange={(e) => setData({
                        ...data,
                        contact: {
                          ...data.contact,
                          office: { ...data.contact.office, address: e.target.value }
                        }
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={data.contact.office.email}
                      onChange={(e) => setData({
                        ...data,
                        contact: {
                          ...data.contact,
                          office: { ...data.contact.office, email: e.target.value }
                        }
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input
                      value={data.contact.office.phone}
                      onChange={(e) => setData({
                        ...data,
                        contact: {
                          ...data.contact,
                          office: { ...data.contact.office, phone: e.target.value }
                        }
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Office Hours</Label>
                    <Input
                      value={data.contact.office.hours}
                      onChange={(e) => setData({
                        ...data,
                        contact: {
                          ...data.contact,
                          office: { ...data.contact.office, hours: e.target.value }
                        }
                      })}
                    />
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="space-y-4">
                  <Label>Social Media Links</Label>
                  <div className="space-y-2">
                    <Input
                      value={data.contact.social.facebook}
                      onChange={(e) => setData({
                        ...data,
                        contact: {
                          ...data.contact,
                          social: { ...data.contact.social, facebook: e.target.value }
                        }
                      })}
                      placeholder="Facebook URL"
                    />
                    <Input
                      value={data.contact.social.twitter}
                      onChange={(e) => setData({
                        ...data,
                        contact: {
                          ...data.contact,
                          social: { ...data.contact.social, twitter: e.target.value }
                        }
                      })}
                      placeholder="Twitter URL"
                    />
                    <Input
                      value={data.contact.social.linkedin}
                      onChange={(e) => setData({
                        ...data,
                        contact: {
                          ...data.contact,
                          social: { ...data.contact.social, linkedin: e.target.value }
                        }
                      })}
                      placeholder="LinkedIn URL"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Content Review Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Content Review Schedule</CardTitle>
            <CardDescription>Plan and track content updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label>Next Review Date</Label>
                <Calendar
                  mode="single"
                  selected={new Date(data.metadata.nextReviewDate)}
                  onSelect={(date) => date && scheduleReview(date)}
                  className="rounded-md border"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <Label>Review Cycle</Label>
                  <Select
                    value={data.metadata.reviewCycle}
                    onValueChange={(value) => setData({
                      ...data,
                      metadata: {
                        ...data.metadata,
                        reviewCycle: value
                      }
                    })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select review cycle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="biannual">Bi-annual</SelectItem>
                      <SelectItem value="annual">Annual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Content Status</Label>
                  <Select
                    value={data.metadata.status}
                    onValueChange={(value) => setData({
                      ...data,
                      metadata: {
                        ...data.metadata,
                        status: value
                      }
                    })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select content status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="review">In Review</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}