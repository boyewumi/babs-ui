# Design Tokens

This document defines the design tokens for my personal UI library. These tokens help me maintain consistency across components and make future theming easier.

## Colors

### Primary (Indigo)

My primary color palette for interactive elements, branding, and key user actions.

| Token         | Value     | Usage                                            | Notes                               |
| ------------- | --------- | ------------------------------------------------ | ----------------------------------- |
| `primary-50`  | `#ebeafd` | Subtle backgrounds, light badges                 | Very light, use sparingly           |
| `primary-100` | `#d8d6fa` | Card backgrounds, input backgrounds              | Good for large areas                |
| `primary-200` | `#b0acf6` | Borders, dividers when branded                   | Subtle but visible                  |
| `primary-300` | `#8983f1` | Disabled button backgrounds                      | Still accessible on white           |
| `primary-400` | `#6159ed` | Secondary buttons, less important CTAs           | Good contrast with white text       |
| `primary-500` | `#3a30e8` | **My main brand color** - primary buttons, links | The core brand color for my library |
| `primary-600` | `#2e26ba` | Button hover states, pressed links               | Darker for interaction feedback     |
| `primary-700` | `#231d8b` | Button pressed states, dark themes               | Strong contrast                     |
| `primary-800` | `#17135d` | High contrast elements                           | Very dark, use for emphasis         |
| `primary-900` | `#0c0a2e` | Text on light backgrounds                        | Maximum contrast                    |

### Neutral (Gray)

My neutral palette provides the foundation for text, backgrounds, and structural elements.

| Token         | Value     | Usage                            | Notes                     |
| ------------- | --------- | -------------------------------- | ------------------------- |
| `neutral-50`  | `#f0f1f2` | Page backgrounds, card surfaces  | Clean, minimal background |
| `neutral-100` | `#e1e3e6` | Input backgrounds, hover states  | Light but noticeable      |
| `neutral-200` | `#c4c7cc` | Borders, dividers, separators    | Clear definition          |
| `neutral-300` | `#a6abb3` | Input borders, inactive elements | Good for form elements    |
| `neutral-400` | `#898f99` | Placeholder text, disabled text  | Use for large text only   |
| `neutral-500` | `#6b7380` | Secondary text, captions         | Balanced mid-tone         |
| `neutral-600` | `#565c66` | Primary text in light themes     | Good readability          |
| `neutral-700` | `#40454d` | Headings, emphasis text          | Strong contrast           |
| `neutral-800` | `#2b2e33` | High contrast text               | Very readable             |
| `neutral-900` | `#15171a` | Maximum contrast text            | Use for important content |

## Usage Guidelines

### Primary Color Usage

**✅ DO:**

- Use `primary-500` for main CTAs and primary actions
- Use `primary-600` for hover states of primary buttons
- Use `primary-100-200` for subtle branded backgrounds
- Use `primary-700+` for text on light backgrounds

**❌ DON'T:**

- Use primary colors for large background areas (except very light shades)
- Mix primary shades randomly - stick to 2-3 shades per component
- Use `primary-50-300` for small text (may not meet contrast requirements)

### Neutral Color Usage

**✅ DO:**

- Use `neutral-600-900` for text content
- Use `neutral-50-200` for backgrounds and surfaces
- Use `neutral-200-400` for borders and dividers
- Maintain consistent text hierarchy (900 for headings, 700 for body, 500 for secondary)

**❌ DON'T:**

- Use neutral colors for interactive elements (use primary instead)
- Skip too many steps in the scale (neutral-100 to neutral-600)
- Use `neutral-400` for small text (may not meet accessibility standards)

## Implementation

### React Components with Tailwind

```jsx
// Primary button
<button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md">
  Click me
</button>

// Body text
<p className="text-neutral-700 leading-relaxed">
  This is body text with good readability
</p>

// Card with subtle background
<div className="bg-neutral-50 border border-neutral-200 p-6 rounded-lg">
  Card content
</div>
```

### Button Component Examples

**Basic button variants:**

```jsx
// Primary button
<button className="bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
  Primary Action
</button>

// Secondary button
<button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-4 py-2 rounded-md font-medium transition-colors">
  Secondary Action
</button>

// Outline button
<button className="border border-primary-500 text-primary-500 hover:bg-primary-50 px-4 py-2 rounded-md font-medium transition-colors">
  Outline Button
</button>

// Subtle button
<button className="text-primary-600 hover:bg-primary-50 px-4 py-2 rounded-md font-medium transition-colors">
  Text Button
</button>
```
