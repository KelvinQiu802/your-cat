import { Article, EmojiEvents, Pets } from '@mui/icons-material';
import {
  Box,
  Chip,
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getRandInt } from '../../utils/tools';

const Result = ({ result }) => {
  const cat = result[getRandInt(0, result.length - 1)];
  const tags = cat.temperament.split(', ');

  console.log(cat);
  return (
    <Paper elevation={3} sx={{ width: '1100px', p: 4, borderRadius: 5 }}>
      <Stack direction='row' sx={{ mb: 2 }}>
        <img src={cat.image.url} alt='' width='400px' />
        <Box sx={{ flex: 1, pr: 5, pl: 5 }}>
          <Typography
            variant='h2'
            sx={{
              fontWeight: 500,
              fontStyle: 'italic',
              textAlign: 'center',
              mb: 2,
            }}
          >
            {cat.name}
          </Typography>
          <Stack gap={2}>
            <Box>
              <Typography
                variant='span'
                sx={{ fontWeight: 500, fontSize: '1.2em' }}
              >
                Origin:{' '}
              </Typography>
              <Typography variant='span' sx={{ fontSize: '1.2em', mr: 2 }}>
                {cat.origin}
              </Typography>
              <img
                className='flag'
                src={`https://countryflagsapi.com/svg/${cat.country_code}`}
                alt='Country Flag'
                width='50px'
              />
            </Box>
            <Box>
              <Typography
                variant='span'
                sx={{ fontWeight: 500, fontSize: '1.2em' }}
              >
                Lifespan:{' '}
              </Typography>
              <Typography variant='span' sx={{ fontSize: '1.2em', mr: 2 }}>
                {cat.life_span} years
              </Typography>
            </Box>
            <Box>
              <Typography
                variant='span'
                sx={{ fontWeight: 500, fontSize: '1.2em' }}
              >
                Weight:{' '}
              </Typography>
              <Typography variant='span' sx={{ fontSize: '1.2em', mr: 2 }}>
                {cat.weight.metric} Kg / {cat.weight.imperial} Pounds
              </Typography>
            </Box>
            <Box>
              <Typography
                variant='span'
                sx={{ fontWeight: 500, fontSize: '1.2em' }}
              >
                Reference Links:{' '}
              </Typography>
              <Stack direction='row' gap={1} sx={{ mt: 1 }}>
                <Button
                  startIcon={<Article />}
                  variant='outlined'
                  href={cat.wikipedia_url}
                  target='_blank'
                >
                  Wiki
                </Button>
                <Button
                  startIcon={<EmojiEvents />}
                  variant='outlined'
                  href={cat.cfa_url}
                  target='_blank'
                  color='warning'
                >
                  CFA
                </Button>
                <Button
                  startIcon={<Pets />}
                  variant='outlined'
                  href={cat.vetstreet_url}
                  target='_blank'
                  color='secondary'
                >
                  Vetstreet
                </Button>
              </Stack>
            </Box>
            <Box>
              <Typography
                variant='span'
                sx={{ fontWeight: 500, fontSize: '1.2em' }}
              >
                Introduction:{' '}
              </Typography>
              <br />
              <Typography variant='p' color='text.secondary'>
                {cat.description}
              </Typography>
            </Box>
            {/* Tag */}
            <Stack direction='row' gap={1.5}>
              {tags.map((tag) => (
                <Chip label={tag} key={tag} />
              ))}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
};

export default Result;
