import { create } from 'zustand';

interface TaskStoreProps {
  title: string;
  state: string;
}

interface TaskState {
  tasks: TaskStoreProps[];
}

const useTaskStore = create<TaskState>()(() => ({
  tasks: [
    {
      title: 'Task 1',
      state: 'PLANNED',
    },
    {
      title: 'Task 2',
      state: 'ONGOING',
    },
    {
      title: 'Task 3',
      state: 'DONE',
    },
  ],
}));

export default useTaskStore;
