import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Task from './Task.tsx';
import useTaskStore, { TaskStoreProps } from '../zustand/store.ts';
import { useState } from 'react';

interface ColumnProps {
  state: string;
}

const Column = (props: ColumnProps) => {
  const { state } = props;
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const tasks = useTaskStore(store => store.tasks.filter(task => task.state === state));
  const addTask = useTaskStore(store => store.addTask);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleAddTask = () => {
    const newTask: TaskStoreProps = {
      title: text,
      state,
    };
    addTask(newTask);
    setText('');
    setOpen(false);
  };

  return (
    <>
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
          }}
        >
          <Typography paragraph={true}>{state}</Typography>
          <Button variant="contained" size="small" startIcon={<AddIcon />} onClick={handleOpen}>
            Add
          </Button>
        </Box>
        {tasks.map(task => (
          <Task key={task.title} title={task.title} />
        ))}
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <TextField
              variant="outlined"
              multiline={true}
              value={text}
              rows={4}
              sx={{
                width: '100%',
              }}
              onChange={e => setText(e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleAddTask}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Column;
