'use client';

import React from 'react';
import Navbar from './Navbar';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black transition-colors duration-300">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          UprisingTechno
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AI Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Artificial Intelligence</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Explore the latest developments in AI, machine learning, and deep learning technologies.
              From neural networks to natural language processing, discover how AI is shaping our future.
            </p>
          </div>

          {/* Blockchain Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Blockchain</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Dive into the world of blockchain technology, cryptocurrencies, and decentralized applications.
              Learn about smart contracts, NFTs, and the future of digital transactions.
            </p>
          </div>

          {/* Cloud Computing Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Cloud Computing</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Discover cloud solutions, serverless architecture, and containerization technologies.
              Explore how businesses are leveraging the cloud for scalability and innovation.
            </p>
          </div>

          {/* Cybersecurity Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Cybersecurity</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Stay updated with the latest security threats, protection methods, and best practices.
              Learn about encryption, authentication, and securing digital assets.
            </p>
          </div>

          {/* IoT Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Internet of Things</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Explore connected devices, sensors, and smart technologies.
              Understand how IoT is transforming industries and daily life.
            </p>
          </div>

          {/* Quantum Computing Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Quantum Computing</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Delve into the fascinating world of quantum computing and quantum mechanics.
              Learn about qubits, quantum algorithms, and the future of computing.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage; 