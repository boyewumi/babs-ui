# Borders & Shadows

My border and shadow system creates depth and hierarchy without being too heavy or distracting. I keep the tokens simple but effective.

## Border Radius

I keep my radius tokens simple but effective - enough variety for different component needs without decision paralysis.

| Token          | Value  | Usage                            | Notes                                     |
| -------------- | ------ | -------------------------------- | ----------------------------------------- |
| `rounded-xs`   | 2px    | Small badges, tiny elements      | Very subtle                               |
| `rounded-sm`   | 4px    | Buttons, small cards             | My most common choice                     |
| `rounded`      | 6px    | **Default for most components**  | Good balance for everything               |
| `rounded-md`   | 8px    | Cards, modals, larger elements   | When I want more softness                 |
| `rounded-lg`   | 12px   | Large cards, containers          | Prominent roundedness                     |
| `rounded-xl`   | 16px   | Hero sections, major containers  | Quite round, use intentionally            |
| `rounded-2xl`  | 24px   | Very large containers            | Maximum roundedness before it looks weird |
| `rounded-full` | 9999px | Pills, circular buttons, avatars | Perfect circles                           |

## Shadows

My shadow system creates depth and hierarchy without being too heavy or distracting.

### Basic Shadows

| Token       | Value                          | Usage                          | Notes             |
| ----------- | ------------------------------ | ------------------------------ | ----------------- |
| `shadow-xs` | `0 1px 2px rgba(0,0,0,0.05)`   | Subtle hover states            | Barely noticeable |
| `shadow-sm` | `0 1px 3px rgba(0,0,0,0.1)`    | Cards, dropdowns               | My default choice |
| `shadow`    | `0 4px 6px rgba(0,0,0,0.1)`    | Buttons, important cards       | Good presence     |
| `shadow-md` | `0 10px 15px rgba(0,0,0,0.1)`  | Modals, popovers               | Floating elements |
| `shadow-lg` | `0 20px 25px rgba(0,0,0,0.1)`  | Major overlays                 | Serious elevation |
| `shadow-xl` | `0 25px 50px rgba(0,0,0,0.25)` | Hero elements, main navigation | Maximum impact    |

### Special Shadows

| Token               | Value                              | Usage                         | Notes              |
| ------------------- | ---------------------------------- | ----------------------------- | ------------------ |
| `shadow-primary-sm` | `0 4px 6px rgba(58,48,232,0.1)`    | Primary button hover          | Branded shadow     |
| `shadow-primary`    | `0 10px 15px rgba(58,48,232,0.1)`  | Focused primary elements      | Purple glow effect |
| `shadow-inner`      | `inset 0 2px 4px rgba(0,0,0,0.05)` | Input fields, pressed buttons | Inset feeling      |
| `shadow-none`       | `0 0 transparent`                  | Remove shadows                | Clean, flat look   |

## Usage Guidelines

### Border Radius Guidelines

**✅ DO:**

- Use `rounded` (6px) as my default radius
- Be consistent with radius choices per component type
- Use `rounded-full` for pills and avatars
- Use smaller radius (xs/sm) for compact elements

**❌ DON'T:**

- Mix radius sizes randomly within the same component
- Use huge radius values (xl/2xl) on small elements
- Apply radius to elements that should feel "sharp" (like alerts or code blocks)

### Shadow Guidelines

**✅ DO:**

- Keep shadows subtle - `shadow-sm` works for most cards
- Use primary shadows sparingly for special focus
- Layer shadows appropriately (modals above cards above buttons)
- Use `shadow-inner` for pressed/active states

**❌ DON'T:**

- Use huge shadows everywhere (shadow-xl should be rare)
- Use inner shadows on elements that should feel "raised"
- Mix multiple shadow colors in the same interface
- Apply shadows to flat design elements unnecessarily

## Component Examples

### Card Variations

