export default function Dashboard({ datos }) { 
  const ingresoTotal = datos.ingresoTotal;
  const gastoTotal = datos.gastos.reduce((total, gasto) => total + gasto.monto, 0);
  
  const saldoDisponible = ingresoTotal - gastoTotal;
  const porcentajeEjecucion = ((gastoTotal / ingresoTotal) * 100).toFixed(1);

  let colorSemaforo = 'bg-green-500';
  let estadoTexto = 'Vas bien, tu presupuesto está bajo control';

  if (porcentajeEjecucion >= 86) {
    colorSemaforo = 'bg-red-500';
    estadoTexto = 'Cuidado, estás excediendo tu presupuesto';
  } else if (porcentajeEjecucion >= 61) {
    colorSemaforo = 'bg-yellow-400';
    estadoTexto = 'Atención, estás cerca del límite';
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <div className="flex flex-col items-center mb-8 pb-6 border-b border-gray-200">
        <div className={`w-32 h-32 rounded-full ${colorSemaforo} shadow-lg mb-4 flex items-center justify-center transition-colors duration-500`}>
          <span className="text-white text-2xl font-bold">{porcentajeEjecucion}%</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-700">{estadoTexto}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">Presupuesto Mensual</p>
          <p className="text-2xl font-bold text-gray-800">{ingresoTotal} Bs.</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">Gasto Ejecutado</p>
          <p className="text-2xl font-bold text-gray-800">{gastoTotal} Bs.</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">Saldo Disponible</p>
          <p className={`text-2xl font-bold ${saldoDisponible < 0 ? 'text-red-500' : 'text-green-500'}`}>
            {saldoDisponible} Bs.
          </p>
        </div>
      </div>
    </div>
  );
}