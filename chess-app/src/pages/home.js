import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { Icon } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import chessLogo from '../icons8-chess-com.svg';
import ChessApiGrid from '../components/ChessApiGrid';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
        <Icon>
            <img src={chessLogo} height={25} width={25} alt="Chess Icon (similar to chess.com)"/>
        </Icon>
          <Typography variant="h6" color="inherit" noWrap>
           Chess App
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Chess Website
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              This is a small project, mainly to just refresh some skills I have been working on throughout my studies, however enjoy
              seeing my sub-optimal play on Chess.com :)
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" href="https://www.chess.com/home">Visit Chess.com</Button>
              <Button variant="outlined" href="https://www.chess.com/member/gawnfission">My Profile</Button>
            </Stack>
          </Container>
        </Box>
        <ChessApiGrid/>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
            <a target="_blank" href="https://icons8.com/icon/5l29cBQpcOxR/chess-com" rel="noreferrer">Chess Com</a> icon by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a>
        </Typography>
        
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}