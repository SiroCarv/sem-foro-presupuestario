import { initialData } from '../data/mockData';

export default function Dashboard() {
  // 1. Cálculos matemáticos básicos
  const ingresoTotal = initialData.ingresoTotal;
  
  // Sumamos todos los gastos del array usando reduce
  const gastoTotal = initialData.gastos.reduce((total, gasto) => total + gasto.monto, 0);
  
  const saldoDisponible = ingresoTotal - gastoTotal;
  const porcentajeEjecucion = ((gastoTotal / ingresoTotal) * 100).toFixed(1);

  // 2. Lógica del Semáforo
  let colorSemaforo = 'bg-green-500'; // Verde por defecto (0% a 60%)
  let estadoTexto = 'Vas bien, tu presupuesto está bajo control';

  if (porcentajeEjecucion >= 86) {
    colorSemaforo = 'bg-red-500'; // Rojo (86% o más)
    estadoTexto = 'Cuidado, estás excediendo tu presupuesto';
  } else if (porcentajeEjecucion >= 61) {
    colorSemaforo = 'bg-yellow-400'; // Amarillo (61% a 85%)
    estadoTexto = 'Atención, estás cerca del límite';
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      
      {/* Sección Superior: El Semáforo Visual */}
      <div className="flex flex-col items-center mb-8 pb-6 border-b border-gray-200">
        <div className={`w-32 h-32 rounded-full ${colorSemaforo} shadow-lg mb-4 flex items-center justify-center transition-colors duration-500`}>
          <span className="text-white text-2xl font-bold">{porcentajeEjecucion}%</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-700">{estadoTexto}</h2>
      </div>

      {/* Sección Inferior: Tarjetas de Resumen */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">Presupuesto Mensual</p>
          <p className="text-2xl font-bold text-gray-800">${ingresoTotal}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">Gasto Ejecutado</p>
          <p className="text-2xl font-bold text-gray-800">${gastoTotal}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">Saldo Disponible</p>
          <p className={`text-2xl font-bold ${saldoDisponible < 0 ? 'text-red-500' : 'text-green-500'}`}>
            ${saldoDisponible}
          </p>
        </div>
      </div>

    </div>
  );
}