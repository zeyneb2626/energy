import React from 'react';
import HouseConfigurator from './components/HouseConfigurator';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Configuration Tradi'home</h1>
        <p className="text-gray-600 max-w-xl">
          Personnalisez votre maison et découvrez son efficacité énergétique en temps réel.
        </p>
      </header>
      
      <main className="w-full max-w-4xl px-4">
        <HouseConfigurator />
      </main>
      
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>© 2025 Tradi'home Configurateur</p>
      </footer>
    </div>
  );
}