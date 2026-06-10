import { useState } from 'react';
import { initialData } from './data/mockData';
import Dashboard from './components/Dashboard';
import HistorialGastos from './components/HistorialGastos';
import FormularioGasto from './components/FormularioGasto'; // <-- 1. Importamos el formulario

function App() {
  const [datos, setDatos] = useState(initialData);

  // 2. Creamos la función que recibe el nuevo gasto y actualiza todo el sistema
  const handleAgregarGasto = (nuevoGasto) => {
    setDatos((prevDatos) => ({
      ...prevDatos, // Mantenemos el ingreso y categorías intactas
      gastos: [nuevoGasto, ...prevDatos.gastos] // Añadimos el nuevo gasto al inicio de la lista
    }));
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Semáforo Presupuestario
      </h1>
      
      <Dashboard datos={datos} />
      
      {/* 3. Insertamos el formulario y le pasamos las instrucciones */}
      <FormularioGasto 
        onAgregarGasto={handleAgregarGasto} 
        categorias={datos.categorias} 
      />

      <HistorialGastos datos={datos} />
      
    </div>
  )
}

export default App;