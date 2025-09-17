import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Globe } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [ref, inView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Implement actual form submission logic
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:yashlawankar@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+918806393646';
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/yash-lawankar', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/yash-lawankar', '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-20 left-20 text-chart-3/5"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      >
        <MessageCircle className="h-24 w-24" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 text-primary/5"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <Globe className="h-32 w-32" />
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Interested in collaborating or have questions? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <button 
                      onClick={handleEmailClick}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="button-contact-email"
                    >
                      yashlawankar@gmail.com
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <button 
                      onClick={handlePhoneClick}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="button-contact-phone"
                    >
                      +91 8806393646
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground" data-testid="text-location">
                      Amravati, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <Button 
                  size="icon" 
                  variant="outline"
                  onClick={handleLinkedInClick}
                  data-testid="button-contact-linkedin"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline"
                  onClick={handleGitHubClick}
                  data-testid="button-contact-github"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted px-3 py-1 rounded-md text-sm" data-testid="lang-english">English</span>
                <span className="bg-muted px-3 py-1 rounded-md text-sm" data-testid="lang-hindi">Hindi</span>
                <span className="bg-muted px-3 py-1 rounded-md text-sm" data-testid="lang-marathi">Marathi</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    data-testid="input-subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                    rows={4}
                    required
                    data-testid="textarea-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  data-testid="button-send-message"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}