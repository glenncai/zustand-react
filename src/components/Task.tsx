import { Box, Chip } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useTaskStore from '../zustand/store.ts';

interface TaskProps {
  title: string;
}

const Task = (props: TaskProps) => {
  const { title } = props;

  const task = useTaskStore(store => store.tasks.find(task => task.title === title));
  const deleteTask = useTaskStore(store => store.deleteTask);
  const setDraggedTask = useTaskStore(store => store.setDraggedTask);

  const renderStatus = () => {
    switch (task?.state) {
      case 'PLANNED':
        return <Chip size="small" label="PLANNED" color="primary" />;
      case 'ONGOING':
        return <Chip size="small" label="ONGOING" color="warning" />;
      case 'DONE':
        return <Chip size="small" label="DONE" color="success" />;
    }
  };

  return (
    <Box
      draggable
      onDragStart={() => setDraggedTask(task!)}
      sx={{
        color: '#222222',
        background: '#ffffff',
        borderRadius: '4px',
        minHeight: '5rem',
        padding: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: '0.5rem',
        cursor: 'move',
      }}
    >
      <Box>{task?.title}</Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box onClick={() => deleteTask(task!)} sx={{ zIndex: 100, cursor: 'pointer' }}>
          <DeleteForeverIcon />
        </Box>
        <Box>{renderStatus()}</Box>
      </Box>
    </Box>
  );
};

export default Task;
