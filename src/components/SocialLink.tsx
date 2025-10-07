import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  title: string;
  gradient: "primary" | "secondary" | "accent" | "orange";
  delay?: number;
  stats?: string;
  logo?: string;
}

const gradientClasses = {
  primary: "from-primary via-secondary to-primary hover:shadow-[0_0_40px_rgba(230,46,61,0.6)]",
  secondary: "from-secondary via-[hsl(18_100%_60%)] to-secondary hover:shadow-[0_0_40px_rgba(255,31,143,0.6)]",
  accent: "from-accent via-[hsl(270_100%_65%)] to-accent hover:shadow-[0_0_40px_rgba(95,205,255,0.6)]",
  orange: "from-[hsl(18_100%_60%)] via-primary to-[hsl(18_100%_60%)] hover:shadow-[0_0_40px_rgba(255,107,53,0.6)]",
};

export const SocialLink = ({ href, icon: Icon, title, gradient, delay = 0, stats, logo }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative w-full max-w-md",
        "animate-slide-up opacity-0",
        "hover:scale-105 transition-all duration-300"
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      <div className="relative overflow-hidden rounded-2xl p-[2px] bg-gradient-to-r transition-all duration-300">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm",
            gradientClasses[gradient]
          )}
        />
        <div className="relative bg-card rounded-2xl px-8 py-6 flex items-center gap-4 transition-all duration-300 group-hover:bg-card/80">
          <div className={cn(
            "rounded-xl bg-gradient-to-br transition-all duration-300 flex items-center justify-center overflow-hidden",
            logo && title !== "Discord" ? "p-0 w-12 h-12" : "p-3 w-12 h-12",
            gradientClasses[gradient],
            "group-hover:scale-110 group-hover:rotate-3"
          )}>
            {logo ? (
              <img 
                src={logo} 
                alt={title} 
                className={cn(
                  title === "Discord" ? "w-8 h-8 object-contain" : "w-full h-full object-cover"
                )}
              />
            ) : (
              <Icon className="w-6 h-6 text-white" />
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground group-hover:text-white transition-colors duration-300">
              {title}
            </span>
            {stats && (
              <span className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                {stats}
              </span>
            )}
          </div>
          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};
