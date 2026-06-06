import { useState } from 'react';
import { initialData } from './data/mockData';
import Dashboard from './components/Dashboard';
import HistorialGastos from './components/HistorialGastos';

function App() {
  // Convertimos los datos estáticos en un estado reactivo
  const [datos, setDatos] = useState(initialData);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Semáforo Presupuestario
      </h1>
      
      {/* Pasamos los datos como "props" a los componentes */}
      <Dashboard datos={datos} />
      <HistorialGastos datos={datos} />
      
    </div>
  )
}

export default App;