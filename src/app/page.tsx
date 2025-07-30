'use client'
import React, { useState } from 'react';

const CommanderCounterWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const lastUpdated = "January 30, 2025";

  const NavBar = () => (
    <nav className="bg-white shadow-lg border-b-2 border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Commander Counter</h1>
              <p className="text-xs text-gray-600">MTG Chess Clock App</p>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <button
              onClick={() => setCurrentPage('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'home'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('support')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'support'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Support
            </button>
            <button
              onClick={() => setCurrentPage('privacy')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'privacy'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Privacy
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center space-x-2 mb-6">
          <div className="w-8 h-8 rounded-full bg-red-500"></div>
          <div className="w-8 h-8 rounded-full bg-blue-500"></div>
          <div className="w-8 h-8 rounded-full bg-green-500"></div>
          <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Commander Counter</h1>
        <p className="text-xl text-gray-600 mb-8">
          The ultimate chess clock and life counter for Magic: The Gathering Commander games
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 inline-block">
          <p className="text-blue-800 font-medium">Coming Soon to the App Store</p>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-3">⏱️ Chess Clock Timer</h3>
          <p className="text-gray-600">
            Prevent slow play with individual timers for each player. Keep games moving 
            and ensure fair play for all four Commander players.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-3">❤️ Life Counter</h3>
          <p className="text-gray-600">
            Track life totals for all four players with easy +/- buttons optimized 
            for landscape orientation and multiplayer games.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Priority System</h3>
          <p className="text-gray-600">
            Handle responses and priority passes seamlessly with dedicated response 
            buttons for each player during gameplay.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-3">📱 Landscape Design</h3>
          <p className="text-gray-600">
            Purpose-built for four-player Commander games with rotated text so 
            every player can easily read their information.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gray-50 rounded-lg p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Speed Up Your Games?</h3>
        <p className="text-gray-600 mb-6">
          Commander Counter will be available soon on the iOS App Store. 
          Follow us for updates on the release date.
        </p>
        <div className="space-y-3">
          <p className="text-sm text-gray-500">
            Questions or feedback? Contact us at{' '}
            <a href="mailto:commandercounter@gmail.com" className="text-blue-600 hover:text-blue-800 underline">
              commandercounter@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );

  const SupportPage = () => (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Support</h1>

        {/* Quick Help */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
            Quick Help
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">🎯 How to Use Priority Buttons</h3>
              <p className="text-gray-600">
                Tap your PRIORITY button to switch the timer to you when responding to spells or abilities. 
                Tap it again to return the timer to the active turn player.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">⏱️ Timer Settings</h3>
              <p className="text-gray-600">
                Before starting a game, configure your timer preferences in the settings panel. 
                Choose between count-up or count-down timers, and set time limits.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">🔄 Turn Progression</h3>
              <p className="text-gray-600">
                The center PASS TURN button rotates to face the current turn player. 
                Tap it to advance to the next player in turn order.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">📱 Device Orientation</h3>
              <p className="text-gray-600">
                Keep your device in landscape mode for the best experience. 
                The app is designed for four players sitting around a table.
              </p>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
            Troubleshooting
          </h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">App Crashes or Freezes</h3>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Force close and restart the app</li>
                <li>• Restart your device if issues persist</li>
                <li>• Ensure you have the latest version installed</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Timer Not Working Properly</h3>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Check that timers are enabled in game settings</li>
                <li>• Verify background app refresh is enabled for Commander Counter</li>
                <li>• Make sure your device isn&apos;t in low power mode</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Layout or Display Issues</h3>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Ensure device is in landscape orientation</li>
                <li>• Check that rotation lock is disabled</li>
                <li>• Try rotating the device and back again</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Can I use this for other MTG formats?</h3>
              <p className="text-gray-600 text-sm">
                While designed for Commander, you can use it for any 4-player format. 
                For 1v1 formats, simply ignore the unused player sections.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Does the app work without internet?</h3>
              <p className="text-gray-600 text-sm">
                Yes! Commander Counter works completely offline. No internet connection required for gameplay.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Are my game statistics saved?</h3>
              <p className="text-gray-600 text-sm">
                Currently, the app focuses on active gameplay without storing game history. 
                Each game starts fresh with default settings.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Can I customize the starting life total?</h3>
              <p className="text-gray-600 text-sm">
                The app defaults to 40 life for Commander format. You can adjust life totals 
                during gameplay using the +/- buttons for each player.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
          <p className="text-gray-600 mb-4">
            Can&apos;t find what you&apos;re looking for? We&apos;re here to help!
          </p>
          
          <div className="space-y-3">
            <div>
              <p className="font-medium text-gray-800">📧 Email Support</p>
              <a 
                href="mailto:commandercounter@gmail.com" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                commandercounter@gmail.com
              </a>
            </div>
            
            <div>
              <p className="font-medium text-gray-800">🐛 Bug Reports</p>
              <p className="text-gray-600 text-sm">
                Please include your device model, iOS version, and steps to reproduce the issue.
              </p>
            </div>
            
            <div>
              <p className="font-medium text-gray-800">💡 Feature Requests</p>
              <p className="text-gray-600 text-sm">
                We love hearing your ideas for improving Commander Counter!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const PrivacyPage = () => (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-center text-gray-600 mb-8">Last updated: {lastUpdated}</p>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">Introduction</h2>
          <p className="text-gray-600 mb-4">
            Welcome to Commander Counter, a chess clock application designed specifically for Magic: The Gathering Commander format games. 
            This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application.
          </p>
          <p className="text-gray-600">
            Commander Counter is committed to protecting your privacy. This app is designed with privacy in mind - we collect minimal data 
            and prioritize your gaming experience over data collection.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">Information We Collect</h2>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Information We DO NOT Collect</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
            <li>Personal information (name, email, phone number)</li>
            <li>Game data or statistics</li>
            <li>Location data</li>
            <li>Contact lists or social media accounts</li>
            <li>Photos, camera, or microphone access</li>
            <li>Device storage content</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical Information We May Automatically Collect</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
            <li>Device type and operating system version (for compatibility)</li>
            <li>App crashes and performance data (to improve stability)</li>
            <li>Basic usage analytics (app opens, feature usage - no personal data)</li>
          </ul>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-blue-800">
              <strong>Important:</strong> All game data (life totals, timer settings, game states) is stored locally on your device only. 
              We never transmit or store your game information on external servers.
            </p>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">How We Use Information</h2>
          <p className="text-gray-600 mb-4">
            The limited technical information we collect is used solely to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
            <li>Improve app performance and fix bugs</li>
            <li>Ensure compatibility across different devices</li>
            <li>Understand which features are most valuable to users</li>
            <li>Provide technical support when requested</li>
          </ul>
          <p className="text-gray-600">
            We do not use this information for advertising, marketing, or any commercial purposes beyond improving the app experience.
          </p>
        </section>

        {/* Data Storage and Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">Data Storage and Security</h2>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Local Storage</h3>
          <p className="text-gray-600 mb-4">
            All your game preferences, life counter settings, and timer configurations are stored locally on your device. 
            This data never leaves your device and is not accessible to us or any third parties.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">Security Measures</h3>
          <p className="text-gray-600 mb-4">
            Since we collect minimal data and store game information locally, your privacy risk is minimal. Any technical data 
            that may be collected is transmitted using industry-standard encryption protocols.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">Data Retention</h3>
          <p className="text-gray-600">
            Technical data is retained only as long as necessary for app improvement purposes, typically no longer than 12 months. 
            You can delete all local app data at any time by uninstalling the application.
          </p>
        </section>

        {/* Third-Party Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">Third-Party Services</h2>
          <p className="text-gray-600 mb-4">
            Commander Counter may use minimal third-party services for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
            <li><strong>App Store Analytics:</strong> Basic download and usage statistics through Apple App Store</li>
            <li><strong>Crash Reporting:</strong> Anonymous crash reports to identify and fix bugs</li>
          </ul>
          <p className="text-gray-600">
            These services operate under their own privacy policies and do not receive personal information from our app. 
            We specifically choose services that prioritize user privacy and minimal data collection.
          </p>
        </section>

        {/* Your Rights and Choices */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">Your Rights and Choices</h2>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Data Control</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
            <li><strong>Local Data:</strong> Delete all app data by uninstalling the application</li>
            <li><strong>Analytics:</strong> Opt out through your device&apos;s privacy settings</li>
            <li><strong>App Permissions:</strong> Review and modify in your device settings</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Us</h3>
          <p className="text-gray-600">
            For privacy-related questions or concerns, contact us at: 
            <a href="mailto:commandercounter@gmail.com" className="text-blue-600 hover:text-blue-800 underline ml-1">
              commandercounter@gmail.com
            </a>
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">Children&apos;s Privacy</h2>
          <p className="text-gray-600">
            Commander Counter does not knowingly collect personal information from children under 13. The app is designed to be 
            family-friendly and suitable for Magic: The Gathering players of all ages. Since we collect minimal data and store 
            everything locally, children can use the app safely under parental supervision.
          </p>
        </section>

        {/* Changes to Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">Changes to This Privacy Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update this Privacy Policy periodically to reflect changes in our practices or for legal compliance. 
            Updates will be posted in the app and on this page. Continued use of the app after changes constitutes acceptance 
            of the updated policy.
          </p>
          <p className="text-gray-600">
            Significant changes will be clearly communicated through app notifications or prominent notices.
          </p>
        </section>

        {/* Magic: The Gathering Disclaimer */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">Magic: The Gathering Disclaimer</h2>
          <p className="text-gray-600">
            Commander Counter is an unofficial companion app for Magic: The Gathering. We are not affiliated with, endorsed by, 
            or connected to Wizards of the Coast LLC. Magic: The Gathering, Commander, and all related names, marks, and logos 
            are trademarks of Wizards of the Coast LLC.
          </p>
        </section>

        {/* Contact Information */}
        <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <div className="space-y-2">
            <p><strong>App Name:</strong> Commander Counter</p>
            <p><strong>Email:</strong> 
              <a href="mailto:commandercounter@gmail.com" className="text-blue-600 hover:text-blue-800 underline ml-1">
                commandercounter@gmail.com
              </a>
            </p>
            <p><strong>Purpose:</strong> MTG Commander Chess Clock and Life Counter</p>
            <p><strong>Last Updated:</strong> {lastUpdated}</p>
          </div>
        </section>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <NavBar />
      
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'support' && <SupportPage />}
        {currentPage === 'privacy' && <PrivacyPage />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          </div>
          <p className="text-gray-300 mb-1">
            Commander Counter - Enhancing your MTG Commander experience
          </p>
          <p className="text-gray-400 text-sm">
            Not affiliated with Wizards of the Coast LLC
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CommanderCounterWebsite;