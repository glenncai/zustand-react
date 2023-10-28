import { Card, Typography } from '@mui/material';
import Task from './Task.tsx';

interface ColumnProps {
  state: string;
}

const Column = (props: ColumnProps) => {
  const { state } = props;

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
      <Task title="Todo" />
    </Card>
  );
};

export default Column;
