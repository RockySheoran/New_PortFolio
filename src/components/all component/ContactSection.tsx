"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

export const ContactSection = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    setMounted(true);
    // Initialize EmailJS (if needed)
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Me",
      description: "Feel free to reach out for opportunities",
      value: "rockysheoran72@gmail.com",
      action: "mailto:rockysheoran72@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Call Me",
      description: "Available for freelance work",
      value: "+918396903085",
      action: "tel:+918396903085"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      description: "Based in Chandigarh, India",
      value: "Chandigarh, Punjab",
      action: "https://maps.google.com/?q=Chandigarh"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/rocky-77a984267"
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/RockySheoran"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) {
      toast.error("Form reference is missing");
      setIsSubmitting(false);
      return;
    }

    try {
      console.log(formRef.current);
      console.log(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      // First approach: Using formRef directly
      // const result = await emailjs.sendForm(
      //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      //   formRef.current,
      //   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      // );

      // Alternative approach: Using send method with template params
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      console.log(result)

      if (result.status === 200) {
        toast.success("Your message has been sent successfully!");
        setFormData({
          from_name: "",
          from_email: "",
          subject: "",
          message: ""
        });
        formRef.current?.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) return null;

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20" id="contact">
      {/* Background elements remain the same */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* ... existing background elements ... */}
      </div>

      <div className="max-w-6xl mx-auto">
        {/* ... existing header section ... */}
        
        <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Badge variant="outline" className="mb-4">
          Get in touch
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          Let's work <span className="text-primary">together</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? 
          Feel free to reach out through the form or contact me directly.
        </p>
      </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="h-full border-border/50 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring" }}
                  >
                    <Send className="h-8 w-8 text-primary" />
                  </motion.div>
                  <span>Send a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
                    <Input 
                      id="name" 
                      name="from_name"
                      placeholder="Your name" 
                      className="bg-background/80 hover:bg-background transition-colors"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                    <Input 
                      id="email" 
                      name="from_email"
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="bg-background/80 hover:bg-background transition-colors"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Subject Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                    <Input 
                      id="subject" 
                      name="subject"
                      placeholder="What's this about?" 
                      className="bg-background/80 hover:bg-background transition-colors"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message *</label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Your message here..." 
                      rows={5} 
                      className="bg-background/80 hover:bg-background transition-colors min-h-[120px]"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="pt-2"
                  >
                    <Button 
                      type="submit" 
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <Card className="border-border/50 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                      >
                        {method.icon}
                      </motion.div>
                      <div>
                        <h3 className="font-medium">{method.title}</h3>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                        <Button 
                          variant="link" 
                          className="h-auto p-0 text-base group-hover:text-primary transition-colors"
                          asChild
                        >
                          <a href={method.action} target="_blank" rel="noopener noreferrer">
                            {method.value}
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-border/50 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                      whileHover={{ y: -3 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 hover:border-primary/30 transition-all bg-background hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent"
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};