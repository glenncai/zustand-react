import { create } from 'zustand';

export interface TaskStoreProps {
  title: string;
  state: string;
}

interface TaskState {
  tasks: TaskStoreProps[];
  addTask: (task: TaskStoreProps) => void;
  deleteTask: (task: TaskStoreProps) => void;
}

const useTaskStore = create<TaskState>()(set => ({
  tasks: [],
  addTask: task => set(state => ({ tasks: [...state.tasks, task] })),
  deleteTask: (task: TaskStoreProps) =>
    set(state => ({ tasks: state.tasks.filter(t => t !== task) })),
}));

export default useTaskStore;
