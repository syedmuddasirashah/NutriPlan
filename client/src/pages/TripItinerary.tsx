import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ToolsNav } from "@/components/ToolsNav";
import { ArrowLeft, Clock } from "lucide-react";
import Footer from "@/components/Footer";

// --- AdBox Component (Standardized for Reusability) ---
const AdBox = ({ height = "h-24", text = "Ad Placeholder" }) => (
  <div
    className={`w-full ${height} bg-gray-200 dark:bg-gray-700 flex items-center justify-center border border-dashed border-gray-400 text-gray-600 rounded-md my-6`}
  >
    {text}
  </div>
);

interface Activity {
  time: string;
  name: string;
  description: string;
}

interface DayItinerary {
  day: number;
  activities: Activity[];
}

export default function TripItinerary() {
  const [formData, setFormData] = useState({
    destination: "",
    days: "",
    interests: "",
  });
  const [itinerary, setItinerary] = useState<DayItinerary[] | null>(null);

  const generateItinerary = () => {
    const numDays = parseInt(formData.days) || 3;

    const activityTemplates: Record<string, Activity[]> = {
      culture: [
        { time: "9:00 AM", name: "Museum Visit", description: "Explore local history and art" },
        { time: "12:00 PM", name: "Traditional Lunch", description: "Try authentic local cuisine" },
        { time: "2:00 PM", name: "Historical Sites Tour", description: "Visit landmarks and monuments" },
        { time: "5:00 PM", name: "Cultural Show", description: "Watch traditional performance" },
        { time: "7:00 PM", name: "Dinner at Local Restaurant", description: "Experience regional specialties" },
      ],
      adventure: [
        { time: "7:00 AM", name: "Morning Hike", description: "Trek to scenic viewpoint" },
        { time: "10:00 AM", name: "Adventure Activity", description: "Zip-lining or rock climbing" },
        { time: "1:00 PM", name: "Lunch Break", description: "Refuel with hearty meal" },
        { time: "3:00 PM", name: "Water Sports", description: "Kayaking or snorkeling" },
        { time: "6:00 PM", name: "Sunset Viewing", description: "Watch sunset from peak" },
      ],
      relaxation: [
        { time: "9:00 AM", name: "Spa Treatment", description: "Massage and wellness session" },
        { time: "11:00 AM", name: "Beach Time", description: "Relax by the water" },
        { time: "1:00 PM", name: "Leisurely Lunch", description: "Casual beachside dining" },
        { time: "3:00 PM", name: "Pool Lounge", description: "Swim and sunbathe" },
        { time: "6:00 PM", name: "Sunset Cocktails", description: "Drinks with a view" },
      ],
    };

    const selectedActivities = activityTemplates[formData.interests] || activityTemplates["culture"];
    const plan: DayItinerary[] = [];

    for (let i = 0; i < numDays; i++) {
      plan.push({
        day: i + 1,
        activities: selectedActivities.map(activity => ({ ...activity })),
      });
    }

    setItinerary(plan);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER (Standard) */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" data-testid="button-back">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-lg md:text-2xl font-bold">🗺️ Trip Itinerary</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <ToolsNav />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* MAIN 3-COLUMN STRUCTURE (Standard) */}
      <main className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
        
        {/* Left Sidebar Ad - Ad #1 (Standard) */}
        <div className="hidden lg:block w-64">
          <AdBox text="Sidebar Ad" height="h-80" />
        </div>

        {/* Main Content Column (Standard) */}
        <div className="flex-1 space-y-8">
          
          {/* TOP BANNER AD - Ad #2 (Standard) */}
          <AdBox text="Top Banner Ad" height="h-20" />

          {/* Trip Itinerary Form (Full Width in flex-1 column) */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Plan Your Trip Itinerary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <Input
                    id="destination"
                    type="text"
                    placeholder="e.g., Paris, Tokyo, New York"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="days">Number of Days</Label>
                  <Input
                    id="days"
                    type="number"
                    placeholder="3"
                    value={formData.days}
                    onChange={(e) => setFormData({ ...formData, days: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">Travel Interests</Label>
                  <Select
                    value={formData.interests}
                    onValueChange={(value) => setFormData({ ...formData, interests: value })}
                  >
                    <SelectTrigger id="interests">
                      <SelectValue placeholder="Select your interests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="culture">Culture & History</SelectItem>
                      <SelectItem value="adventure">Adventure & Outdoors</SelectItem>
                      <SelectItem value="relaxation">Relaxation & Wellness</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full" onClick={generateItinerary}>
                Generate Itinerary
              </Button>
            </CardContent>
          </Card>

          {/* Results (appear after Generate) - No change needed here, already full width */}
          {itinerary && (
            <div className="space-y-6">
              {itinerary.map((day) => (
                <Card key={day.day}>
                  <CardHeader className="bg-primary/10">
                    <CardTitle>Day {day.day} - {formData.destination}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {day.activities.map((activity, index) => (
                        <div key={index} className="flex gap-4 pb-4 border-b last:border-0">
                          <div className="flex-shrink-0 w-24">
                            <div className="flex items-center gap-2 text-sm font-medium text-primary">
                              <Clock className="h-4 w-4" />
                              {activity.time}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{activity.name}</h4>
                            <p className="text-sm text-muted-foreground">{activity.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Tips (part of results, styled differently) - No change needed */}
            <Card className="bg-accent/10">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">🧳 Travel Tips</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Check opening hours before visiting attractions</li>
                  <li>• Book popular activities in advance</li>
                  <li>• Allow flexibility for spontaneous discoveries</li>
                  <li>• Keep a backup plan for bad weather days</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {/* SEO / Informational Content Card (Standard) */}
        <Card className="p-6 bg-card rounded-lg border mt-6">
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-bold">Trip Itinerary Planning Guide</h2>
            <p>
              Planning your trip? Our Trip Itinerary Planner helps you design a perfect daily schedule based on your destination, interests, and travel length.
            </p>
            <h3 className="text-xl font-semibold">Tips for a Smooth Trip</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Research local attractions and opening hours</li>
              <li>Mix cultural, adventure, and relaxation activities</li>
              <li>Leave room for spontaneous experiences</li>
              <li>Keep travel time and transportation in mind</li>
            </ul>
            <p>
              For more ideas and expert advice, visit our <Link href="/blog/travel-itinerary-tips">Travel Itinerary Tips Blog</Link>.
            </p>
          </CardContent>
        </Card>
        </div>

        {/* Right Sidebar Ad - Ad #3 (Standard) */}
        <div className="hidden lg:block w-64">
          <AdBox text="Sidebar Ad" height="h-80" />
        </div>
      </main>

      {/* Global Footer (Moved outside main) */}
      <Footer />
    </div>
  );
}