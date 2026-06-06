export const initialData = {
  ingresoTotal: 5000,
  gastos: [
    { id: 1, fecha: "2026-06-01", categoria: "Alquiler", descripcion: "Mes de junio", monto: 1500 },
    { id: 2, fecha: "2026-06-03", categoria: "Alimentación", descripcion: "Supermercado", monto: 800 },
    { id: 3, fecha: "2026-06-05", categoria: "Transporte", descripcion: "Gasolina", monto: 200 }
  ],
  categorias: [
    { id: "cat1", nombre: "Alimentación", presupuesto: 1000, color: "bg-green-500" },
    { id: "cat2", nombre: "Transporte", presupuesto: 500, color: "bg-blue-500" },
    { id: "cat3", nombre: "Alquiler", presupuesto: 1500, color: "bg-purple-500" },
  ]
};