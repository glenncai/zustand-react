import { Card, Typography } from '@mui/material';
import Task from './Task.tsx';
import useTaskStore from '../zustand/store.ts';

interface ColumnProps {
  state: string;
}

const Column = (props: ColumnProps) => {
  const { state } = props;

  const tasks = useTaskStore(store => store.tasks.filter(task => task.state === state));

  return (
    <Card
      sx={{
        width: '33%',
        maxWidth: '20rem',
        minHeight: '20rem',
        background: '#222222',
        color: '#ffffff',
        margin: '0 0.5rem',
        padding: '0.5rem',
      }}
    >
      <Typography paragraph={true}>{state}</Typography>
      {tasks.map(task => (
        <Task key={task.title} title={task.title} />
      ))}
    </Card>
  );
};

export default Column;
