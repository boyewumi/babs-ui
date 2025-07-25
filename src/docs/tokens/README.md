# Design Tokens

My personal design system tokens. These keep my UI library consistent and make theming easier.

## Quick Reference

- **[Colors](./colors.md)** - Primary purple, neutrals, semantic colors
- **[Typography](./typography.md)** - Inter-based type scale, 4 hierarchy levels
- **[Borders](./borders.md)** - Border radius + shadow system

## Philosophy

I've built these tokens based on research from 44+ design systems, but tailored them to my personal preferences. The goal is having enough variety to build great components without overwhelming myself with choices.

**Core principles:**

- **Purple primary** - My signature color that makes interfaces feel branded
- **Inter typography** - Clean, readable, and free
- **4-level hierarchy** - Display, Heading, Body, Label covers 95% of needs
- **Practical shadows** - Subtle depth without being distracting

## Getting Started

**Phase 1 (Essential):** Colors + Typography + Borders  
**Phase 2 (Later):** Custom spacing if Tailwind's defaults aren't enough

Start with colors and typography - those are what make your UI unique. Use Tailwind's default spacing unless you need something custom.

## Implementation

All tokens work with Tailwind CSS. Import the theme config and start building:

```jsx
// Basic button with my tokens
<button className="bg-primary-500 hover:bg-primary-600 rounded px-4 py-2 text-white shadow-sm">
  Click me
</button>
```
