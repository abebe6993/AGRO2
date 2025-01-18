import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function JoinCommunityDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    cooperativeType: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });

    setIsSubmitting(false);
    onOpenChange(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      cooperativeType: '',
      message: ''
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white/90 backdrop-blur-md border border-white/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-emerald-800">Join Our Community</DialogTitle>
          <DialogDescription className="text-neutral-600">
            Fill out the form below to join Admas Cooperative Union. We'll review your application and contact you soon.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-neutral-700">Full Name</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
              className="bg-white/50 border-neutral-200 focus:border-emerald-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-neutral-700">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              className="bg-white/50 border-neutral-200 focus:border-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-neutral-700">Phone Number</Label>
            <Input
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Enter your phone number"
              className="bg-white/50 border-neutral-200 focus:border-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-neutral-700">Location</Label>
            <Input
              id="location"
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="Your city/region"
              className="bg-white/50 border-neutral-200 focus:border-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cooperativeType" className="text-neutral-700">Cooperative Type</Label>
            <Select
              value={formData.cooperativeType}
              onValueChange={(value) => setFormData({ ...formData, cooperativeType: value })}
              required
            >
              <SelectTrigger className="bg-white/50 border-neutral-200 focus:border-emerald-500">
                <SelectValue placeholder="Select cooperative type" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-neutral-200">
                <SelectItem value="niger-seed">Niger Seed Production</SelectItem>
                <SelectItem value="grain">Grain Production</SelectItem>
                <SelectItem value="dairy">Dairy Production</SelectItem>
                <SelectItem value="vegetable">Vegetable Production</SelectItem>
                <SelectItem value="beekeeping">Beekeeping</SelectItem>
                <SelectItem value="mixed">Mixed Farming</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-neutral-700">Additional Information</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your cooperative or farming experience..."
              className="h-24 bg-white/50 border-neutral-200 focus:border-emerald-500"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white transition-all duration-300" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}