import { create } from 'zustand';

export interface TaskStoreProps {
  title: string;
  state: string;
}

interface TaskState {
  tasks: TaskStoreProps[];
  addTask: (task: TaskStoreProps) => void;
}

const useTaskStore = create<TaskState>()(set => ({
  tasks: [],
  addTask: task => set(state => ({ tasks: [...state.tasks, task] })),
}));

export default useTaskStore;
