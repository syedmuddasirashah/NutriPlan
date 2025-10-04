import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, RefreshCw, Heart } from "lucide-react";
import { useState } from "react";

interface MealCardProps {
  name: string;
  mealType: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  prepTime: number;
  imageUrl?: string;
}

export function MealCard({ 
  name, 
  mealType, 
  calories, 
  protein, 
  carbs, 
  fats, 
  prepTime,
  imageUrl 
}: MealCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-200">
      <div className="aspect-video w-full bg-gradient-to-br from-primary/20 to-primary/5 relative">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl">🥗</span>
          </div>
        )}
        <Badge className="absolute top-2 left-2" variant="secondary">
          {mealType}
        </Badge>
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg line-clamp-1" data-testid={`text-meal-name`}>{name}</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsFavorite(!isFavorite)}
            className="shrink-0 -mt-1 -mr-2"
            data-testid="button-favorite"
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-destructive text-destructive' : ''}`} />
          </Button>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Clock className="h-3 w-3" />
          <span>{prepTime} min</span>
          <span className="mx-1">•</span>
          <span className="font-mono font-medium text-foreground">{calories} cal</span>
        </div>
        
        <div className="flex gap-2 mb-3">
          <Badge variant="outline" className="text-xs">
            P: {protein}g
          </Badge>
          <Badge variant="outline" className="text-xs">
            C: {carbs}g
          </Badge>
          <Badge variant="outline" className="text-xs">
            F: {fats}g
          </Badge>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full"
          onClick={() => console.log("Swapping meal:", name)}
          data-testid="button-swap-meal"
        >
          <RefreshCw className="mr-2 h-3 w-3" />
          Swap Recipe
        </Button>
      </CardContent>
    </Card>
  );
}
