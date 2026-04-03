# Umami Analytics Implementation

## 📊 Overview

Umami Analytics is integrated into the f-bit software personal site with automatic pageview tracking and manual event tracking for key interactions.

## 🔧 Configuration

**Umami Instance**: `https://analytics.f-bit.software/`  
**Website ID**: `96f16fb3-b7e4-46ab-a677-0e13a5e7fdd5`

## 📍 Implementation Details

### 1. Base Tracking Script
Located in `/app/layout.tsx` (Next.js `<Script>` component)
- Loads Umami script with `defer` attribute
- Only loads in production (not in development)
- Automatically tracks pageviews

### 2. Event Tracking

#### Navigation Links (Hash Links)
All navigation items in `/src/components/Menu/index.tsx` use the `data-umami-event` attribute:

| Section | Event Name |
|---------|------------|
| home | `home` |
| what I do | `what I do` |
| how I do it | `how I do it` |
| let's talk | `let's talk` |
| blog | Tracked as external link |

#### Contact Form
Located in `/src/components/ContactForm/index.tsx`:
- **Success**: `Contact Form Sent`
- **Error**: `Contact Form Error`

Uses manual tracking via `window.umami.track()` method.

## 📈 What Gets Tracked

### Automatic Tracking
- ✅ Page views (all route changes)
- ✅ Outbound links (automatic)
- ✅ Hash navigation (via data-umami-event attributes)

### Manual Event Tracking
- ✅ Contact form submissions (success/error)
- ✅ Navigation interactions (hash links)

## 🎯 Adding More Tracking

### Track a Button Click
```tsx
<button data-umami-event="Button Name">
  Click me
</button>
```

### Track a Link
```tsx
<a href="/page" data-umami-event="Link Name">
  Go to page
</a>
```

### Track with JavaScript (for dynamic events)
```tsx
window.umami?.track('Event Name', {
  property: 'value'
});
```

## 🔍 Viewing Analytics

Visit your Umami dashboard at: `https://analytics.f-bit.software/`

### Key Reports
- **Overview**: Total visitors and page views
- **Pages**: Most visited pages
- **Events**: Navigation clicks and form interactions
- **Referrers**: Traffic sources

## 🔒 Privacy

Umami is privacy-focused and GDPR-compliant:
- No cookies required
- No personal data collected
- Self-hosted solution
- No data shared with third parties

## 🔄 Migration Notes

Migrated from Matomo Analytics to Umami:
- Removed complex `useMatomo` hook
- Simplified tracking with declarative attributes
- Removed manual page view tracking (handled automatically)
- Cleaner, more maintainable implementation
