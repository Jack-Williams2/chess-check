import React from 'react'
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const BestCard = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Best Rapid Stats
                    </Typography>
                    <Typography>
                      <b>Rating: </b> {props.rating}
                    </Typography>
                    <Typography>
                      <b>Date: </b> {new Date(props.date * 1000).toLocaleDateString() }
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={props.game}>View Game</Button>
                  </CardActions>
                </Card>
    </Grid>
  )
}

export default BestCard