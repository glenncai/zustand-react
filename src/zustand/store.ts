import { createWithEqualityFn } from 'zustand/traditional';

export interface TaskStoreProps {
  title: string;
  state: string;
}

interface TaskState {
  tasks: TaskStoreProps[];
  draggedTask: TaskStoreProps | null;
  addTask: (task: TaskStoreProps) => void;
  deleteTask: (task: TaskStoreProps) => void;
  setDraggedTask: (task: TaskStoreProps | null) => void;
  moveTask: (task: TaskStoreProps) => void;
}

const useTaskStore = createWithEqualityFn<TaskState>()(set => ({
  tasks: [],
  draggedTask: null,
  addTask: task => set(state => ({ tasks: [...state.tasks, task] })),
  deleteTask: (task: TaskStoreProps) =>
    set(state => ({ tasks: state.tasks.filter(t => t !== task) })),
  setDraggedTask: (task: TaskStoreProps | null) => set({ draggedTask: task }),
  moveTask: (task: TaskStoreProps) =>
    set(state => ({ tasks: state.tasks.map(t => (t.title === task.title ? task : t)) })),
}));

export default useTaskStore;
