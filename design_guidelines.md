# Design Guidelines: Enhanced Meal Planning & Nutrition Tool

## Design Approach

**Reference-Based Approach** drawing from:
- **Primary**: EatThisMuch.com's clean, approachable interface
- **Secondary**: MyFitnessPal (data visualization), Noom (motivational design), Apple Health (wellness aesthetics)

**Core Principles**:
1. Clean, uncluttered layouts that reduce decision fatigue
2. Motivational visual design that encourages healthy habits
3. Data-rich yet scannable nutritional information
4. Progressive disclosure of complexity (simple start, detailed options available)

---

## Color Palette

### Light Mode
- **Primary Brand**: 147 65% 55% (teal-blue, health/wellness association)
- **Success/Progress**: 142 70% 45% (vibrant green for goals achieved)
- **Background**: 0 0% 98% (soft off-white)
- **Surface**: 0 0% 100% (pure white cards)
- **Text Primary**: 220 20% 20% (dark blue-gray)
- **Text Secondary**: 220 15% 50% (medium gray)

### Dark Mode
- **Primary Brand**: 147 65% 60% (slightly brighter teal)
- **Success/Progress**: 142 65% 50% (adjusted green)
- **Background**: 220 20% 10% (deep blue-black)
- **Surface**: 220 18% 15% (elevated dark cards)
- **Text Primary**: 0 0% 95% (near white)
- **Text Secondary**: 220 10% 65% (light gray)

**Accent Colors** (use sparingly):
- **Warning/Calorie Alert**: 25 85% 55% (warm orange)
- **Highlight**: 45 90% 60% (energy yellow, for CTAs only)

---

## Typography

**Font Families** (Google Fonts):
- **Headings**: 'Inter', sans-serif (weights: 600, 700)
- **Body**: 'Inter', sans-serif (weights: 400, 500)
- **Nutritional Data**: 'JetBrains Mono', monospace (weight: 500) - for macros/calories

**Scale**:
- Hero Headline: text-5xl md:text-6xl font-bold
- Section Headings: text-3xl md:text-4xl font-semibold
- Card Titles: text-xl font-semibold
- Body Text: text-base leading-relaxed
- Small/Meta: text-sm
- Nutritional Numbers: text-lg font-medium (monospace)

---

## Layout System

**Spacing Primitives**: Use Tailwind units of **2, 4, 8, 12, 16** for consistency
- Component padding: p-4 md:p-8
- Section spacing: py-12 md:py-16 lg:py-20
- Card gaps: gap-4 md:gap-6
- Element margins: mb-2, mb-4, mb-8

**Container Strategy**:
- Full-width sections: w-full with inner max-w-7xl mx-auto px-4
- Content sections: max-w-6xl mx-auto
- Forms/Calculators: max-w-4xl mx-auto
- Dashboard cards: max-w-7xl grid layouts

---

## Component Library

### Navigation
- Fixed top navbar with logo, main nav links, user profile/avatar
- Transparent on hero, solid bg-white/bg-surface on scroll
- Mobile: Hamburger menu with slide-out drawer

### Hero Section
- **Large Hero Image**: YES - Vibrant, appetizing healthy food photography (colorful salads, meal prep bowls, fresh ingredients)
- Image placement: Full-width background with gradient overlay (from primary color with 40% opacity to transparent)
- Height: min-h-[600px] md:min-h-[700px]
- Content: Centered white text, large headline, subheading, prominent CTA button
- CTA: Large rounded button with backdrop-blur-md bg-white/10 border border-white/20 text-white

### Calculator/Input Forms
- Multi-step wizard interface with progress indicator (step 1/4, 2/4, etc.)
- Large, touch-friendly input cards with icons
- Range sliders for macros (Protein, Carbs, Fats) with live preview
- Diet type selection: Grid of cards with icons, selected state with border-2 border-primary
- Input fields: Rounded, generous padding (p-4), focus:ring-2 ring-primary

