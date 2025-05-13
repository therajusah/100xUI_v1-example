"use client"
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Github, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';
import AnimatedComponentShowcase from '@/app/components/AnimatedComponentShowcase';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation variants for text animation
const textContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const componentsRef = useRef<HTMLDivElement>(null);
  
  // Split text for animation
  const tagline = "A professionally designed component library built with React, Tailwind CSS, and shadcn/ui. Create beautiful interfaces with less code and maximum flexibility.".split(" ");
  
  // GSAP animations
  useEffect(() => {
    // Hero section parallax
    if (heroRef.current) {
      gsap.to('.hero-shapes .shape', {
        y: '-30%',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
    
    // Components section animations
    if (componentsRef.current) {
      gsap.from('.component-card', {
        scale: 0.9,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: componentsRef.current,
          start: 'top 80%',
        },
      });
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative hero-gradient pt-16 md:pt-24 lg:pt-32 overflow-hidden">
        <div className="hero-shapes">
          {/* Abstract shapes in background */}
          {[
            { width: 184, height: 296, top: 44, left: 88, animation: 'animate-float' },
            { width: 160, height: 298, top: 63, left: 66, animation: 'animate-pulse-slow' },
            { width: 103, height: 197, top: 50, left: 21, animation: 'animate-float' },
            { width: 226, height: 235, top: 43, left: 22, animation: 'animate-pulse-slow' },
            { width: 165, height: 211, top: 63, left: 28, animation: 'animate-float' }
          ].map((shape, i) => (
            <div
              key={i}
              className={`shape absolute rounded-full bg-brand-purple/10 ${shape.animation}`}
              style={{
                width: `${shape.width}px`,
                height: `${shape.height}px`,
                top: `${shape.top}%`,
                left: `${shape.left}%`,
                opacity: 0.4,
                filter: 'blur(40px)',
                zIndex: -1,
              }}
            />
          ))}
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              Introducing 100xUI
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 "
            >
              Beautiful UI components <br className="hidden md:block" />
              <span className="text-gradient">for modern web apps</span>
            </motion.h1>

            <motion.div 
              variants={textContainer}
              initial="hidden"
              animate="show"
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto flex flex-wrap justify-center"
            >
              {tagline.map((word, index) => (
                <motion.span key={index} variants={textItem} className="mx-1">
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/docs">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Star on GitHub
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Animated code preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 md:mt-16 lg:mt-20 max-w-4xl mx-auto overflow-hidden rounded-lg shadow-2xl gradient-border"
          >
            <div className="bg-card p-4 text-left">
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-brand-orange"></div>
                <div className="w-3 h-3 rounded-full bg-brand-cyan"></div>
              </div>
              <pre className="text-sm md:text-base font-code bg-secondary/50 p-4 rounded-md overflow-auto">
                <code className="text-foreground">
                  <span className="text-brand-blue">import</span> {`{ Button }`} <span className="text-brand-blue">from</span> <span className="text-brand-orange">"100xui/components"</span>;{"\n\n"}
                  <span className="text-brand-purple">function</span> <span className="text-brand-cyan">App</span>() {"{"}
                  {"\n"}  <span className="text-brand-blue">return</span> (
                  {"\n"}    &lt;<span className="text-brand-pink">Button</span> <span className="text-brand-cyan">size</span>=<span className="text-brand-orange">"lg"</span> <span className="text-brand-cyan">className</span>=<span className="text-brand-orange">"bg-gradient-primary"</span>&gt;
                  {"\n"}      Click Me
                  {"\n"}    &lt;/<span className="text-brand-pink">Button</span>&gt;
                  {"\n"}  );
                  {"\n"}{"}"}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-full"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity="0.1"
              className="fill-background"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity="0.075"
              className="fill-background"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-background"
            ></path>
          </svg>
        </div>
      </section>

      {/* Animated Component Showcase - Replaces the Features Section */}
      <AnimatedComponentShowcase />

      {/* Components Preview Section - More modern look */}
      <section ref={componentsRef} className="py-20 md:py-28 bg-secondary/50 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-14">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Explore our <span className="text-gradient">Components</span>
              <motion.div 
                className="absolute -z-10 w-full h-full bg-primary/5 blur-3xl rounded-full"
                animate={{ 
                  opacity: [0.3, 0.7, 0.3], 
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </motion.h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              100xUI offers a wide range of ready-to-use components for all your UI needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Component preview cards */}
            {['Buttons', 'Cards', 'Forms', 'Modals', 'Navigation', 'Tables'].map((component, index) => (
              <motion.div
                key={component}
                className="component-card bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  borderColor: "rgba(139, 92, 246, 0.3)"
                }}
              >
                <div className="h-48 bg-gradient-to-br from-brand-purple/5 to-brand-blue/5 flex items-center justify-center relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-brand-blue/10 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="w-32 h-16 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center relative z-10">
                    <span className="font-medium text-primary">{component}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{component}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Beautiful, accessible {component.toLowerCase()} with multiple variants
                  </p>
                  <Link
                    href="/docs"
                    className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                  >
                    View details <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/docs">View All Components <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-brand-blue/5"></div>
          <div className="glow"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to build amazing UIs?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get started with 100xUI today and take your applications to the next level.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/docs">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs">
                  Browse Components
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
  );
};

export default Index;