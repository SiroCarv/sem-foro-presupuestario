import { CalendarDays, Tag, CircleDollarSign } from 'lucide-react';

export default function HistorialGastos({ datos }) { 
  const gastosOrdenados = [...datos.gastos].sort((a, b) => 
    new Date(b.fecha) - new Date(a.fecha)
  );

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
        Historial de Gastos
      </h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="py-3 px-4 rounded-tl-lg font-semibold">Fecha</th>
              <th className="py-3 px-4 font-semibold">Categoría</th>
              <th className="py-3 px-4 font-semibold">Descripción</th>
              <th className="py-3 px-4 text-right rounded-tr-lg font-semibold">Monto</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {gastosOrdenados.map((gasto) => (
              <tr key={gasto.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 flex items-center gap-2 text-gray-600">
                  <CalendarDays className="w-4 h-4 text-gray-400" />
                  {gasto.fecha}
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                    <Tag className="w-3 h-3" />
                    {gasto.categoria}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {gasto.descripcion}
                </td>
                <td className="py-3 px-4 text-right font-semibold text-gray-800 flex justify-end items-center gap-1">
                  <CircleDollarSign className="w-4 h-4 text-red-400" />
                  {gasto.monto} Bs.
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}