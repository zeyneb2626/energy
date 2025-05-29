import React from 'react';
import HouseConfigurator from './components/HouseConfigurator';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Configurateur de Maison Énergétique</h1>
        <p className="text-gray-600 max-w-xl">
          Sélectionnez différents matériaux pour voir comment ils influencent l'efficacité énergétique de votre maison.
        </p>
      </header>
      
      <main className="w-full max-w-4xl px-4">
        <HouseConfigurator />
      </main>
      
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>© 2025 Configurateur Énergétique</p>
      </footer>
    </div>
  );
}

export default App;