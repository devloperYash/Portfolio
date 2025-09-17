import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Rocket, Lightbulb } from "lucide-react";
import floraVisionImage from "@assets/generated_images/Flora_Vision_AI_interface_9ac6b60c.png";
import knowledgeGraphImage from "@assets/generated_images/Knowledge_representation_system_interface_1aadeeeb.png";

interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectsSection() {
  const [ref, inView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  const projects: Project[] = [
    {
      title: "Flora Vision AI",
      description: "A comprehensive web application for plant disease diagnosis using AI and machine learning technologies.",
      features: [
        "Plant disease diagnosis via image/text input",
        "AI-powered diagnosis insights using LLM",
        "Interactive chatbot for farming guidance",
        "Weather insights and analysis",
        "Crop recommendation system",
        "Farming suggestions and best practices"
      ],
      technologies: ["AI/ML", "LLM", "Web Development", "Image Processing"],
      image: floraVisionImage,
      liveUrl: "https://flora-vision-ai.demo",
      githubUrl: "https://github.com/devloperYash/flora-vision-ai"
    },
    {
      title: "Knowledge Representation & Insight Generation",
      description: "An advanced LLM-based system for extracting meaningful patterns from datasets and visualizing them through interactive knowledge graphs.",
      features: [
        "Dataset pattern extraction using LLM",
        "Interactive knowledge graph visualization",
        "Automated insight generation",
        "Data relationship mapping",
        "Pattern recognition algorithms",
        "Visual data storytelling"
      ],
      technologies: ["LLM", "Data Analysis", "Knowledge Graphs", "Visualization"],
      image: knowledgeGraphImage,
      liveUrl: "https://knowledge-insights.demo",
      githubUrl: "https://github.com/devloperYash/knowledge-representation"
    }
  ];

  const handleLiveDemo = (url: string, projectTitle: string) => {
    console.log(`Opening live demo for ${projectTitle}: ${url}`);
    // TODO: Open actual project URL
  };

  const handleGitHub = (url: string, projectTitle: string) => {
    console.log(`Opening GitHub for ${projectTitle}: ${url}`);
    // TODO: Open actual GitHub URL
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-20 left-20 text-chart-2/5"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Rocket className="h-24 w-24" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 text-chart-3/5"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <Lightbulb className="h-20 w-20" />
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
              Featured Projects
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Innovative solutions showcasing expertise in AI, machine learning, and web development
          </motion.p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.95 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card 
                className="h-full overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 shadow-xl hover:shadow-2xl transition-all duration-500 border-0 group"
                data-testid={`card-project-${index}`}
              >
                <motion.div 
                  className="aspect-video overflow-hidden relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img 
                    src={project.image} 
                    alt={`${project.title} interface`}
                    className="w-full h-full object-cover"
                    data-testid={`img-project-${index}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
                
                <CardHeader className="pb-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.3 + 0.5 }}
                  >
                    <CardTitle className="text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.3 + 0.7 }}
                  >
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="text-primary"
                      >
                        ⚡
                      </motion.div>
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex}
                          className="text-sm text-muted-foreground flex items-start gap-3"
                          data-testid={`text-feature-${index}-${featureIndex}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ delay: index * 0.3 + 0.8 + featureIndex * 0.1 }}
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          <motion.span 
                            className="text-primary mt-1 text-lg"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.3 }}
                          >
                            •
                          </motion.span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.3 + 1 }}
                  >
                    <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ 
                            delay: index * 0.3 + 1.2 + techIndex * 0.1,
                            type: "spring",
                            stiffness: 300
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.3 }
                          }}
                        >
                          <Badge 
                            variant="outline"
                            className="bg-gradient-to-r from-muted/50 to-primary/10 hover:from-primary/20 hover:to-chart-2/20 border-primary/20 hover:border-primary/40 transition-all duration-300"
                            data-testid={`badge-tech-${index}-${techIndex}`}
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col sm:flex-row gap-3 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.3 + 1.4 }}
                  >
                    {project.liveUrl && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          size="sm"
                          onClick={() => handleLiveDemo(project.liveUrl!, project.title)}
                          data-testid={`button-demo-${index}`}
                          className="w-full sm:w-auto bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90 shadow-lg"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </motion.div>
                    )}
                    {project.githubUrl && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleGitHub(project.githubUrl!, project.title)}
                          data-testid={`button-github-${index}`}
                          className="w-full sm:w-auto border-2 hover:bg-muted/50"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Project stats */}
        <motion.div 
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {[
            { label: "Projects Completed", count: "2+", icon: "🚀" },
            { label: "Technologies Used", count: "10+", icon: "⚡" },
            { label: "AI/ML Features", count: "5+", icon: "🤖" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "hsl(var(--muted) / 0.3)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.7 + index * 0.2, duration: 0.6 }}
            >
              <motion.div 
                className="text-4xl mb-4"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
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
                className="text-3xl font-bold text-foreground"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.8 }}
              >
                {stat.count}
              </motion.div>
              <div className="text-muted-foreground mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}