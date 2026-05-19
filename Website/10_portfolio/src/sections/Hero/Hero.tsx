import { Button } from "../../components/Button";
import { AnimatedBorderButton } from "../../components/AnimatedBorderButton";
import {
  ArrowRight,
  Github,
  Linkedin,
  Globe,
  Music2,
  ChevronDown,
  Download,
} from "lucide-react";
import { SKILLS, SkillType, SOCIAL_LINKS, SocialLink } from "../../constants";
import { BlueDots } from "../../components/BlueDots";
import { Social } from "./Social";
import { SkillsMarquee } from "./SkillsMarquee";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Hero image"
          className="h-full w-full object-cover opacity-40"
        />
        {/* Gradient overlay */}
        <div className="from-background/20 via-background/80 to-background absolute inset-0 bg-gradient-to-b" />
      </div>

      {/* Blue dots*/}
      <BlueDots />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="glass text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
                <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
                Software Engineering Enthusiast
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="animate-fade-in animation-delay-100 text-5xl leading-tight font-bold md:text-6xl lg:text-7xl">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with <br />
                <span className="font-serif font-normal text-white italic">
                  precision.
                </span>
              </h1>
              <p className="text-muted-foreground animate-fade-in animation-delay-200 max-w-lg text-lg">
                Hi, I'm Noah Tran - a software engineering enthusiast
                specializing in React, TypeScript and Tailwind CSS. I build
                scalable, performant web applications that users love.
              </p>
            </div>

            {/* CTA Buttons */}
            {/* <div className="animate-fade-in animation-delay-300 flex flex-wrap gap-4">
              <Button href="#contact" size="lg">
                Contact Me <ArrowRight className="h-5 w-5 shrink-0" />
              </Button>
              <AnimatedBorderButton>
                <Download className="h-5 w-5" />
                Download CV
              </AnimatedBorderButton>
            </div> */}

            {/* Social Links */}
            <Social />
          </div>
          {/* Right Column - Profile Image */}
          <div className="animate-fade-in animation-delay-300 relative">
            {/* Profile Image */}
            <div className="relative mx-auto max-w-md">
              <div className="from-primary/30 to-primary/10 absolute inset-0 animate-pulse rounded-3xl bg-gradient-to-br via-transparent blur-2xl" />
              <div className="glass glow-border relative rounded-3xl p-2">
                <img
                  src="/profile-photo1.png"
                  alt="Noah Tran"
                  className="aspect-[4/5] w-full rounded-2xl object-cover"
                />

                {/* Floating Badge */}
                <div className="glass animate-float absolute -right-4 -bottom-4 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary h-3 w-3 animate-pulse rounded-full" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="glass animate-float animation-delay-500 absolute -top-4 -left-4 rounded-xl px-4 py-3">
                  <div className="text-primary text-2xl font-bold">5+</div>
                  <div className="text-muted-foreground text-xs">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <SkillsMarquee />

        {/* Scroll Icon */}
        <div className="animate-fade-in animation-delay-800 absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-wider uppercase">Scroll</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
