import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Github, Linkedin, Download, Code, Brain } from "lucide-react";

export default function HeroSection() {
  const [ref, inView] = useInView({ 
    threshold: 0.3, 
    triggerOnce: true 
  });

  const handleContactClick = () => {
    console.log('Contact button clicked');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    console.log('Download resume clicked');
    // TODO: Implement resume download functionality
  };

  const handleLinkedInClick = () => {
    console.log('LinkedIn clicked');
    window.open('https://linkedin.com/in/yash-lawankar', '_blank');
  };

  const handleGitHubClick = () => {
    console.log('GitHub clicked');
    window.open('https://github.com/yash-lawankar', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="relative pt-28 sm:pt-32 lg:pt-40 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 text-primary/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Code className="h-12 w-12 sm:h-16 sm:w-16" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-10 text-chart-2/20"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Brain className="h-10 w-10 sm:h-14 sm:w-14" />
      </motion.div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          ref={ref}
          className="text-center space-y-8 sm:space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Main Hero Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground">
                <motion.span
                  className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Yash Lawankar
                </motion.span>
              </h1>
              
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-2 left-1/2 h-1 bg-gradient-to-r from-primary to-chart-2 rounded-full"
                initial={{ width: 0, x: "-50%" }}
                animate={inView ? { width: "80%" } : { width: 0 }}
                transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
              />
            </motion.div>
            
            <motion.h2 
              className="text-xl sm:text-3xl lg:text-4xl text-muted-foreground font-medium"
              variants={itemVariants}
            >
              Computer Science Engineering Student
            </motion.h2>
            
            <motion.div 
              className="flex justify-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Badge variant="secondary" className="text-base sm:text-lg px-6 py-3 rounded-full">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-primary font-bold"
                >
                  CGPA: 8.72/10
                </motion.span>
              </Badge>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Computer Science Engineering student with practical experience in{" "}
              <motion.span 
                className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md"
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.2)" }}
              >
                AIML
              </motion.span>{" "}
              and{" "}
              <motion.span 
                className="text-chart-2 font-semibold bg-chart-2/10 px-2 py-1 rounded-md"
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--chart-2) / 0.2)" }}
              >
                data analysis
              </motion.span>. 
              Developed AI-driven solutions like Flora Vision AI and completed hands-on 
              internships in machine learning and Java development.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm sm:text-base text-muted-foreground"
            variants={itemVariants}
          >
            {[
              { icon: MapPin, text: "Amravati, Maharashtra", testId: "contact-location" },
              { icon: Phone, text: "+91 8806393646", testId: "contact-phone" },
              { icon: Mail, text: "yashlawankar@gmail.com", testId: "contact-email" }
            ].map((item, index) => (
              <motion.div 
                key={item.testId}
                className="flex items-center gap-3 bg-muted/30 px-4 py-2 rounded-full"
                data-testid={item.testId}
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--muted) / 0.5)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                onClick={handleContactClick}
                data-testid="button-contact"
                className="text-lg px-8 py-6 rounded-full shadow-lg bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90"
              >
                <motion.div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  Get In Touch
                </motion.div>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleDownloadResume}
                data-testid="button-download-resume"
                className="text-lg px-8 py-6 rounded-full border-2 hover:bg-muted/50"
              >
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <Download className="h-5 w-5" />
                  Download Resume
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-4 sm:gap-6"
            variants={itemVariants}
          >
            {[
              { icon: Linkedin, onClick: handleLinkedInClick, testId: "button-linkedin", color: "hover:text-blue-500" },
              { icon: Github, onClick: handleGitHubClick, testId: "button-github", color: "hover:text-gray-700 dark:hover:text-gray-300" }
            ].map((social, index) => (
              <motion.div
                key={social.testId}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 2 + index * 0.1, type: "spring", stiffness: 300 }}
              >
                <Button 
                  size="icon" 
                  variant="ghost"
                  onClick={social.onClick}
                  data-testid={social.testId}
                  className={`h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-border/50 hover:border-primary/50 transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="h-6 w-6" />
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              y: [0, 10, 0] 
            }}
            transition={{ 
              opacity: { delay: 3 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}