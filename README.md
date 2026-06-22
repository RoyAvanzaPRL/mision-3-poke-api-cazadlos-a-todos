# Misión 3 - Poke API: Cázadlos a todos

Proyecto frontend en Vue 3 + TypeScript + Vite que consume la API de Pokémon para mostrar cartas de Pokémon y permitir buscar entrenadores.

## Tecnologías y paquetes

- `Vue 3` versión `^3.5.34`
- `TypeScript` versión `~6.0.2`
- `Vite` versión `^8.0.12`
- `axios` versión `^1.18.0` para llamadas HTTP a la API
- `tailwindcss` versión `^4.3.1` para estilos utilitarios
- `@tailwindcss/vite` versión `^4.3.1` para integrar Tailwind con Vite
- `@vitejs/plugin-vue` versión `^6.0.6`
- `vue-tsc` versión `^3.2.8` para chequeo de tipos de componentes Vue
- `@types/node` versión `^24.12.3`
- `@vue/tsconfig` versión `^0.9.1`

## Requisitos

- Node.js 20+ recomendado
- pnpm, npm o yarn como gestor de paquetes

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd mision-3-poke-api-cazadlos-a-todos
   ```
2. Instala dependencias:
   ```bash
   pnpm install
   ```

## Uso

- Iniciar servidor de desarrollo:
  ```bash
  pnpm dev
  ```
- Crear build de producción:
  ```bash
  pnpm build
  ```
- Previsualizar el build:
  ```bash
  pnpm preview
  ```

## Estructura principal

- `src/main.ts` - punto de entrada de la aplicación
- `src/App.vue` - componente raíz
- `src/components/` - componentes reutilizables
- `src/composables/usePokemon.ts` - lógica para consumir la API de Pokémon
- `public/` - activos estáticos
- `vite.config.ts` - configuración de Vite

## Detalles adicionales

- El proyecto usa componentes con `<script setup>`.
- Incluye integración con Tailwind CSS para estilos rápidos.
- Las llamadas a la API se realizan con `axios`.
