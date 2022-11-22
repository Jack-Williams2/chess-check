import React from 'react'
import { Grid, Card, CardContent, Typography } from '@mui/material'

const RecordCard = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Rapid Record:
                    </Typography>
                    <Typography>
                      <b>Win: </b> {props.win}
                    </Typography>
                    <Typography>
                      <b>Loss: </b> {props.loss}
                    </Typography>
                    <Typography>
                      <b>Draw: </b> {props.draw}
                    </Typography>
                  </CardContent>
                </Card>
    </Grid>
  )
}

export default RecordCard