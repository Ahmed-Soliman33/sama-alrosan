# CallToAction Component

A professional, responsive call-to-action component for the Sama real estate website that encourages users to register their interest in residential and commercial plans.

## Features

- ✅ **Responsive Design**: Adapts seamlessly across mobile, tablet, and desktop devices
- ✅ **Accessibility**: Full ARIA support and semantic HTML
- ✅ **Smooth Animations**: Framer Motion powered animations with performance optimization
- ✅ **Customizable**: Flexible props for different use cases
- ✅ **RTL Support**: Optimized for Arabic right-to-left layout
- ✅ **Professional Styling**: Modern design with proper hover states and focus indicators

## Usage

### Basic Usage
```jsx
import CallToAction from '@components/home/CallToAction';

function HomePage() {
  return (
    <div>
      <CallToAction />
    </div>
  );
}
```

### With Custom Handler
```jsx
import CallToAction from '@components/home/CallToAction';

function HomePage() {
  const handleCustomRegister = () => {
    // Custom registration logic
    console.log('Custom registration handler');
  };

  return (
    <CallToAction onRegister={handleCustomRegister} />
  );
}
```

### Without Plan Types
```jsx
import CallToAction from '@components/home/CallToAction';

function SimpleCTA() {
  return (
    <CallToAction showPlanTypes={false} />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `""` | Additional CSS classes to apply to the container |
| `onRegister` | `function` | `null` | Custom registration handler. If not provided, navigates to `/register` |
| `showPlanTypes` | `boolean` | `true` | Whether to show the plan types text (residential/commercial) |

## Responsive Behavior

### Mobile (≤ 768px)
- Stacked vertical layout
- Full-width button
- Centered text alignment
- Reduced padding and font sizes
- Disabled hover animations for better touch experience

### Tablet (769px - 1024px)
- Horizontal layout with moderate spacing
- Medium-sized button and text
- Balanced padding

### Desktop (> 1024px)
- Full horizontal layout with generous spacing
- Large button and text sizes
- Enhanced hover animations
- Maximum visual impact

## Accessibility Features

- **Semantic HTML**: Uses proper `<section>` and heading elements
- **ARIA Labels**: Comprehensive labeling for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Screen Reader Support**: Descriptive text for all interactive elements

## Animation Details

The component uses Framer Motion for smooth, professional animations:

- **Container**: Fade in from bottom with staggered children
- **Button**: Scale animation on hover/tap
- **Text**: Slide in from left with subtle hover effects
- **Performance**: Optimized for mobile with conditional animations

## Styling

The component uses Tailwind CSS with the project's design system:

- **Colors**: Primary (`#1a1e23`) and Secondary (`#d3a851`) from theme
- **Typography**: Tajawal font family
- **Spacing**: Responsive padding and margins
- **Shadows**: Subtle elevation effects

## Testing

The component includes comprehensive tests covering:

- Rendering with default props
- Navigation functionality
- Custom handler execution
- Conditional rendering
- Accessibility attributes
- Responsive behavior

Run tests with:
```bash
npm test CallToAction.test.jsx
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Supports RTL languages

## Performance Considerations

- Lazy-loaded animations
- Optimized re-renders with proper dependency arrays
- Conditional animation loading based on device type
- Efficient CSS class generation

## Migration from Previous Version

### Breaking Changes
- Import path changed from lowercase `button` to `Button`
- Removed unused `isMobile` variable
- Added proper PropTypes validation

### Improvements
- Better responsive design
- Enhanced accessibility
- Performance optimizations
- Cleaner code structure
- Comprehensive testing
