import { Paper } from '@mui/material';
import { getRandInt } from '../../utils/tools';

const Result = ({ result }) => {
  const cat = result[getRandInt(0, result.length - 1)];
  console.log(cat);
  return (
    <Paper
      elevation={3}
      sx={{ width: '1100px', height: '700px', p: 4, borderRadius: 5 }}
    ></Paper>
  );
};

export default Result;
