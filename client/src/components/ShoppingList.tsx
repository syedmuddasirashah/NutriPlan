import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Download } from "lucide-react";

interface ShoppingItem {
  id: string;
  name: string;
  category: string;
  checked: boolean;
}

const initialItems: ShoppingItem[] = [
  { id: "1", name: "Chicken Breast", category: "Proteins", checked: false },
  { id: "2", name: "Salmon Fillet", category: "Proteins", checked: false },
  { id: "3", name: "Spinach", category: "Produce", checked: false },
  { id: "4", name: "Broccoli", category: "Produce", checked: false },
  { id: "5", name: "Sweet Potato", category: "Produce", checked: false },
  { id: "6", name: "Greek Yogurt", category: "Dairy", checked: false },
  { id: "7", name: "Almonds", category: "Pantry", checked: false },
  { id: "8", name: "Quinoa", category: "Pantry", checked: false },
];

export function ShoppingList() {
  const [items, setItems] = useState(initialItems);

  const toggleItem = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const categories = Array.from(new Set(items.map(item => item.category)));

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            <CardTitle>Shopping List</CardTitle>
          </div>
          <Button variant="outline" size="sm" data-testid="button-export-list">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {categories.map(category => (
            <div key={category}>
              <h3 className="font-semibold mb-3 text-sm text-muted-foreground sticky top-0 bg-card py-2">
                {category}
              </h3>
              <div className="space-y-2">
                {items
                  .filter(item => item.category === category)
                  .map(item => (
                    <div key={item.id} className="flex items-center gap-3">
                      <Checkbox
                        id={item.id}
                        checked={item.checked}
                        onCheckedChange={() => toggleItem(item.id)}
                        data-testid={`checkbox-item-${item.id}`}
                      />
                      <label
                        htmlFor={item.id}
                        className={`flex-1 text-sm cursor-pointer ${
                          item.checked ? 'line-through text-muted-foreground' : ''
                        }`}
                      >
                        {item.name}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
