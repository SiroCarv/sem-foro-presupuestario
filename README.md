🚦 Semáforo Presupuestario (Demo)

El Semáforo Presupuestario es una aplicación web interactiva diseñada para la gestión, control y monitoreo de las finanzas personales de manera visual e intuitiva. A través de un sistema de alertas inspirado en un semáforo (Verde, Amarillo y Rojo), la aplicación ayuda al usuario a identificar inmediatamente qué tan cerca se encuentra de alcanzar o superar su límite de presupuesto mensual.

⚠️ Nota de la Versión: Actualmente, este sistema se encuentra en fase de Demo. Los datos mostrados al iniciar son de prueba (mock data) para demostrar la funcionalidad de la interfaz, el cálculo matemático de porcentajes y los cambios de estado visuales del semáforo.

🛠️ Opciones para Acceder y Probar el Sistema

Para explorar la aplicación, dispones de dos métodos: interactuar con la demo en vivo a través del navegador web o descargar el código fuente para ejecutarlo en tu propia máquina local.

🔹 Opción 1: Ver la Demo en Vivo (Recomendado)

Si deseas ver el sistema en funcionamiento rápidamente, interactuar con los botones y probar sus características sin necesidad de descargar ni instalar nada, puedes acceder a la versión de demostración alojada en la nube:

👉 Enlace de la Demo: https://sem-foro-presupuestario.vercel.app/

¿Cómo funciona este enlace en vivo?

Alojamiento en Vercel: Este sitio web es una versión pública alojada en los servidores de Vercel, una plataforma optimizada para aplicaciones React.

Uso Inmediato: Al entrar al enlace, tu navegador carga la versión ya compilada y optimizada del código. Puedes agregar gastos en el formulario y ver cómo reacciona el "semáforo" al instante.

Sin base de datos persistente: Al ser una demo puramente frontend, los datos que agregues se mantendrán solo mientras tengas la pestaña abierta. Si recargas la página, el sistema volverá a su estado inicial de demostración.

Actualizaciones automáticas: Cada vez que el código de este repositorio se actualiza en la rama principal, Vercel detecta los cambios y reconstruye automáticamente la página web para mostrar siempre la última versión.

🔹 Opción 2: Clonación e Instalación en Entorno Local

Si eres un desarrollador, evaluador o profesor que desea inspeccionar el código fuente, realizar modificaciones o levantar el sistema en un entorno de desarrollo en tu computadora, sigue esta guía detallada:

📋 Prerrequisitos de Software

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas en tu sistema operativo:

Git: Herramienta para clonar y descargar el código del repositorio. Descargar Git

Node.js: Entorno de ejecución necesario para levantar el proyecto. Se requiere la versión 18.0.0 o superior. Descargar Node.js

npm: Gestor de paquetes de Node (se instala automáticamente junto con Node.js).

🚀 Paso a Paso para la Ejecución Local

Paso 1: Clonar el repositorio
Abre la terminal de tu computadora (Símbolo del sistema, PowerShell o Git Bash), navega hasta la carpeta donde deseas guardar el proyecto y ejecuta el siguiente comando para descargar los archivos:

git clone [https://github.com/SiroCarv/budget-traffic-light.git](https://github.com/SiroCarv/budget-traffic-light.git)


Paso 2: Ingresar a la carpeta del proyecto
Mueve tu terminal dentro del directorio que se acaba de crear:

cd budget-traffic-light


Paso 3: Instalar las dependencias (Requerimientos)
El proyecto requiere de ciertas librerías externas para funcionar. Ejecuta el siguiente comando para que npm lea el archivo package.json y descargue todo lo necesario:

npm install


(Al finalizar, notarás que se ha creado una nueva carpeta llamada node_modules donde se guardan estas librerías).

Paso 4: Iniciar el servidor de desarrollo
Una vez instaladas las dependencias, arranca el entorno de desarrollo local ejecutando:

npm run dev


Paso 5: Abrir la aplicación en el navegador
La terminal te indicará que el servidor está funcionando y te proporcionará una dirección local, usualmente:
👉 http://localhost:5173/

Haz clic en ese enlace o cópialo y pégalo en tu navegador web. Ahora tienes la aplicación ejecutándose localmente. Cualquier cambio que guardes en el código fuente se reflejará instantáneamente en el navegador.

📁 Estructura Principal del Código

Si deseas navegar por el código fuente, aquí tienes una guía rápida de los archivos más importantes dentro de la carpeta src/:

App.jsx: El componente central de la aplicación. Maneja el estado global (el presupuesto total, los gastos actuales) y la lógica matemática que controla el semáforo.

components/Dashboard.jsx: El panel superior visual que renderiza los colores (Verde, Amarillo, Rojo) dependiendo del porcentaje de presupuesto consumido.

components/FormularioGasto.jsx: La interfaz donde el usuario puede ingresar el nombre, monto y categoría de un nuevo gasto financiero.

components/HistorialGastos.jsx: La tabla dinámica que lista todos los movimientos financieros registrados en la sesión actual.

data/mockData.js: Contiene la información predeterminada que alimenta la demo inicial para que el usuario no vea la aplicación vacía al entrar por primera vez.

⚛️ Tecnologías y Librerías Utilizadas

React 19: Biblioteca principal de JavaScript para construir las interfaces de usuario basadas en componentes.

Vite: Herramienta de compilación extremadamente rápida utilizada para empaquetar y servir el entorno de desarrollo.

Tailwind CSS: Framework de estilos utilitarios utilizado para diseñar una interfaz moderna, limpia y totalmente adaptable a dispositivos móviles (Responsive Design).

Lucide React: Colección de iconos vectoriales para mejorar la estética visual de las categorías y botones.