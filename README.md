# Misión 3: Pinia y Entrenadores

Aplicación desarrollada con **Vue 3** que permite gestionar entrenadores Pokémon, obtener un Pokémon aleatorio desde la PokéAPI y asignarlo a un entrenador. Los datos de los entrenadores se guardan en el navegador mediante `localStorage`.

## Características

- Crear entrenadores.
- Listar entrenadores registrados.
- Eliminar entrenadores.
- Obtener un Pokémon aleatorio desde la PokéAPI.
- Asignar un Pokémon a un entrenador.
- Persistencia de datos con `localStorage`.
- Gestión de estados de carga y errores.

---

## Tecnologías

- Vue 3
- TypeScript
- Vite
- Pinia
- Axios
- Tailwind CSS

---

## Requisitos

- Node.js **20.x** o superior
- npm **10.x** o superior
- pnpm **8.x** o superior (opcional)

---

## Instalación

Clona el repositorio:

```bash
git clone <url-del-repositori>
```

Accede al proyecto:

```bash
cd mision-3-poke-api-cazadlos-a-todos
```

Instala las dependencias con npm:

```bash
npm install
```

O con pnpm:

```bash
pnpm install
```

---

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con este contenido:

```env
VITE_POKE_API_URL=https://pokeapi.co/api/v2
```

---

## Ejecutar el proyecto

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

## Estructura del proyecto

```bash
src/
├── components/      # Componentes reutilizables
├── composables/     # Lógica reutilizable (usePokemon)
├── config/          # Configuración de Axios
├── stores/          # Estado global con Pinia
├── types.ts         # Tipos TypeScript
├── App.vue
└── main.ts
```

---

## Dependencias principales

| Paquete | Función |
|---------|--------|
| Vue 3 | Framework principal |
| TypeScript | Tipado estático |
| Vite | Entorno de desarrollo y build |
| Pinia | Gestión del estado global |
| Axios | Cliente HTTP |
| Tailwind CSS | Estilos |

---

## API utilizada

La aplicación consume la **PokéAPI** para obtener información de los Pokémon.

https://pokeapi.co/

---

## Persistencia

Los entrenadores se guardan en `localStorage` del navegador, por lo que la información se conserva entre recargas de la página.

---