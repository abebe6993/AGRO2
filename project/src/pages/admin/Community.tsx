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
const initialCommunity = {
  benefits: [
    {
      id: 1,
      title: "Collective Bargaining",
      description: "Access better market prices through our unified network",
      icon: "handshake"
    },
    {
      id: 2,
      title: "Training & Development",
      description: "Regular workshops on modern farming techniques",
      icon: "graduation-cap"
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
  }
};

export default function Community() {
  const [community, setCommunity] = useState(initialCommunity);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSave = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Changes saved successfully",
        description: "Community content has been updated.",
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

  const addBenefit = () => {
    const newBenefit = {
      id: Date.now(),
      title: "New Benefit",
      description: "",
      icon: "star"
    };
    setCommunity({
      ...community,
      benefits: [...community.benefits, newBenefit]
    });
  };

  const addTestimonial = () => {
    const newTestimonial = {
      id: Date.now(),
      name: "",
      role: "",
      quote: "",
      image: "https://images.unsplash.com/photo-1507103011901-e954d6ec0988",
      verified: false
    };
    setCommunity({
      ...community,
      testimonials: [...community.testimonials, newTestimonial]
    });
  };

  return (
    <AdminLayout currentPage="community">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-neutral-900">Community Management</h1>
            <p className="text-sm text-neutral-500">Manage community content and testimonials</p>
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

        {/* Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Community Statistics</CardTitle>
            <CardDescription>Update key community metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Total Members</Label>
                <Input
                  value={community.stats.members}
                  onChange={(e) => setCommunity({
                    ...community,
                    stats: { ...community.stats, members: e.target.value }
                  })}
                />
              </div>
              <div className="space-y-2">
                <Label>Total Cooperatives</Label>
                <Input
                  value={community.stats.cooperatives}
                  onChange={(e) => setCommunity({
                    ...community,
                    stats: { ...community.stats, cooperatives: e.target.value }
                  })}
                />
              </div>
              <div className="space-y-2">
                <Label>Years of Experience</Label>
                <Input
                  value={community.stats.experience}
                  onChange={(e) => setCommunity({
                    ...community,
                    stats: { ...community.stats, experience: e.target.value }
                  })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card>
          <CardHeader>
            <CardTitle>Member Benefits</CardTitle>
            <CardDescription>Manage membership benefits and features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {community.benefits.map((benefit, index) => (
              <div key={benefit.id} className="p-4 border rounded-lg space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2 flex-1">
                    <Label>Benefit Title</Label>
                    <Input
                      value={benefit.title}
                      onChange={(e) => {
                        const newBenefits = [...community.benefits];
                        newBenefits[index] = {
                          ...benefit,
                          title: e.target.value
                        };
                        setCommunity({
                          ...community,
                          benefits: newBenefits
                        });
                      }}
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => {
                      const newBenefits = community.benefits.filter(
                        b => b.id !== benefit.id
                      );
                      setCommunity({
                        ...community,
                        benefits: newBenefits
                      });
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={benefit.description}
                    onChange={(e) => {
                      const newBenefits = [...community.benefits];
                      newBenefits[index] = {
                        ...benefit,
                        description: e.target.value
                      };
                      setCommunity({
                        ...community,
                        benefits: newBenefits
                      });
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Icon Name</Label>
                  <Input
                    value={benefit.icon}
                    onChange={(e) => {
                      const newBenefits = [...community.benefits];
                      newBenefits[index] = {
                        ...benefit,
                        icon: e.target.value
                      };
                      setCommunity({
                        ...community,
                        benefits: newBenefits
                      });
                    }}
                  />
                </div>
              </div>
            ))}

            <Button onClick={addBenefit}>
              <Plus className="w-4 h-4 mr-2" />
              Add Benefit
            </Button>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <Card>
          <CardHeader>
            <CardTitle>Testimonials</CardTitle>
            <CardDescription>Manage member testimonials and success stories</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {community.testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="p-4 border rounded-lg space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2 flex-1">
                    <Label>Member Name</Label>
                    <Input
                      value={testimonial.name}
                      onChange={(e) => {
                        const newTestimonials = [...community.testimonials];
                        newTestimonials[index] = {
                          ...testimonial,
                          name: e.target.value
                        };
                        setCommunity({
                          ...community,
                          testimonials: newTestimonials
                        });
                      }}
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => {
                      const newTestimonials = community.testimonials.filter(
                        t => t.id !== testimonial.id
                      );
                      setCommunity({
                        ...community,
                        testimonials: newTestimonials
                      });
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label>Role</Label>
                  <Input
                    value={testimonial.role}
                    onChange={(e) => {
                      const newTestimonials = [...community.testimonials];
                      newTestimonials[index] = {
                        ...testimonial,
                        role: e.target.value
                      };
                      setCommunity({
                        ...community,
                        testimonials: newTestimonials
                      });
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Quote</Label>
                  <Textarea
                    value={testimonial.quote}
                    onChange={(e) => {
                      const newTestimonials = [...community.testimonials];
                      newTestimonials[index] = {
                        ...testimonial,
                        quote: e.target.value
                      };
                      setCommunity({
                        ...community,
                        testimonials: newTestimonials
                      });
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Profile Image</Label>
                  <div className="flex items-center space-x-4">
                    <div className="relative w-20 h-20 bg-neutral-100 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
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

            <Button onClick={addTestimonial}>
              <Plus className="w-4 h-4 mr-2" />
              Add Testimonial
            </Button>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}