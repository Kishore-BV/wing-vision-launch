import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, User, Building, MessageSquare } from "lucide-react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    try {
      // Send data to n8n webhook
      const response = await fetch('https://n8n-pgct.onrender.com/webhook/contact', 
       {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        toast({
          title: "Thank you for your enquiry!",
          description: "We'll get back to you within 24 hours."
        });

        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: ""
        });
      } else {
        throw new Error('Failed to submit enquiry');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error submitting enquiry",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card className="w-full max-w-lg backdrop-blur-md bg-card/95 border-0 shadow-soft">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Get in Touch</CardTitle>
        <CardDescription>
          Ready to take your projects to new heights? Let's discuss how our drone solutions can help.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Full Name *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              Company/Organization
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder="Your company name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service Interest</Label>
            <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="agricultural">Agricultural Monitoring</SelectItem>
                <SelectItem value="surveillance">Security & Surveillance</SelectItem>
                <SelectItem value="mapping">Mapping & Surveying</SelectItem>
                <SelectItem value="inspection">Infrastructure Inspection</SelectItem>
                <SelectItem value="delivery">Delivery Services</SelectItem>
                <SelectItem value="photography">Aerial Photography</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Message *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell us about your project requirements..."
              rows={4}
              required
            />
          </div>

          <Button type="submit" className="w-full shadow-glow hover:shadow-glow/80 transition-all duration-300">
            Send Enquiry
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EnquiryForm;