```jsx
// Basic card
<div className="bg-white border border-neutral-200 shadow-sm rounded-md p-6">
  <h3 className="text-heading-lg font-semibold text-neutral-900 mb-2">Basic Card</h3>
  <p className="text-body text-neutral-600">Standard card with subtle shadow...</p>
</div>

// Elevated card
<div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
  <h3 className="text-heading-xl font-bold text-neutral-900 mb-3">Elevated Card</h3>
  <p className="text-body-md text-neutral-700">More prominent with hover effect...</p>
</div>

// Hero card
<div className="bg-white shadow-xl rounded-2xl p-8">
  <h3 className="text-heading-3xl font-bold text-neutral-900 mb-4">Hero Card</h3>
  <p className="text-body-lg text-neutral-700">Maximum impact for landing pages...</p>
</div>
```

### Button Variations

```jsx
// Standard button
<button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-sm shadow-sm hover:shadow transition-all">
  Standard Button
</button>

// Primary focus button
<button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md shadow-primary-sm hover:shadow-primary transition-all">
  Important CTA
</button>

// Pressed/active state
<button className="bg-primary-600 text-white px-4 py-2 rounded-sm shadow-inner">
  Active Button
</button>

// Pill button
<button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-6 py-2 rounded-full shadow-xs hover:shadow-sm transition-all">
  Pill Button
</button>
```

### Modal & Overlay Components

```jsx
// Modal backdrop
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
  {/* Modal content */}
  <div className="bg-white shadow-xl rounded-lg max-w-md w-full mx-4 p-6">
    <h2 className="text-heading-2xl font-bold text-neutral-900 mb-4">Modal Title</h2>
    <p className="text-body text-neutral-700 mb-6">Modal content goes here...</p>
    <div className="flex gap-3">
      <button className="bg-primary-500 text-white px-4 py-2 rounded shadow-sm">
        Confirm
      </button>
      <button className="bg-neutral-200 text-neutral-700 px-4 py-2 rounded shadow-xs">
        Cancel
      </button>
    </div>
  </div>
</div>

// Dropdown menu
<div className="absolute top-full left-0 mt-1 bg-white border border-neutral-200 shadow-md rounded-md py-1 min-w-48">
  <a href="#" className="block px-4 py-2 text-body text-neutral-700 hover:bg-neutral-50">
    Menu Item 1
  </a>
  <a href="#" className="block px-4 py-2 text-body text-neutral-700 hover:bg-neutral-50">
    Menu Item 2
  </a>
</div>
```

### Form Elements

```jsx
// Input fields
<div className="space-y-4">
  {/* Default input */}
  <input
    type="text"
    className="focus:border-primary-500 focus:shadow-primary-sm w-full rounded border border-neutral-300 px-3 py-2 shadow-inner transition-all"
    placeholder="Default input"
  />

  {/* Focused/active input */}
  <input
    type="text"
    className="border-primary-500 shadow-primary-sm w-full rounded border-2 px-3 py-2"
    placeholder="Focused input"
  />

  {/* Error input */}
  <input
    type="text"
    className="border-error-500 bg-error-50 w-full rounded border px-3 py-2 shadow-inner"
    placeholder="Error input"
  />
</div>
```

### Navigation Components

```jsx
// Top navigation
<nav className="bg-white border-b border-neutral-200 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex items-center">
        <h1 className="text-heading-lg font-bold text-neutral-900">My App</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-body text-neutral-600 hover:text-neutral-900">
          Menu
        </button>
      </div>
    </div>
  </div>
</nav>

// Sidebar navigation
<aside className="w-64 bg-white border-r border-neutral-200 shadow-sm">
  <nav className="p-4">
    <a href="#" className="block px-3 py-2 rounded text-body font-medium text-primary-600 bg-primary-50">
      Active Item
    </a>
    <a href="#" className="block px-3 py-2 rounded text-body text-neutral-700 hover:bg-neutral-50">
      Menu Item
    </a>
  </nav>
</aside>
```

## Elevation Hierarchy

I use shadows to create a clear elevation hierarchy:

1. **Page background** - `shadow-none` (0 elevation)
2. **Cards/panels** - `shadow-sm` (1 elevation)
3. **Buttons/interactive** - `shadow` (2 elevation)
4. **Dropdowns/tooltips** - `shadow-md` (3 elevation)
5. **Modals/drawers** - `shadow-lg` (4 elevation)
6. **Major overlays** - `shadow-xl` (5 elevation)

This creates a natural layering system where each level feels appropriately "above" the previous one.
