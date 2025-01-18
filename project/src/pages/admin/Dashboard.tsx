import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { 
  Upload, 
  Image as ImageIcon, 
  Link, 
  Type, 
  Layout, 
  Settings, 
  History,
  Eye,
  Save,
  Trash2,
  Plus
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data structure
const initialContent = {
  hero: {
    title: "Growing Together, Harvesting Success",
    subtitle: "Empowering Farmers Since 2003",
    description: "Join Ethiopia's leading agricultural cooperative union.",
    ctaText: "Join Now",
    ctaLink: "#join",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
    enabled: true
  },
  about: {
    title: "About Us",
    history: "Founded in 2003, Admas has grown to become...",
    mission: "Our mission is to empower local farmers...",
    vision: "We envision a future where every farmer...",
    team: [
      {
        name: "Alemayehu Tadesse",
        role: "Chairman",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      }
    ]
  },
  seo: {
    title: "Admas Cooperative Union - Empowering Ethiopian Farmers",
    description: "Leading agricultural cooperative union in Ethiopia...",
    keywords: "farming, cooperative, agriculture, Ethiopia"
  }
};

export default function Dashboard() {
  const [content, setContent] = useState(initialContent);
  const [activeVersion, setActiveVersion] = useState(1);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const { toast } = useToast();
  
  const handleSave = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Changes saved successfully",
        description: "Your content has been updated and published.",
      });
    } catch (error) {
      toast({
        title: "Error saving changes",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleImageUpload = () => {
    // Implement image upload logic
    toast({
      title: "Image uploaded",
      description: "Your image has been uploaded to the media library.",
    });
  };

  return (
    <AdminLayout currentPage="dashboard">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-neutral-900">Content Management</h1>
            <p className="text-sm text-neutral-500">Manage and update your website content</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setIsPreviewMode(!isPreviewMode)}
              className="flex items-center"
            >
              <Eye className="w-4 h-4 mr-2" />
              {isPreviewMode ? "Exit Preview" : "Preview"}
            </Button>
            <Button
              onClick={handleSave}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-6">
            <Tabs defaultValue="hero" className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="hero">Hero Section</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
                <TabsTrigger value="impact">Impact</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>

              <TabsContent value="hero" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Hero Section</CardTitle>
                    <CardDescription>
                      Edit the main banner content that appears at the top of your homepage
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="hero-title">Title</Label>
                        <Input
                          id="hero-title"
                          value={content.hero.title}
                          onChange={(e) => setContent({
                            ...content,
                            hero: { ...content.hero, title: e.target.value }
                          })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hero-subtitle">Subtitle</Label>
                        <Input
                          id="hero-subtitle"
                          value={content.hero.subtitle}
                          onChange={(e) => setContent({
                            ...content,
                            hero: { ...content.hero, subtitle: e.target.value }
                          })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hero-description">Description</Label>
                      <Textarea
                        id="hero-description"
                        value={content.hero.description}
                        onChange={(e) => setContent({
                          ...content,
                          hero: { ...content.hero, description: e.target.value }
                        })}
                        rows={4}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="hero-cta-text">CTA Button Text</Label>
                        <Input
                          id="hero-cta-text"
                          value={content.hero.ctaText}
                          onChange={(e) => setContent({
                            ...content,
                            hero: { ...content.hero, ctaText: e.target.value }
                          })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hero-cta-link">CTA Button Link</Label>
                        <Input
                          id="hero-cta-link"
                          value={content.hero.ctaLink}
                          onChange={(e) => setContent({
                            ...content,
                            hero: { ...content.hero, ctaLink: e.target.value }
                          })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Background Image</Label>
                      <div className="flex items-center space-x-4">
                        <div className="relative w-40 h-24 bg-neutral-100 rounded-lg overflow-hidden">
                          <img
                            src={content.hero.image}
                            alt="Hero background"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <Button variant="outline" onClick={handleImageUpload}>
                          <Upload className="w-4 h-4 mr-2" />
                          Upload New Image
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={content.hero.enabled}
                        onCheckedChange={(checked) => setContent({
                          ...content,
                          hero: { ...content.hero, enabled: checked }
                        })}
                      />
                      <Label>Enable Hero Section</Label>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>SEO Settings</CardTitle>
                    <CardDescription>
                      Optimize your content for search engines
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="seo-title">Meta Title</Label>
                      <Input
                        id="seo-title"
                        value={content.seo.title}
                        onChange={(e) => setContent({
                          ...content,
                          seo: { ...content.seo, title: e.target.value }
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="seo-description">Meta Description</Label>
                      <Textarea
                        id="seo-description"
                        value={content.seo.description}
                        onChange={(e) => setContent({
                          ...content,
                          seo: { ...content.seo, description: e.target.value }
                        })}
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="seo-keywords">Keywords</Label>
                      <Input
                        id="seo-keywords"
                        value={content.seo.keywords}
                        onChange={(e) => setContent({
                          ...content,
                          seo: { ...content.seo, keywords: e.target.value }
                        })}
                        placeholder="Separate keywords with commas"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* About Tab Content */}
              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About Section</CardTitle>
                    <CardDescription>
                      Edit your organization's history, mission, and team information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="about-history">Company History</Label>
                      <Textarea
                        id="about-history"
                        value={content.about.history}
                        onChange={(e) => setContent({
                          ...content,
                          about: { ...content.about, history: e.target.value }
                        })}
                        rows={6}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="about-mission">Mission</Label>
                        <Textarea
                          id="about-mission"
                          value={content.about.mission}
                          onChange={(e) => setContent({
                            ...content,
                            about: { ...content.about, mission: e.target.value }
                          })}
                          rows={4}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="about-vision">Vision</Label>
                        <Textarea
                          id="about-vision"
                          value={content.about.vision}
                          onChange={(e) => setContent({
                            ...content,
                            about: { ...content.about, vision: e.target.value }
                          })}
                          rows={4}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>Team Members</Label>
                        <Button variant="outline" size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Team Member
                        </Button>
                      </div>
                      
                      {content.about.team.map((member, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                          <div className="relative w-20 h-20">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                            <Button
                              variant="outline"
                              size="sm"
                              className="absolute -bottom-2 -right-2 w-8 h-8 p-0"
                              onClick={handleImageUpload}
                            >
                              <ImageIcon className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="flex-1 space-y-2">
                            <Input
                              value={member.name}
                              onChange={(e) => {
                                const newTeam = [...content.about.team];
                                newTeam[index] = { ...member, name: e.target.value };
                                setContent({
                                  ...content,
                                  about: { ...content.about, team: newTeam }
                                });
                              }}
                              placeholder="Name"
                            />
                            <Input
                              value={member.role}
                              onChange={(e) => {
                                const newTeam = [...content.about.team];
                                newTeam[index] = { ...member, role: e.target.value };
                                setContent({
                                  ...content,
                                  about: { ...content.about, team: newTeam }
                                });
                              }}
                              placeholder="Role"
                            />
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Add similar TabsContent components for other sections */}
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Version History */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Version History</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-neutral-50 ${
                          activeVersion === i + 1 ? 'bg-neutral-100' : ''
                        }`}
                        onClick={() => setActiveVersion(i + 1)}
                      >
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Version {i + 1}</p>
                          <p className="text-xs text-neutral-500">
                            {new Date().toLocaleDateString()}
                          </p>
                        </div>
                        <History className="w-4 h-4 text-neutral-400" />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Page Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Page Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Page Status</Label>
                  <Select defaultValue="published">
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Visibility</Label>
                  <Select defaultValue="public">
                    <SelectTrigger>
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                      <SelectItem value="password">Password Protected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Layout Template</Label>
                  <Select defaultValue="default">
                    <SelectTrigger>
                      <SelectValue placeholder="Select template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="landing">Landing Page</SelectItem>
                      <SelectItem value="full-width">Full Width</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}