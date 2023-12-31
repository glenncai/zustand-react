import { createWithEqualityFn as create } from 'zustand/traditional';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

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

const useTaskStore = create<TaskState>()(
  persist(
    devtools(set => ({
      tasks: [],
      draggedTask: null,
      addTask: task => set(state => ({ tasks: [...state.tasks, task] }), false, 'addTask'),
      deleteTask: (task: TaskStoreProps) =>
        set(state => ({ tasks: state.tasks.filter(t => t !== task) }), false, 'deleteTask'),
      setDraggedTask: (task: TaskStoreProps | null) =>
        set({ draggedTask: task }, false, 'setDraggedTask'),
      moveTask: (task: TaskStoreProps) =>
        set(
          state => ({ tasks: state.tasks.map(t => (t.title === task.title ? task : t)) }),
          false,
          'moveTask'
        ),
    })),
    // If no storage is provided, the store will use the default storage (localStorage)
    { name: 'zustand_store', storage: createJSONStorage(() => sessionStorage) }
  )
);

export default useTaskStore;
