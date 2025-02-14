import { Task } from "../app/features/task/model/task.model";

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Treino na academia',
    isCompleted: false,
    categoryId: '5',
  },
  {
    id: '2',
    title: 'Comprar pão',
    isCompleted: true,
    categoryId: '1',
  },
];
export const task: Task = {
  id: '1',
  title: 'Treino na academia',
  isCompleted: false,
  categoryId: '5',
};

export const TASK_INTERNAL_SERVER_ERROR_RESPONSE: {
  status: number;
  statusText: string;
} = {
  status: 500,
  statusText: 'Internal Server Error',
};

export const TASK_UNPROCESSIBLE_ENTITY_RESPONSE: {
  status: number;
  statusText: string;
} = {
  status: 422,
  statusText: 'Unprocessable Entity',
};

export const TASK_NOT_FOUND_RESPONSE: {
  status: number;
  statusText: string;
} = {
  status: 404,
  statusText: 'Not found',
};
