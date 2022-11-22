import React, { useEffect, useState } from 'react'
import ChessWebAPI from 'chess-web-api/src/chess-web-api';
import CircularProgress from '@mui/material/CircularProgress';
import { Grid, Typography, Container } from '@mui/material';
import BestCard from './BestCard';
import LastCard from './LastCard';
import RecordCard from './RecordCard'

const ChessApiGrid = () => {
     const [isLoading, setIsLoading] = useState(true);
     const [rapidStats, setRapidStats] = useState(null);
     const [isErr, setIsError] = useState(false)
    
    useEffect(() => {
        var chessAPI = new ChessWebAPI();
        chessAPI.getPlayerStats('GawnFission').then(function(response){
            console.log('Player Stats', response.body)
            setIsLoading(false)
            setRapidStats(response.body.chess_rapid)
        }, function(err) {
            console.error(err);
            setIsLoading(false)
            setIsError(true)
        })
    },[]);
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
        {isLoading ? <Grid container spacing={4} justifyContent={'center'}>
                        <CircularProgress />
                    </Grid> : 
                    (isErr ? <Grid container spacing={4} justifyContent={'center'}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Error
                                    </Typography>
                                    <Typography>
                                        Unable to retrieve content at this time, try refreshing the page, otherwise apologies!
                                    </Typography>
                                </Grid> 
                            </Grid> : 
                        <Grid container spacing={4}> 
                            <BestCard {...rapidStats.best}/>
                            <LastCard {...rapidStats.last}/>
                            <RecordCard {...rapidStats.record}/>
                        </Grid>)}
    </Container>
  )
}

export default ChessApiGrid