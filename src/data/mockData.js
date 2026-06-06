export const initialData = {
  ingresoTotal: 3500, 
  gastos: [
    { id: 1, fecha: "2026-06-01", categoria: "Alquiler", descripcion: "Mensualidad del cuarto/depa", monto: 1200 },
    { id: 2, fecha: "2026-06-03", categoria: "Alimentación", descripcion: "Compra general en el Hipermaxi", monto: 450 },
    { id: 3, fecha: "2026-06-04", categoria: "Transporte", descripcion: "Pasajes de micro y trufi", monto: 40 },
    { id: 4, fecha: "2026-06-05", categoria: "Alimentación", descripcion: "Almuerzo en la U", monto: 25 }
  ],
  categorias: [
    { id: "cat1", nombre: "Alimentación", presupuesto: 1000, color: "bg-green-500" },
    { id: "cat2", nombre: "Transporte", presupuesto: 200, color: "bg-blue-500" },
    { id: "cat3", nombre: "Alquiler", presupuesto: 1200, color: "bg-purple-500" },
  ]
};