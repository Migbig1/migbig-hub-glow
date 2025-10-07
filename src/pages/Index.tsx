import { Youtube, Music2, Video, MessageCircle } from "lucide-react";
import { SocialLink } from "@/components/SocialLink";
import profileImg from "@/assets/profile.png";
import bannerImg from "@/assets/banner.png";

const Index = () => {
  const socialLinks = [
    {
      href: "https://www.youtube.com/@MigbigBS",
      icon: Youtube,
      title: "YouTube",
      gradient: "primary" as const,
    },
    {
      href: "https://www.tiktok.com/@migbigbs",
      icon: Music2,
      title: "TikTok Principal",
      gradient: "secondary" as const,
    },
    {
      href: "https://www.tiktok.com/@migbigedit",
      icon: Video,
      title: "TikTok Edit",
      gradient: "accent" as const,
    },
    {
      href: "https://discord.gg/yHSyrMx2vV",
      icon: MessageCircle,
      title: "Discord",
      gradient: "orange" as const,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-bg">
      {/* Animated background banner */}
      <div
        className="absolute inset-0 opacity-10 animate-float"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(230,46,61,0.1),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_100%_0%,rgba(255,31,143,0.15),transparent_70%)]" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_0%_100%,rgba(95,205,255,0.1),transparent_70%)]" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center min-h-screen justify-center">
        {/* Profile section */}
        <div className="mb-12 flex flex-col items-center animate-scale-in">
          <div className="relative mb-6 group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-glow-pulse" />
            <img
              src={profileImg}
              alt="Profile"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/30 object-cover shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-center mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
            MigbigBS
          </h1>
          <p className="text-muted-foreground text-center text-lg animate-fade-in" style={{ animationDelay: "100ms" }}>
            Retrouve tous mes liens ici ! 🎮✨
          </p>
        </div>

        {/* Social links */}
        <div className="w-full max-w-md space-y-4 flex flex-col items-center">
          {socialLinks.map((link, index) => (
            <SocialLink
              key={link.href}
              {...link}
              delay={200 + index * 100}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "800ms" }}>
          <p className="text-sm text-muted-foreground">
            © 2025 MigbigBS • Tous droits réservés
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
