import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Cpu,
  Terminal,
} from "lucide-react";
import { BlueDots } from "@/components/BlueDots";
import { Social } from "./Social";
import { SkillsMarquee } from "./SkillsMarquee";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background layer: image and gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Hero background"
          className="h-full w-full object-cover opacity-40"
        />
        {/* Gradient overlay */}
        <div className="from-background/20 via-background/80 to-background absolute inset-0 bg-gradient-to-b" />
      </div>

      {/* Effect layer: blue dots*/}
      <BlueDots />

      {/* Content layer */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left column (text): headline and social links */}
          <div className="space-y-8 lg:col-span-7">
            <div className="animate-fade-in">
              <span className="glass text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
                <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
                Tech BA • Ops & BI Intelligence • Fullstack Builder
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="animate-fade-in animation-delay-100 text-5xl leading-tight font-bold md:text-6xl lg:text-7xl">
                Noah Tran<span className="text-primary">.</span>
              </h1>
              <p className="text-muted-foreground animate-fade-in animation-delay-200 max-w-lg text-lg">
                Translating complex business operations into{" "}
                <span className="text-foreground font-medium">
                  technical architecture, BI intelligence, and working software.
                </span>
              </p>
            </div>

            {/* CTA buttons */}
            {/* <div className="animate-fade-in animation-delay-300 flex flex-wrap gap-4">
              <Button href="#contact" size="lg">
                Contact Me <ArrowRight className="h-5 w-5 shrink-0" />
              </Button>
              <AnimatedBorderButton>
                <Download className="h-5 w-5" />
                Download CV
              </AnimatedBorderButton>
            </div> */}

            {/* CTA Buttons */}
            <div className="animate-fade-in animation-delay-300 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold shadow-lg transition-all"
              >
                Explore Work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="glass hover:bg-surface text-foreground inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium transition-all"
              >
                Capabilities
              </Link>
            </div>

            {/* Social links */}
            <Social />
          </div>

          {/* Right column: profile image, floating badge and stats badge */}
          <div className="animate-fade-in animation-delay-300 lg:col-span-5">
            <div className="glass-strong glow-border relative overflow-hidden rounded-2xl p-6">
              {/* Top Window Bar */}
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-muted-foreground font-mono text-xs">
                  noah.system.spec
                </span>
              </div>

              {/* Structured Profile Spec */}
              <div className="space-y-5 font-mono text-sm">
                <div>
                  <div className="text-muted-foreground mb-1 text-xs">
                    // POSITIONING
                  </div>
                  <div className="text-foreground flex items-center gap-2 font-sans font-medium">
                    <Cpu size={16} className="text-primary shrink-0" />
                    <span>Business-to-Dev Bridge who actually ships code</span>
                  </div>
                </div>

                <div>
                  <div className="text-muted-foreground mb-2.5 text-xs">
                    // CORE CAPABILITIES
                  </div>
                  <ul className="space-y-2.5 font-sans text-sm">
                    <li className="flex items-start gap-2.5 text-slate-300">
                      <CheckCircle2
                        size={16}
                        className="text-primary mt-0.5 shrink-0"
                      />
                      <span>
                        <strong className="text-white">System & Ops:</strong>{" "}
                        UML specs, architecture & workflow automation
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 text-slate-300">
                      <CheckCircle2
                        size={16}
                        className="text-primary mt-0.5 shrink-0"
                      />
                      <span>
                        <strong className="text-white">BI Intelligence:</strong>{" "}
                        Data pipelines, analytics & executive dashboards
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 text-slate-300">
                      <CheckCircle2
                        size={16}
                        className="text-primary mt-0.5 shrink-0"
                      />
                      <span>
                        <strong className="text-white">Fullstack Build:</strong>{" "}
                        End-to-end web apps from database to UI
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Mini Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5 font-sans">
                  <div className="bg-surface/60 rounded-xl p-3 text-center">
                    <div className="text-primary text-xl font-bold">90%</div>
                    <div className="text-muted-foreground text-[11px]">
                      Automation
                    </div>
                  </div>
                  <div className="bg-surface/60 rounded-xl p-3 text-center">
                    <div className="text-primary text-xl font-bold">-65%</div>
                    <div className="text-muted-foreground text-[11px]">
                      Ops Cost
                    </div>
                  </div>
                  <div className="bg-surface/60 rounded-xl p-3 text-center">
                    <div className="text-primary text-xl font-bold">5+ Yrs</div>
                    <div className="text-muted-foreground text-[11px]">
                      Leadership
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
