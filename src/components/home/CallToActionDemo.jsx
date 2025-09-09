import { useState } from 'react';
import CallToAction from './CallToAction';

/**
 * Demo component to showcase the CallToAction component's features
 * This is for development/testing purposes only
 */
const CallToActionDemo = () => {
  const [showPlanTypes, setShowPlanTypes] = useState(true);
  const [customHandler, setCustomHandler] = useState(false);

  const handleCustomRegister = () => {
    alert('Custom registration handler called!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          CallToAction Component Demo
        </h1>

        {/* Controls */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Controls</h2>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={showPlanTypes}
                onChange={(e) => setShowPlanTypes(e.target.checked)}
                className="mr-2"
              />
              Show Plan Types
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={customHandler}
                onChange={(e) => setCustomHandler(e.target.checked)}
                className="mr-2"
              />
              Use Custom Handler
            </label>
          </div>
        </div>

        {/* Component Demo */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Component Preview</h2>
          <CallToAction
            showPlanTypes={showPlanTypes}
            onRegister={customHandler ? handleCustomRegister : null}
            className="demo-cta"
          />
        </div>

        {/* Feature List */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Features Demonstrated</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Responsive design (try resizing your browser)</li>
            <li>✅ Smooth animations with Framer Motion</li>
            <li>✅ Accessibility features (ARIA labels, keyboard navigation)</li>
            <li>✅ RTL support for Arabic text</li>
            <li>✅ Customizable props (toggle controls above)</li>
            <li>✅ Professional styling with hover effects</li>
            <li>✅ Mobile-optimized touch interactions</li>
          </ul>
        </div>

        {/* Responsive Breakpoints Info */}
        <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Responsive Breakpoints</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded bg-blue-50 p-4">
              <h3 className="font-semibold text-blue-800">Mobile (≤768px)</h3>
              <p className="text-sm text-blue-600">Stacked layout, full-width button</p>
            </div>
            <div className="rounded bg-green-50 p-4">
              <h3 className="font-semibold text-green-800">Tablet (769-1024px)</h3>
              <p className="text-sm text-green-600">Horizontal layout, medium sizing</p>
            </div>
            <div className="rounded bg-purple-50 p-4">
              <h3 className="font-semibold text-purple-800">Desktop (>1024px)</h3>
              <p className="text-sm text-purple-600">Full layout, enhanced animations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionDemo;
