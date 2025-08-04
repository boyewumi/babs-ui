# Typography

My typography system is based on Inter and research from 44+ design systems. I've organized it into 4 levels that handle most UI needs without overwhelming choices.

## Font Families

- **Sans**: `Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif` - My main UI font
- **Display**: `Inter, system-ui, sans-serif` - Same font, just cleaner fallbacks for hero text

**Why Inter?** It's free, designed specifically for screens, has excellent readability, and is used by 15.9% of top design systems. Plus it performs well when loaded from Google Fonts or self-hosted.

## Font Sizes

Based on the Major Second type scale ratio (1.125) used by 75% of design systems. I've organized everything into 4 hierarchical levels:

### Label Level

Small supporting text that helps users understand interfaces.

| Token           | Size | Line Height | Letter Spacing | Usage                                            | Notes                                    |
| --------------- | ---- | ----------- | -------------- | ------------------------------------------------ | ---------------------------------------- |
| `text-label-sm` | 10px | 14px        | 0.01em         | Tiny labels, badges                              | Minimum readable size                    |
| `text-label`    | 12px | 17px        | 0.01em         | **Standard labels** - form labels, small UI text | My most common label size                |
| `text-label-md` | 13px | 18px        | 0.005em        | Slightly larger labels                           | When 12px feels too small                |
| `text-label-lg` | 14px | 20px        | 0.005em        | Large labels, button text                        | Overlap with body, but different purpose |

### Body Level

The readable text that makes up most of my content.

| Token          | Size | Line Height | Letter Spacing | Usage                         | Notes                              |
| -------------- | ---- | ----------- | -------------- | ----------------------------- | ---------------------------------- |
| `text-body-sm` | 12px | 18px        | 0              | Fine print, captions          | Use sparingly, can be hard to read |
| `text-body-xs` | 13px | 19px        | 0              | Small text, metadata          | Slightly more readable than sm     |
| `text-body`    | 14px | 21px        | 0              | **My default body text**      | Perfect for most UI content        |
| `text-body-md` | 16px | 24px        | 0              | Comfortable reading, articles | When readability is priority       |
| `text-body-lg` | 18px | 27px        | 0              | Large body text, intros       | Good for marketing copy            |

### Heading Level

My workhorse headings for content hierarchy and UI sections.

| Token              | Size | Line Height | Letter Spacing | Usage                       | Notes                              |
| ------------------ | ---- | ----------- | -------------- | --------------------------- | ---------------------------------- |
| `text-heading-xs`  | 14px | 18px        | -0.01em        | Small section labels        | Tiny but still readable            |
| `text-heading-sm`  | 16px | 21px        | -0.01em        | Card titles, small headings | Very common in components          |
| `text-heading-md`  | 20px | 26px        | -0.01em        | Section headings, H4-H5     | My go-to for most content          |
| `text-heading-lg`  | 24px | 32px        | -0.015em       | Page titles, H3             | Good presence without being huge   |
| `text-heading-xl`  | 28px | 36px        | -0.015em       | Major section titles, H2    | Strong hierarchy                   |
| `text-heading-2xl` | 32px | 42px        | -0.02em        | Page headings, H1           | Clear page structure               |
| `text-heading-3xl` | 40px | 52px        | -0.02em        | Large page titles           | When I need more impact than H1    |
| `text-heading-4xl` | 48px | 60px        | -0.025em       | Hero headings in content    | Bridge between heading and display |

### Display Level

For hero sections and marketing pages where I need maximum impact.

| Token              | Size | Line Height | Letter Spacing | Usage                 | Notes                              |
| ------------------ | ---- | ----------- | -------------- | --------------------- | ---------------------------------- |
| `text-display-sm`  | 36px | 44px        | -0.025em       | Small hero headings   | Good for cards or sections         |
| `text-display-md`  | 42px | 50px        | -0.025em       | Medium hero text      | Sweet spot for most heroes         |
| `text-display-lg`  | 48px | 58px        | -0.025em       | Large hero text       | Big impact, use sparingly          |
| `text-display-xl`  | 60px | 72px        | -0.025em       | Extra large headlines | Landing pages, major announcements |
| `text-display-2xl` | 72px | 86px        | -0.025em       | Huge display text     | Marketing pages only               |
| `text-display-3xl` | 78px | 94px        | -0.025em       | Massive headlines     | Rare use, big statements           |
| `text-display-4xl` | 96px | 116px       | -0.025em       | Maximum impact        | Special occasions only             |

