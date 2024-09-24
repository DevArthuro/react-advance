import { PRODUCT_TYPE } from "../_types/Product";
import { TODO_TYPE } from "../_types/Todo";

export const products: PRODUCT_TYPE[] = [
  {
    id: 1,
    title: "Carne",
  },
  {
    id: 2,
    title: "Leche",
  },
  {
    id: 3,
    title: "Verduras",
  },
  {
    id: 3,
    title: "Manzanas",
  },
];

export const todos: TODO_TYPE[] = [
  {
    id: 1,
    title: "Hacer tarea",
    completed: false,
  },
  {
    id: 2,
    title: "Barrer",
    completed: false,
  },
  {
    id: 3,
    title: "Programar",
    completed: true,
  },
];
