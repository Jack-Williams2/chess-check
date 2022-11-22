import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const ChessCard = () => {
  return (
    <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={props.game}>View Game</Button>
                  </CardActions>
                </Card>
    </Grid>
  )
}

export default ChessCard