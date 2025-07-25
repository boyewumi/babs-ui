# Colors

My color system is built around a distinctive purple primary with carefully balanced neutrals and semantic colors. Each color has 10 shades (50-900) to provide flexibility while maintaining consistency.

## Primary Purple

My signature purple creates a modern, professional brand identity. It's vibrant enough for CTAs but not overwhelming.

| Shade | Hex       | Usage                           | Notes                |
| ----- | --------- | ------------------------------- | -------------------- |
| 50    | `#ebeafd` | Light backgrounds, subtle tints | Almost white         |
| 100   | `#d8d6fa` | Hover states for light elements | Very light           |
| 200   | `#b0acf6` | Disabled states, placeholders   | Muted                |
| 300   | `#8983f1` | Secondary elements, borders     | Medium light         |
| 400   | `#6159ed` | Secondary buttons, accents      | Getting vibrant      |
| 500   | `#3a30e8` | **Primary brand color**         | Main CTA color       |
| 600   | `#2e26ba` | Hover states, pressed buttons   | Darker, more serious |
| 700   | `#231d8b` | Active states, dark themes      | Deep purple          |
| 800   | `#17135d` | Text on light backgrounds       | Very dark            |
| 900   | `#0c0a2e` | High contrast text, icons       | Nearly black         |

## Neutrals

My neutral palette provides the foundation for text, borders, and backgrounds. It's warm enough to feel friendly but cool enough to stay professional.

| Shade | Hex       | Usage                              | Notes               |
| ----- | --------- | ---------------------------------- | ------------------- |
| 50    | `#f0f1f2` | Page backgrounds, light surfaces   | Subtle off-white    |
| 100   | `#e1e3e6` | Card backgrounds, dividers         | Light gray          |
| 200   | `#c4c7cc` | Borders, inactive elements         | Medium light        |
| 300   | `#a6abb3` | Placeholders, disabled text        | True middle gray    |
| 400   | `#898f99` | Secondary text, subtle elements    | Getting darker      |
| 500   | `#6b7380` | **Body text on light backgrounds** | Primary text gray   |
| 600   | `#565c66` | Headings, important text           | Darker, more weight |
| 700   | `#40454d` | High emphasis text                 | Dark gray           |
| 800   | `#2b2e33` | Headlines, dark theme text         | Very dark           |
| 900   | `#15171a` | Maximum contrast text              | Nearly black        |

## Semantic Colors

These colors communicate meaning and status across the interface.

### Success (Green)

| Shade | Hex       | Usage                          | Notes            |
| ----- | --------- | ------------------------------ | ---------------- |
| 50    | `#e7f8f2` | Success message backgrounds    | Very light green |
| 100   | `#cff1e6` | Success banners, notifications | Light            |
| 200   | `#9fe3cd` | Success borders, accents       | Medium light     |
| 300   | `#70d5b3` | Success icons, secondary       | Getting vibrant  |
| 400   | `#40c79a` | Success hover states           | Bright           |
| 500   | `#10b981` | **Primary success color**      | Main success     |
| 600   | `#0d9467` | Success button hover           | Darker           |
| 700   | `#0a6f4d` | Success active states          | Deep green       |
| 800   | `#064a34` | Success text on light          | Very dark        |
| 900   | `#03251a` | High contrast success          | Nearly black     |

### Warning (Amber)

| Shade | Hex       | Usage                       | Notes            |
| ----- | --------- | --------------------------- | ---------------- |
| 50    | `#fef5e7` | Warning message backgrounds | Very light amber |
| 100   | `#fdecce` | Warning banners             | Light            |
| 200   | `#fbd89d` | Warning borders, accents    | Medium light     |
| 300   | `#f9c56d` | Warning icons, secondary    | Getting vibrant  |
| 400   | `#f7b13c` | Warning hover states        | Bright           |
| 500   | `#f59e0b` | **Primary warning color**   | Main warning     |
| 600   | `#c47e09` | Warning button hover        | Darker           |
| 700   | `#935f07` | Warning active states       | Deep amber       |
| 800   | `#623f04` | Warning text on light       | Very dark        |
| 900   | `#312002` | High contrast warning       | Nearly black     |

