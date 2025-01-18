import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Save } from 'lucide-react';

// Initial data structure
const initialContact = {
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
  }
};

export default function Contact() {
  const [contact, setContact] = useState(initialContact);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSave = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Changes saved successfully",
        description: "Contact information has been updated.",
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

  return (
    <AdminLayout currentPage="contact">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-neutral-900">Contact Information</h1>
            <p className="text-sm text-neutral-500">Manage contact details and social media links</p>
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

        {/* Office Information */}
        <Card>
          <CardHeader>
            <CardTitle>Office Information</CardTitle>
            <CardDescription>Manage primary contact details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Office Address</Label>
              <Textarea
                value={contact.office.address}
                onChange={(e) => setContact({
                  ...contact,
                  office: { ...contact.office, address: e.target.value }
                })}
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Email Address</Label>
                <Input
                  type="email"
                  value={contact.office.email}
                  onChange={(e) => setContact({
                    ...contact,
                    office: { ...contact.office, email: e.target.value }
                  })}
                />
              </div>
              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input
                  value={contact.office.phone}
                  onChange={(e) => setContact({
                    ...contact,
                    office: { ...contact.office, phone: e.target.value }
                  })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Office Hours</Label>
              <Input
                value={contact.office.hours}
                onChange={(e) => setContact({
                  ...contact,
                  office: { ...contact.office, hours: e.target.value }
                })}
              />
            </div>
          </CardContent>
        </Card>

        {/* Social Media Links */}
        <Card>
          <CardHeader>
            <CardTitle>Social Media</CardTitle>
            <CardDescription>Manage social media presence</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Facebook</Label>
              <Input
                value={contact.social.facebook}
                onChange={(e) => setContact({
                  ...contact,
                  social: { ...contact.social, facebook: e.target.value }
                })}
              />
            </div>
            <div className="space-y-2">
              <Label>Twitter</Label>
              <Input
                value={contact.social.twitter}
                onChange={(e) => setContact({
                  ...contact,
                  social: { ...contact.social, twitter: e.target.value }
                })}
              />
            </div>
            <div className="space-y-2">
              <Label>LinkedIn</Label>
              <Input
                value={contact.social.linkedin}
                onChange={(e) => setContact({
                  ...contact,
                  social: { ...contact.social, linkedin: e.target.value }
                })}
              />
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Emergency Contact</CardTitle>
            <CardDescription>Manage emergency support information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Contact Name</Label>
              <Input
                value={contact.emergencyContact.name}
                onChange={(e) => setContact({
                  ...contact,
                  emergencyContact: { ...contact.emergencyContact, name: e.target.value }
                })}
              />
            </div>
            <div className="space-y-2">
              <Label>Emergency Phone</Label>
              <Input
                value={contact.emergencyContact.phone}
                onChange={(e) => setContact({
                  ...contact,
                  emergencyContact: { ...contact.emergencyContact, phone: e.target.value }
                })}
              />
            </div>
            <div className="space-y-2">
              <Label>Availability</Label>
              <Input
                value={contact.emergencyContact.available}
                onChange={(e) => setContact({
                  ...contact,
                  emergencyContact: { ...contact.emergencyContact, available: e.target.value }
                })}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}