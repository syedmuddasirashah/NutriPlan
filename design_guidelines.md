# Design Guidelines: Multi-Tool Web Application

## Design Approach

**Minimal & Pastel Aesthetic** - Clean, modern interface with soft colors and gentle shadows

**Core Principles**:
1. Generous whitespace and breathing room
2. Pastel color palette for a calm, approachable feel
3. Soft shadows and rounded corners throughout
4. Clear visual hierarchy with tool icons
5. Mobile-first responsive design

---

## Color Palette

### Light Mode
- **Primary**: 200 95% 75% (soft blue)
- **Secondary**: 280 90% 85% (soft purple)
- **Accent**: 160 85% 75% (soft teal)
- **Success**: 145 80% 75% (soft green)
- **Warning**: 40 95% 75% (soft yellow)
- **Background**: 0 0% 98% (off-white)
- **Surface**: 0 0% 100% (pure white)
- **Text Primary**: 220 15% 25% (dark gray-blue)
- **Text Secondary**: 220 10% 50% (medium gray)

### Dark Mode
- **Primary**: 200 80% 65% (brighter soft blue)
- **Secondary**: 280 75% 75% (brighter soft purple)
- **Accent**: 160 70% 65% (brighter soft teal)
- **Success**: 145 70% 65% (brighter soft green)
- **Warning**: 40 85% 70% (brighter soft yellow)
- **Background**: 220 15% 12% (dark blue-gray)
- **Surface**: 220 15% 16% (elevated dark)
- **Text Primary**: 0 0% 95% (near white)
- **Text Secondary**: 220 10% 70% (light gray)

---

## Typography

**Font Families**: Inter (sans-serif)
- **Headings**: font-semibold to font-bold
- **Body**: font-normal to font-medium
- **Numbers/Data**: font-mono for consistency

**Scale**:
- Page Titles: text-3xl md:text-4xl
- Section Headings: text-xl md:text-2xl
- Card Titles: text-lg font-semibold
- Body: text-base
- Small/Meta: text-sm

---

## Layout System

**Spacing**: Consistent use of p-4, p-6, p-8, gap-4, gap-6
**Container**: max-w-7xl mx-auto px-4
**Cards**: Rounded (rounded-xl), soft shadows, padding p-6 to p-8

---

## Component Patterns

### Homepage Tool Cards
- Large clickable cards in grid layout
- Icon at top (4rem size)
- Tool name as title
- Subtle hover elevation
- Pastel background colors

### Tool Pages
- Centered layout (max-w-4xl)
- Form card at top for inputs
- Results card below
- Consistent spacing and rounding

### Forms
- Label above input
- Generous input padding
- Clear validation states
- Submit buttons prominent

### Results Display
- Grid layouts for structured data
- Clear visual separation
- Easy-to-scan information
- Action buttons (swap, regenerate)

---

## Interaction Design

- Soft hover states (subtle scale or shadow)
- Smooth transitions (200-300ms)
- Clear active/focus states
- Rounded buttons with padding

---

## Specific Tool Designs

### Meal Planner
- 3-column grid for meals (responsive)
- Each meal card shows emoji, name, calories
- Swap button per meal
- Summary stats at bottom

### Calorie Calculator
- Simple form inputs
- Large result display with clear number
- Explanation of calculation

### Workout Generator
- Weekly plan grid
- Exercise cards with sets/reps
- Day-by-day breakdown

### Travel Budget
- Cost breakdown table/cards
- Daily and total estimates
- Category-based display

### Trip Itinerary
- Timeline/day-by-day layout
- Activity cards with times
- Clear day headers
