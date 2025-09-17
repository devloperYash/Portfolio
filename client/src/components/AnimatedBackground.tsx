import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<FloatingParticle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: FloatingParticle[] = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 5,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, hsl(220 85% 17% / 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(200 100% 50% / 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, hsl(142 76% 36% / 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, hsl(220 85% 17% / 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, hsl(200 100% 50% / 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 20%, hsl(142 76% 36% / 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, hsl(220 85% 17% / 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 50%, hsl(200 100% 50% / 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(142 76% 36% / 0.1) 0%, transparent 50%)",
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(220, 38, 127, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 127, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}