### Meal Plan Display
- Weekly calendar grid: 7 columns (days) × 4 rows (breakfast, lunch, dinner, snacks)
- Each meal card: Image thumbnail, dish name, macro summary, swap icon
- Card style: rounded-xl shadow-sm hover:shadow-md transition-shadow
- Macro pills: Small rounded-full badges showing P/C/F values

### Nutritional Dashboard
- Circular progress charts for daily calorie/macro targets
- Color-coded rings: Protein (blue), Carbs (green), Fats (orange)
- Weekly weight trend line chart with smooth curves
- Stat cards: Grid layout showing "Calories Consumed", "Days Streak", "Goal Progress"

### Shopping List
- Organized by category sections (Produce, Proteins, Dairy, Pantry)
- Checkbox items with strikethrough on check
- Sticky category headers on scroll
- "Add to Instacart" integration button at bottom

### Recipe Cards
- Large food image at top (aspect-ratio-16/9)
- Title, prep time, difficulty level, serving size
- Expandable sections: Ingredients list, Instructions, Nutritional info
- "Save to Favorites" heart icon, "Swap Recipe" refresh icon

### Progress Tracking
- Before/After photo upload slots (dashed border placeholders)
- Measurement input table: Weight, Waist, Arms, etc.
- Timeline view of milestone achievements with date stamps
- Motivational copy: "You've logged 30 days!" with celebration graphics

### Data Visualization
- Use Chart.js or similar for line/bar charts
- Consistent color mapping: Primary for main metric, success for goals
- Animated reveals on scroll (subtle fade-up)
- Tooltips on hover with detailed breakdown

---

## Images

**Required Images**:
1. **Hero Section**: High-quality food photography - vibrant Buddha bowl or meal prep containers with colorful vegetables, grains, proteins. Professional, well-lit, appetizing. Overlay with gradient for text readability.

2. **Feature Sections**: 
   - Meal planning calendar mockup (screenshot/illustration)
   - Mobile app interface showing meal suggestions
   - Shopping cart with fresh produce
   - Progress tracking dashboard visualization

3. **Recipe/Meal Cards**: Placeholder for dynamically loaded meal images (use placeholder.com initially with food categories)

4. **Testimonials**: User avatar circles (can use initials or placeholder avatars)

5. **Optional Icons**: Use Heroicons CDN for UI elements (calculator, heart, shopping-cart, chart-bar, etc.)

---

## Animations

**Minimal & Purposeful**:
- Hero CTA: Gentle scale on hover (hover:scale-105)
- Cards: hover:shadow-lg transition-shadow duration-200
- Progress charts: Animate fill on scroll into view (one-time, smooth)
- Page transitions: Subtle fade (200ms)
- **Avoid**: Continuous animations, parallax, complex scroll effects

---

## Accessibility & Dark Mode

- Maintain WCAG AA contrast ratios (4.5:1 for text)
- All form inputs styled consistently in both modes
- Focus indicators: ring-2 ring-primary ring-offset-2
- Dark mode toggle in navigation (moon/sun icon)
- Consistent surface elevation in dark mode (subtle borders, not just shadows)

---

## Page-Specific Guidelines

### Landing Page (5-7 sections):
1. **Hero**: Large food image, headline "Put Your Nutrition on Autopilot", CTA
2. **Calculator Preview**: Embedded mini-calculator to generate sample meal plan
3. **Features Grid**: 3-column layout (Personalized Plans, AI Recommendations, Progress Tracking) with icons
4. **How It Works**: 4-step process with numbered badges and illustrations
5. **Testimonials**: 2-column testimonial cards with before/after stats
6. **Pricing/CTA**: Centered call-to-action with feature comparison
7. **Footer**: Newsletter signup, quick links, social proof badges

### Dashboard (App Interface):
- Sidebar navigation (desktop) / Bottom nav (mobile)
- Today's meal overview at top
- Quick stats cards in grid (Calories, Macros, Streak)
- Upcoming meals section
- Recent activity feed

---

**Design Mandate**: Create a polished, feature-complete interface that balances motivational wellness aesthetics with data-rich functionality. Every section should feel purposeful and complete—no sparse layouts. Use the teal-green health palette to evoke freshness and vitality while maintaining professional credibility.