## Font Weights

| Token            | Value | Usage                                        | Notes                    |
| ---------------- | ----- | -------------------------------------------- | ------------------------ |
| `font-light`     | 300   | Subtle text, large headings                  | Use sparingly            |
| `font-normal`    | 400   | **Default weight** - body text, most content | My standard choice       |
| `font-medium`    | 500   | Emphasized text, important labels            | Good for hierarchy       |
| `font-semibold`  | 600   | Headings, button text                        | Strong but not too heavy |
| `font-bold`      | 700   | Important headings, CTAs                     | Clear emphasis           |
| `font-extrabold` | 800   | Hero text, maximum impact                    | Use rarely               |

## Typography Patterns

### Content Hierarchy

```jsx
// Article/blog post structure
<article className="mx-auto max-w-4xl">
  <h1 className="text-heading-4xl mb-4 font-bold text-neutral-900">
    Page Title
  </h1>
  <p className="text-body-lg mb-8 text-neutral-600">
    Introduction paragraph with larger, more readable text...
  </p>

  <h2 className="text-heading-2xl mb-3 font-semibold text-neutral-900">
    Section Title
  </h2>
  <p className="text-body mb-4 text-neutral-700">
    Regular paragraph content using my default body size...
  </p>

  <h3 className="text-heading-lg mb-2 font-medium text-neutral-800">
    Subsection
  </h3>
  <p className="text-body text-neutral-700">
    More content at the standard reading size...
  </p>
</article>
```

### UI Component Typography

```jsx
// Card component with proper hierarchy
<div className="rounded-md border border-neutral-200 bg-white p-6">
  <h3 className="text-heading-lg mb-2 font-semibold text-neutral-900">
    Card Title
  </h3>
  <p className="text-body mb-4 text-neutral-600">
    Card description using standard body text...
  </p>
  <div className="flex items-center justify-between">
    <span className="text-label text-neutral-500">
      Last updated: 2 hours ago
    </span>
    <button className="text-body-sm text-primary-600 font-medium">
      Read more
    </button>
  </div>
</div>
```

### Form Elements

```jsx
// Form with proper label hierarchy
<div className="space-y-4">
  <div>
    <label className="text-label-lg mb-1 block font-medium text-neutral-700">
      Email Address
    </label>
    <input
      type="email"
      className="text-body text-neutral-900 placeholder:text-neutral-400"
      placeholder="Enter your email"
    />
    <p className="text-label mt-1 text-neutral-500">
      We'll never share your email with anyone else.
    </p>
  </div>
</div>
```

## Usage Guidelines

### Typography Guidelines

**✅ DO:**

- Start with `text-body` (14px) as my default and adjust from there
- Use heading hierarchy consistently (don't skip from h1 to h4)
- Keep display sizes for marketing/hero content only
- Use labels for UI chrome, body for content
- Maintain consistent line height ratios per level

**❌ DON'T:**

- Use display sizes in regular UI components
- Mix too many font sizes in one component
- Use tiny sizes (10-12px) for large amounts of text
- Skip multiple steps in the hierarchy (body to heading-xl)

### Responsive Typography

For responsive design, I follow one of these patterns:

**Method 1: Scale down display/heading by one level on smaller screens**

```jsx
<h1 className="text-heading-4xl md:text-display-sm lg:text-display-md">
  Hero Title
</h1>
```

**Method 2: Use specific breakpoint scales**

```jsx
<h1 className="text-heading-2xl md:text-heading-3xl lg:text-heading-4xl">
  Page Title
</h1>
```

### Accessibility Notes

- All text meets WCAG AA contrast requirements when used with recommended colors
- Line heights are optimized for readability (tighter for large text, looser for small text)
- Letter spacing follows research-backed patterns (negative for large text, positive for small text)
- Inter's design specifically improves readability for users with dyslexia
