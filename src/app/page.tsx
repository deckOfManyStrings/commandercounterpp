import React from 'react';

export default function PrivacyPolicy() {
  const lastUpdated = "January 30, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <div className="mtg-colors">
              <div className="color-dot bg-red-primary"></div>
              <div className="color-dot bg-blue-primary"></div>
              <div className="color-dot bg-green-primary"></div>
              <div className="color-dot bg-yellow-primary"></div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Commander Counter</h1>
              <p className="text-gray-600">MTG Chess Clock App</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="section-card">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-center text-gray-600 mb-8">Last updated: {lastUpdated}</p>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="section-title">Introduction</h2>
            <p className="policy-text">
              Welcome to Commander Counter, a chess clock application designed specifically for Magic: The Gathering Commander format games. 
              This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application.
            </p>
            <p className="policy-text">
              Commander Counter is committed to protecting your privacy. This app is designed with privacy in mind - we collect minimal data 
              and prioritize your gaming experience over data collection.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="section-card">
            <h2 className="section-title">Information We Collect</h2>
            
            <h3 className="subsection-title">Information We DO NOT Collect</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Personal information (name, email, phone number)</li>
              <li>Game data or statistics</li>
              <li>Location data</li>
              <li>Contact lists or social media accounts</li>
              <li>Photos, camera, or microphone access</li>
              <li>Device storage content</li>
            </ul>

            <h3 className="subsection-title">Technical Information We May Automatically Collect</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Device type and operating system version (for compatibility)</li>
              <li>App crashes and performance data (to improve stability)</li>
              <li>Basic usage analytics (app opens, feature usage - no personal data)</li>
            </ul>

            <p className="policy-text">
              <strong>Important:</strong> All game data (life totals, timer settings, game states) is stored locally on your device only. 
              We never transmit or store your game information on external servers.
            </p>
          </section>

          {/* How We Use Information */}
          <section className="section-card">
            <h2 className="section-title">How We Use Information</h2>
            <p className="policy-text">
              The limited technical information we collect is used solely to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Improve app performance and fix bugs</li>
              <li>Ensure compatibility across different devices</li>
              <li>Understand which features are most valuable to users</li>
              <li>Provide technical support when requested</li>
            </ul>
            <p className="policy-text">
              We do not use this information for advertising, marketing, or any commercial purposes beyond improving the app experience.
            </p>
          </section>

          {/* Data Storage and Security */}
          <section className="section-card">
            <h2 className="section-title">Data Storage and Security</h2>
            
            <h3 className="subsection-title">Local Storage</h3>
            <p className="policy-text">
              All your game preferences, life counter settings, and timer configurations are stored locally on your device. 
              This data never leaves your device and is not accessible to us or any third parties.
            </p>

            <h3 className="subsection-title">Security Measures</h3>
            <p className="policy-text">
              Since we collect minimal data and store game information locally, your privacy risk is minimal. Any technical data 
              that may be collected is transmitted using industry-standard encryption protocols.
            </p>

            <h3 className="subsection-title">Data Retention</h3>
            <p className="policy-text">
              Technical data is retained only as long as necessary for app improvement purposes, typically no longer than 12 months. 
              You can delete all local app data at any time by uninstalling the application.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="section-card">
            <h2 className="section-title">Third-Party Services</h2>
            <p className="policy-text">
              Commander Counter may use minimal third-party services for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>App Store Analytics:</strong> Basic download and usage statistics through Apple App Store</li>
              <li><strong>Crash Reporting:</strong> Anonymous crash reports to identify and fix bugs</li>
            </ul>
            <p className="policy-text">
              These services operate under their own privacy policies and do not receive personal information from our app. 
              We specifically choose services that prioritize user privacy and minimal data collection.
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section className="section-card">
            <h2 className="section-title">Your Rights and Choices</h2>
            
            <h3 className="subsection-title">Data Control</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>Local Data:</strong> Delete all app data by uninstalling the application</li>
              <li><strong>Analytics:</strong> Opt out through your device&apos;s privacy settings</li>
              <li><strong>App Permissions:</strong> Review and modify in your device settings</li>
            </ul>

            <h3 className="subsection-title">Contact Us</h3>
            <p className="policy-text">
              For privacy-related questions or concerns, contact us at: 
              <a href="mailto:commandercounter@gmail.com" className="contact-link ml-1">
                commandercounter@gmail.com
              </a>
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="section-card">
            <h2 className="section-title">Children&apos;s Privacy</h2>
            <p className="policy-text">
              Commander Counter does not knowingly collect personal information from children under 13. The app is designed to be 
              family-friendly and suitable for Magic: The Gathering players of all ages. Since we collect minimal data and store 
              everything locally, children can use the app safely under parental supervision.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="section-card">
            <h2 className="section-title">Changes to This Privacy Policy</h2>
            <p className="policy-text">
              We may update this Privacy Policy periodically to reflect changes in our practices or for legal compliance. 
              Updates will be posted in the app and on this page. Continued use of the app after changes constitutes acceptance 
              of the updated policy.
            </p>
            <p className="policy-text">
              Significant changes will be clearly communicated through app notifications or prominent notices.
            </p>
          </section>

          {/* Magic: The Gathering Disclaimer */}
          <section className="section-card">
            <h2 className="section-title">Magic: The Gathering Disclaimer</h2>
            <p className="policy-text">
              Commander Counter is an unofficial companion app for Magic: The Gathering. We are not affiliated with, endorsed by, 
              or connected to Wizards of the Coast LLC. Magic: The Gathering, Commander, and all related names, marks, and logos 
              are trademarks of Wizards of the Coast LLC.
            </p>
          </section>

          {/* Contact Information */}
          <section className="section-card">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 ">Contact Information</h2>
            <div className="space-y-2">
              <p><strong>App Name:</strong> Commander Counter</p>
              <p><strong>Email:</strong> 
                <a href="mailto:commandercounter@gmail.com" className="text-blue-200 hover:text-white underline ml-1">
                  commandercounter@gmail.com
                </a>
              </p>
              <p><strong>Purpose:</strong> MTG Commander Chess Clock and Life Counter</p>
              <p><strong>Last Updated:</strong> {lastUpdated}</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mtg-colors justify-center mb-4">
            <div className="color-dot bg-red-primary"></div>
            <div className="color-dot bg-blue-primary"></div>
            <div className="color-dot bg-green-primary"></div>
            <div className="color-dot bg-yellow-primary"></div>
          </div>
          <p className="">
            Commander Counter - Enhancing your MTG Commander experience
          </p>
          <p className="">
            Not affiliated with Wizards of the Coast LLC
          </p>
        </div>
      </footer>
    </div>
  );
}