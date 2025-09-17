import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Award, Users } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  level: string;
  color: string;
}

export default function AchievementsSection() {
  const achievements: Achievement[] = [
    {
      title: "Aavishkar Competition",
      description: "Winner at College, District, and University levels. State Runner-Up recognition for innovative project and technical excellence.",
      category: "Competition",
      icon: <Trophy className="h-5 w-5" />,
      level: "State Runner-Up",
      color: "border-l-yellow-500"
    },
    {
      title: "Espiranza Technical Competition",
      description: "Secured 2nd Prize for demonstrating exceptional technical skills and innovative problem-solving approach.",
      category: "Competition", 
      icon: <Award className="h-5 w-5" />,
      level: "2nd Prize",
      color: "border-l-blue-500"
    },
    {
      title: "Hackathon Winner",
      description: "First place in hackathon competition for developing innovative solutions under time constraints.",
      category: "Competition",
      icon: <Star className="h-5 w-5" />,
      level: "Winner",
      color: "border-l-green-500"
    },
    {
      title: "Ecothon 4.0",
      description: "Outstanding performance in environmental technology competition focusing on sustainable solutions.",
      category: "Competition",
      icon: <Award className="h-5 w-5" />,
      level: "Recognition",
      color: "border-l-emerald-500"
    },
    {
      title: "University Color Coat Holder",
      description: "Recognized for significant contributions and exceptional achievements at the university level.",
      category: "Recognition",
      icon: <Users className="h-5 w-5" />,
      level: "University Level",
      color: "border-l-purple-500"
    }
  ];

  const getCategoryBadgeVariant = (category: string) => {
    return category === "Competition" ? "default" : "secondary";
  };

  return (
    <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Awards and recognition for technical excellence, innovation, and leadership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title}
              className={`hover-elevate transition-all duration-300 border-l-4 ${achievement.color}`}
              data-testid={`card-achievement-${index}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="text-primary">
                      {achievement.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-foreground">
                        {achievement.title}
                      </CardTitle>
                    </div>
                  </div>
                  <Badge 
                    variant={getCategoryBadgeVariant(achievement.category)}
                    className="shrink-0 text-xs"
                    data-testid={`badge-category-${index}`}
                  >
                    {achievement.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Badge 
                    variant="outline" 
                    className="text-xs font-medium"
                    data-testid={`badge-level-${index}`}
                  >
                    {achievement.level}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary" data-testid="stat-competitions">5+</div>
            <div className="text-sm text-muted-foreground">Competitions</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary" data-testid="stat-awards">4+</div>
            <div className="text-sm text-muted-foreground">Awards Won</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary" data-testid="stat-recognition">1</div>
            <div className="text-sm text-muted-foreground">University Recognition</div>
          </div>
        </div>
      </div>
    </section>
  );
}