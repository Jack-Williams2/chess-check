import React from 'react'
import { Grid, Card, CardContent, Typography } from '@mui/material'

const LastCard = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Last Game Stats
                    </Typography>
                    <Typography>
                      <b>Rating: </b> {props.rating}
                    </Typography>
                    <Typography>
                      <b>Date: </b> {new Date(props.date * 1000).toLocaleDateString() }
                    </Typography>
                    <Typography>
                      <b>Rating Deviation: </b> {props.rd}
                    </Typography>
                  </CardContent>
                </Card>
    </Grid>
  )
}

export default LastCard