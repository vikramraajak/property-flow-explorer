
import React from 'react';
import Header from '@/components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Urban2Farm</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-green-700">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Urban2Farm is a pioneering platform connecting landowners with aspiring farmers and agricultural investors. 
              We aim to revolutionize land accessibility for sustainable farming while ensuring profitable returns for property owners.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-green-700">How It Works</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">For Property Owners</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>List your agricultural land with verified documentation</li>
                  <li>Set flexible lease terms and rental prices</li>
                  <li>Connect with qualified farmers and investors</li>
                  <li>Secure guaranteed rental income</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">For Renters</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Browse verified agricultural properties</li>
                  <li>Access detailed soil and water reports</li>
                  <li>Simple application process</li>
                  <li>Support throughout the lease period</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-green-700">Why Choose Urban2Farm?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">Verified Properties</h3>
                <p className="text-gray-600">Every property undergoes thorough verification of land titles, soil health, and water sources.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">Transparent Process</h3>
                <p className="text-gray-600">Clear documentation, standardized agreements, and support throughout the rental period.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
