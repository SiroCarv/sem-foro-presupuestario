import { useState } from 'react';
import { PlusCircle } from 'lucide-react';

export default function FormularioGasto({ onAgregarGasto, categorias }) {
  // Estados locales solo para las casillas del formulario
  const [descripcion, setDescripcion] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState(categorias[0].nombre);

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar
    if (!descripcion || !monto) return; // Validación simple

    // 1. Armamos el nuevo gasto con la fecha de hoy
    const nuevoGasto = {
      id: Date.now(), 
      fecha: new Date().toISOString().split('T')[0], 
      categoria: categoria,
      descripcion: descripcion,
      monto: parseFloat(monto)
    };

    // 2. Lo enviamos a la aplicación principal
    onAgregarGasto(nuevoGasto);

    // 3. Limpiamos las casillas para el siguiente registro
    setDescripcion('');
    setMonto('');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
        Agregar Nuevo Gasto
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
        
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
          <input 
            type="text" 
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            placeholder="Ej. Fotocopias"
          />
        </div>

        <div className="flex-1 w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Monto (Bs.)</label>
          <input 
            type="number" 
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            placeholder="0"
          />
        </div>

        <div className="flex-1 w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
          <select 
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {categorias.map(cat => (
              <option key={cat.id} value={cat.nombre}>{cat.nombre}</option>
            ))}
          </select>
        </div>

        <button 
          type="submit"
          className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-colors w-full md:w-auto justify-center h-[42px]"
        >
          <PlusCircle className="w-5 h-5" />
          Agregar
        </button>

      </form>
    </div>
  );
}