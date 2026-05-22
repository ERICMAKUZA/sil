"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Lightbulb, Shield, Users, Target, ChevronRight } from "lucide-react";

const values = [
  {
    id: "innovation",
    title: "Innovation",
    description:
      "We continuously embrace cutting-edge technologies and modern fabrication techniques to deliver solutions that exceed expectations. Our commitment to innovation drives us to find better, smarter ways to serve our clients.",
    icon: Lightbulb,
    color: "text-primary",
  },
  {
    id: "safety",
    title: "Safety",
    description:
      "Safety is non-negotiable. From our manufacturing processes to the final installation, every step adheres to the highest safety standards. Your security is our priority.",
    icon: Shield,
    color: "text-primary",
  },
  {
    id: "client-focus",
    title: "Client Focus",
    description:
      "Your vision drives our work. We listen, understand, and deliver customized solutions that perfectly match your requirements. Every project is a partnership.",
    icon: Users,
    color: "text-primary",
  },
  {
    id: "precision",
    title: "Precision",
    description:
      "Zero-defect philosophy guides every weld, every cut, every installation. Our attention to detail ensures flawless execution and lasting quality.",
    icon: Target,
    color: "text-primary",
  },
];

export function ValuesSection() {
  const [activeValue, setActiveValue] = useState(values[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activeData = values.find((v) => v.id === activeValue) || values[0];

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left - Title and Values Tabs */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Mission & Vision
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 text-balance">
                Built on Values That Matter
              </h2>
            </div>

            {/* Values Tabs */}
            <div className="space-y-3">
              {values.map((value) => (
                <button
                  key={value.id}
                  onClick={() => setActiveValue(value.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 text-left ${activeValue === value.id
                      ? "bg-card border border-primary/30"
                      : "bg-transparent border border-transparent hover:bg-card/50 hover:border-border"
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${activeValue === value.id
                          ? "bg-primary/20"
                          : "bg-secondary"
                        }`}
                    >
                      <value.icon
                        className={`w-5 h-5 ${activeValue === value.id
                            ? "text-primary"
                            : "text-muted-foreground"
                          }`}
                      />
                    </div>
                    <span
                      className={`font-medium transition-colors ${activeValue === value.id
                          ? "text-foreground"
                          : "text-muted-foreground"
                        }`}
                    >
                      {value.title}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-all ${activeValue === value.id
                        ? "text-primary rotate-90"
                        : "text-muted-foreground"
                      }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Active Value Content */}
          <motion.div
            key={activeValue}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="p-8 lg:p-12 rounded-2xl bg-card border border-border">
              {/* Large Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <activeData.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {activeData.title}
              </h3>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {activeData.description}
              </p>

              {/* Decorative Quote */}
              <div className="mt-8 pt-8 border-t border-border">
                <blockquote className="text-sm text-muted-foreground italic">
                  &ldquo;Excellence is not a destination but a continuous journey of
                  improvement.&rdquo;
                </blockquote>
                <p className="text-sm text-primary mt-2">— SANREALTECH Team</p>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 rounded-2xl bg-primary/5 blur-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
