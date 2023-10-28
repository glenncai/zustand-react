import { Box, Chip } from '@mui/material';

interface TaskProps {
  title: string;
}

const STATUS = 'PLANNED';

const Task = (props: TaskProps) => {
  const { title } = props;

  const renderStatus = () => {
    switch (STATUS) {
      case 'PLANNED':
        return <Chip size="small" label="PLANNED" color="primary" />;
      // @ts-ignore
      case 'ONGOING':
        return <Chip size="small" label="ONGOING" color="warning" />;
      // @ts-ignore
      case 'DONE':
        return <Chip size="small" label="DONE" color="success" />;
    }
  };

  return (
    <Box
      sx={{
        color: '#222222',
        background: '#ffffff',
        borderRadius: '4px',
        minHeight: '5rem',
        padding: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'move',
      }}
    >
      <Box>{title}</Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box></Box>
        <Box>{renderStatus()}</Box>
      </Box>
    </Box>
  );
};

export default Task;
