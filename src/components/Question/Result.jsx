import {
  ImageList,
  ImageListItem,
  Paper,
  Skeleton,
  Stack,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getRandInt } from '../../utils/tools';

const Result = ({ result }) => {
  const cat = result[getRandInt(0, result.length - 1)];

  console.log(cat);
  return (
    <Paper elevation={3} sx={{ width: '1100px', p: 4, borderRadius: 5 }}>
      <Stack>
        <Stack direction='row'>
          <img src={cat.image.url} alt='' width='400px' />
        </Stack>
        {/* Below Information */}
      </Stack>
    </Paper>
  );
};

export default Result;
