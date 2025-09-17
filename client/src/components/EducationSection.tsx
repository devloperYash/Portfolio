import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  gradeType: string;
  status?: string;
}

export default function EducationSection() {
  const education: Education[] = [
    {
      degree: "B.E. in Computer Science & Engineering",
      institution: "Prof. Ram Meghe Institute of Technology & Research, Badnera",
      location: "Badnera, Maharashtra",
      period: "Expected May 2026",
      grade: "8.72",
      gradeType: "CGPA",
      status: "In Progress"
    },
    {
      degree: "HSC (Class 12), Maharashtra Board",
      institution: "Vidyabharti Mahavidyalaya",
      location: "Amravati, Maharashtra", 
      period: "2022",
      grade: "74.00",
      gradeType: "Percentage"
    },
    {
      degree: "SSC (Class 10), Maharashtra Board",
      institution: "Sunrise English School",
      location: "Amravati, Maharashtra",
      period: "2020", 
      grade: "87.60",
      gradeType: "Percentage"
    }
  ];

  const getGradeBadgeVariant = (grade: string, gradeType: string) => {
    const numGrade = parseFloat(grade);
    if (gradeType === "CGPA") {
      return numGrade >= 8.5 ? "default" : numGrade >= 7.5 ? "secondary" : "outline";
    } else {
      return numGrade >= 85 ? "default" : numGrade >= 70 ? "secondary" : "outline";
    }
  };

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation with consistent performance across all levels
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={`${edu.institution}-${edu.degree}`}
              className="hover-elevate transition-all duration-300"
              data-testid={`card-education-${index}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-foreground flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      {edu.degree}
                    </CardTitle>
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span data-testid={`text-location-${index}`}>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span data-testid={`text-period-${index}`}>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <Badge 
                      variant={getGradeBadgeVariant(edu.grade, edu.gradeType)}
                      className="text-sm"
                      data-testid={`badge-grade-${index}`}
                    >
                      <Award className="h-3 w-3 mr-1" />
                      {edu.grade}{edu.gradeType === "CGPA" ? "/10" : "%"} {edu.gradeType}
                    </Badge>
                    {edu.status && (
                      <Badge variant="outline" className="text-xs" data-testid={`badge-status-${index}`}>
                        {edu.status}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Additional Academic Highlights */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">Academic Highlights</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2">
              Consistent Academic Performance
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Strong Foundation in Mathematics & Science
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Computer Science Specialization
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}