import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building, Users, Award, Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
}

export default function ExperienceSection() {
  const [ref, inView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  const experiences: Experience[] = [
    {
      title: "Java Intern",
      company: "MotionCut",
      period: "Sep 2024 – Oct 2024",
      type: "Internship",
      description: [
        "Implemented Java applications using Object-Oriented Programming principles",
        "Applied Data Structures and Algorithms concepts in real-world projects",
        "Developed efficient solutions for complex programming challenges"
      ],
      skills: ["Java", "OOP", "DSA", "Problem Solving"]
    },
    {
      title: "College AIML Intern",
      company: "EduaSkill",
      period: "Jul 2024 – Sep 2024",
      type: "Internship",
      description: [
        "Trained supervised machine learning models on real-world datasets",
        "Gained hands-on experience with various ML algorithms and techniques",
        "Worked on data preprocessing and model evaluation"
      ],
      skills: ["Machine Learning", "Python", "Data Analysis", "Model Training"]
    },
    {
      title: "Intel Unnati Training Program",
      company: "Intel",
      period: "May 2024 – Jul 2024",
      type: "Training Program",
      description: [
        "Developed comprehensive knowledge graphs for data representation",
        "Utilized Large Language Models (LLMs) for automated insight generation",
        "Gained expertise in advanced AI and data science techniques"
      ],
      skills: ["LLM", "Knowledge Graphs", "AI/ML", "Data Science"]
    },
    {
      title: "Git & GitHub Workshop Facilitator",
      company: "Self-Organized",
      period: "2024",
      type: "Workshop",
      description: [
        "Led hands-on Git & GitHub workshop for 100+ engineering students",
        "Taught version control best practices and collaborative development",
        "Received positive feedback for clear explanations and practical approach"
      ],
      skills: ["Git", "GitHub", "Teaching", "Version Control"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-20 right-20 text-chart-1/5"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Briefcase className="h-28 w-28" />
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
              Experience & Training
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Practical experience through internships, training programs, and leadership roles
          </motion.p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.title}`}
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: 15 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                rotateY: 3,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card 
                className="h-full bg-gradient-to-br from-background via-background to-muted/20 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-l-primary"
                data-testid={`card-experience-${index}`}
              >
                <CardHeader className="pb-4">
                  <motion.div 
                    className="flex items-start justify-between gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <div className="space-y-2">
                      <CardTitle className="text-lg lg:text-xl text-foreground flex items-center gap-3">
                        <motion.div
                          className="bg-primary/10 p-2 rounded-lg text-primary"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Award className="h-4 w-4" />
                        </motion.div>
                        {experience.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    >
                      <Badge variant="outline" className="shrink-0 bg-gradient-to-r from-primary/10 to-chart-2/10 border-primary/30">
                        {experience.type}
                      </Badge>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    <Calendar className="h-4 w-4" />
                    <span data-testid={`text-period-${index}`}>{experience.period}</span>
                  </motion.div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                  >
                    <ul className="space-y-3">
                      {experience.description.map((item, itemIndex) => (
                        <motion.li 
                          key={itemIndex}
                          className="text-sm text-muted-foreground flex items-start gap-3 leading-relaxed"
                          data-testid={`text-description-${index}-${itemIndex}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ delay: index * 0.2 + 0.7 + itemIndex * 0.1 }}
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          <motion.span 
                            className="text-primary mt-1 shrink-0 text-lg"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: itemIndex * 0.5 }}
                          >
                            •
                          </motion.span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.2 + 0.8 }}
                  >
                    <h4 className="font-semibold text-foreground mb-3 text-sm flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="text-chart-2"
                      >
                        ⚡
                      </motion.div>
                      Key Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ 
                            delay: index * 0.2 + 0.9 + skillIndex * 0.1,
                            type: "spring",
                            stiffness: 300
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: [0, -3, 3, 0],
                            transition: { duration: 0.3 }
                          }}
                        >
                          <Badge 
                            variant="secondary"
                            className="text-xs cursor-pointer bg-gradient-to-r from-secondary to-muted hover:from-chart-2/20 hover:to-primary/20 transition-all duration-300"
                            data-testid={`badge-skill-${index}-${skillIndex}`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { label: "Internships", count: "3+", icon: "💼" },
            { label: "Companies", count: "3+", icon: "🏢" },
            { label: "Students Trained", count: "100+", icon: "👥" },
            { label: "Skills Gained", count: "15+", icon: "🎯" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "hsl(var(--muted) / 0.3)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
            >
              <motion.div 
                className="text-3xl mb-3"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              >
                {stat.icon}
              </motion.div>
              <motion.div 
                className="text-2xl font-bold text-foreground"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.7 }}
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