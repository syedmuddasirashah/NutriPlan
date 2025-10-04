import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
          <Sparkles className="h-4 w-4 text-white" />
          <span className="text-sm font-medium text-white">AI-Powered Nutrition Planning</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Put Your Nutrition on <span className="text-white/90">Autopilot</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Create personalized meal plans based on your goals, preferences, and dietary needs. 
          Powered by AI to make healthy eating effortless.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover-elevate active-elevate-2"
            data-testid="button-get-started"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/5 backdrop-blur-md border-white/30 text-white hover-elevate active-elevate-2"
            data-testid="button-how-it-works"
          >
            How It Works
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-white/80">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50K+</div>
            <div className="text-white/80">Meal Plans Created</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">4.8★</div>
            <div className="text-white/80">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