### Error (Red)

| Shade | Hex       | Usage                     | Notes           |
| ----- | --------- | ------------------------- | --------------- |
| 50    | `#fdecec` | Error message backgrounds | Very light red  |
| 100   | `#fcdada` | Error banners             | Light           |
| 200   | `#f9b4b4` | Error borders, accents    | Medium light    |
| 300   | `#f58f8f` | Error icons, secondary    | Getting vibrant |
| 400   | `#f26969` | Error hover states        | Bright          |
| 500   | `#ef4444` | **Primary error color**   | Main error      |
| 600   | `#bf3636` | Error button hover        | Darker          |
| 700   | `#8f2929` | Error active states       | Deep red        |
| 800   | `#601b1b` | Error text on light       | Very dark       |
| 900   | `#300e0e` | High contrast error       | Nearly black    |

### Info (Blue)

| Shade | Hex       | Usage                    | Notes           |
| ----- | --------- | ------------------------ | --------------- |
| 50    | `#ebf3fe` | Info message backgrounds | Very light blue |
| 100   | `#d8e6fd` | Info banners             | Light           |
| 200   | `#b1cdfb` | Info borders, accents    | Medium light    |
| 300   | `#89b4fa` | Info icons, secondary    | Getting vibrant |
| 400   | `#629bf8` | Info hover states        | Bright          |
| 500   | `#3b82f6` | **Primary info color**   | Main info       |
| 600   | `#2f68c5` | Info button hover        | Darker          |
| 700   | `#234e94` | Info active states       | Deep blue       |
| 800   | `#183462` | Info text on light       | Very dark       |
| 900   | `#0c1a31` | High contrast info       | Nearly black    |

## Usage Guidelines

### Color Hierarchy

**✅ DO:**

- Use primary-500 as your main brand color
- Use neutral-500 for body text, neutral-600 for headings
- Reserve semantic colors (success, warning, error, info) for their intended meanings
- Use lighter shades (50-200) for backgrounds and subtle elements
- Use darker shades (600-900) for text and high-contrast elements

**❌ DON'T:**

- Mix semantic meanings (don't use success green for non-success states)
- Use too many colors in a single interface
- Use pure black (#000) or pure white (#fff) - use neutral-900 and neutral-50 instead
- Use primary purple for destructive actions (use error red instead)

### Accessibility

**Contrast Requirements:**

- **Normal text (16px+):** Minimum 4.5:1 contrast ratio
- **Large text (18px+ or 14px+ bold):** Minimum 3:1 contrast ratio
- **UI elements:** Minimum 3:1 contrast ratio for interactive elements

**Safe Combinations:**

- Light backgrounds: Use shades 600+ for text
- Dark backgrounds: Use shades 400 and below for text
- Primary buttons: white text on primary-500 background
- Semantic states: Use appropriate semantic color with sufficient contrast

### Implementation Examples

```jsx
// Primary button
<button className="bg-primary-500 hover:bg-primary-600 text-white">
  Get Started
</button>

// Secondary button
<button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700">
  Learn More
</button>

// Success alert
<div className="bg-success-50 border border-success-200 text-success-800">
  <p>Your changes have been saved!</p>
</div>

// Text hierarchy
<h1 className="text-neutral-900 text-heading-2xl font-bold">Main Heading</h1>
<h2 className="text-neutral-800 text-heading-lg font-semibold">Section Title</h2>
<p className="text-neutral-600 text-body">Body text content goes here.</p>
<span className="text-neutral-500 text-label">Helper text</span>
```

## Color Psychology

**Primary Purple (#3a30e8):**

- Conveys creativity, innovation, and premium quality
- Associated with technology and forward-thinking brands
- Balances trust (blue undertones) with energy (red undertones)

**Neutral Gray System:**

- Warm undertones prevent the interface from feeling cold
- Provides excellent readability across all devices
- Works well with both light and dark themes

**Semantic Colors:**

- **Success Green:** Natural, positive, "go" association
- **Warning Amber:** Caution without alarm, draws attention
- **Error Red:** Clear danger signal, stops user action
- **Info Blue:** Trustworthy, informational, non-intrusive
