import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Database, Wrench, Sparkles } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

export default function SkillsSection() {
  const [ref, inView] = useInView({ 
    threshold: 0.2, 
    triggerOnce: true 
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["Java", "JavaScript", "C"],
      color: "border-l-chart-1"
    },
    {
      title: "Web Development",
      icon: <Globe className="h-5 w-5" />,
      skills: ["HTML", "CSS"],
      color: "border-l-chart-2"
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: ["SQL", "MongoDB"],
      color: "border-l-chart-3"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Data Structures and Algorithms (DSA)", "Git & GitHub", "Object-Oriented Programming (OOP)", "LLM"],
      color: "border-l-chart-4"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-20 right-20 text-primary/5"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="h-32 w-32" />
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
              Technical Skills
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Strong foundation in programming, data structures, and modern web technologies
          </motion.p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                rotateX: 5
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card 
                className={`h-full transition-all duration-500 border-l-4 ${category.color} bg-gradient-to-br from-background via-background to-muted/20 shadow-lg hover:shadow-2xl`}
                data-testid={`card-skill-category-${index}`}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-4 text-foreground text-xl">
                    <motion.div
                      className="text-primary p-2 bg-primary/10 rounded-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.icon}
                    </motion.div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ 
                          delay: index * 0.2 + skillIndex * 0.1,
                          duration: 0.4,
                          type: "spring",
                          stiffness: 300
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -2, 2, 0],
                          transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          variant="secondary"
                          className="text-sm px-3 py-1 cursor-pointer bg-gradient-to-r from-secondary to-muted hover:from-primary/20 hover:to-chart-2/20 transition-all duration-300"
                          data-testid={`badge-skill-${index}-${skillIndex}`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { label: "Languages", count: "3+", icon: Code },
            { label: "Technologies", count: "8+", icon: Wrench },
            { label: "Web Skills", count: "2+", icon: Globe },
            { label: "Databases", count: "2+", icon: Database }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/50"
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--muted) / 0.3)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
            >
              <motion.div className="text-primary mb-2">
                <stat.icon className="h-6 w-6 mx-auto" />
              </motion.div>
              <motion.div 
                className="text-2xl font-bold text-foreground"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.count}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}