import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import { Card, CardContent } from "@/app/components/ui/card";
import { AspectRatio } from "@/app/components/ui/aspect-ratio";

// Components to showcase
const showcaseComponents = [
  { id: 1, name: "Buttons", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  { id: 2, name: "Cards", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
  { id: 3, name: "Forms", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6" },
  { id: 4, name: "Modals", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
  { id: 5, name: "Datepickers", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e" },
  { id: 6, name: "Tables", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1" },
];

const showcaseUIPatterns = [
  { id: 1, name: "Navigation", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" },
  { id: 2, name: "Headers", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { id: 3, name: "Footers", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7" },
  { id: 4, name: "Layouts", image: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
  { id: 5, name: "Hero Sections", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  { id: 6, name: "Galleries", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
];

// Extended arrays for continuous scrolling
const extendedShowcaseComponents = [...showcaseComponents, ...showcaseComponents];
const extendedShowcaseUIPatterns = [...showcaseUIPatterns, ...showcaseUIPatterns];

const AnimatedComponentShowcase = () => {
  const [isHoveringRow1, setIsHoveringRow1] = useState(false);
  const [isHoveringRow2, setIsHoveringRow2] = useState(false);
  
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-secondary/30">
      <div className="container px-4 md:px-6 mb-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to build <span className="text-gradient">modern UI</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            100xUI provides a comprehensive set of tools and components to accelerate your development process.
          </p>
        </div>
      </div>
      
      {/* First row - right to left */}
      <div 
        className="mb-12 relative overflow-hidden px-4"
        onMouseEnter={() => setIsHoveringRow1(true)}
        onMouseLeave={() => setIsHoveringRow1(false)}
      >
        <motion.div
          className="flex gap-6"
          animate={{ 
            x: isHoveringRow1 ? 0 : [0, -1920]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: isHoveringRow1 ? 0 : 80, // Increased duration for smoother animation
              ease: "linear",
              repeatDelay: 0,
            }
          }}
          style={{ willChange: "transform" }} // Performance optimization
        >
          {extendedShowcaseComponents.map((component, index) => (
            <div 
              key={`${component.id}-${index}`} 
              className="flex-shrink-0 w-72"
            >
              <Card className="overflow-hidden border-0 shadow-lg will-change-transform">
                <AspectRatio ratio={16/9} className="bg-gray-100 dark:bg-gray-800">
                  <img 
                    src={component.image} 
                    alt={component.name} 
                    className="w-full h-full object-cover transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                </AspectRatio>
                <CardContent className="p-4 bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <h3 className="font-semibold text-lg">{component.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Beautiful, accessible {component.name.toLowerCase()}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Second row - left to right */}
      <div 
        className="relative overflow-hidden px-4"
        onMouseEnter={() => setIsHoveringRow2(true)}
        onMouseLeave={() => setIsHoveringRow2(false)}
      >
        <motion.div
          className="flex gap-6"
          animate={{ 
            x: isHoveringRow2 ? 0 : [-1920, 0]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: isHoveringRow2 ? 0 : 80, // Increased duration for smoother animation
              ease: "linear",
              repeatDelay: 0,
            }
          }}
          style={{ willChange: "transform" }} // Performance optimization
        >
          {extendedShowcaseUIPatterns.map((pattern, index) => (
            <div 
              key={`${pattern.id}-${index}`} 
              className="flex-shrink-0 w-72"
            >
              <Card className="overflow-hidden border-0 shadow-lg will-change-transform">
                <AspectRatio ratio={16/9} className="bg-gray-100 dark:bg-gray-800">
                  <img 
                    src={pattern.image} 
                    alt={pattern.name} 
                    className="w-full h-full object-cover transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                </AspectRatio>
                <CardContent className="p-4 bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <h3 className="font-semibold text-lg">{pattern.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Professional {pattern.name.toLowerCase()} patterns
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="mt-14 text-center">
        <Button size="lg" asChild>
          <Link href="/docs">
            Explore All Components <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default AnimatedComponentShowcase;