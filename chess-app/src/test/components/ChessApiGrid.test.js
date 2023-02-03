import { render, screen, act } from '@testing-library/react';
import ChessApiGrid from '../../components/ChessApiGrid';
import ChessWebAPI from 'chess-web-api/src/chess-web-api';
import React from 'react';


jest.mock('chess-web-api/src/chess-web-api', () => {
  return function () {
    return {getPlayerStats: () => {return Promise.resolve({statusCode: 200, body: 
      {chess_rapid: 
        {
          best:{
            date: 1668241787, // Date corresponds to 12/11/2022
            game: "https://www.chess.com/game/live/62396941251",
            rating: 700
          }, 
          last:{
            date: 1669116874, // Date corresponds to 22/11/2022
            rating: 600,
            rd: 50
          }, 
          record:{
            draw: 5,
            win: 21,
            loss: 21
          }
        }
      }})}}
  }
})

describe('<ChessAPiGrid />', () => {

    it('Should display correct best date', async () => {
      await act(async () => {
        await render(<ChessApiGrid />);
      });
      await expect(screen.getByText('12/11/2022')).toBeInTheDocument();
    });

    it('Should display correct last date', async () => {
      await act(async () => {
        await render(<ChessApiGrid />);
      });
      await expect(screen.getByText('22/11/2022')).toBeInTheDocument();
    });

    it('Should display correct rating', async () => {
      await act(async () => {
        await render(<ChessApiGrid />);
      });
      await expect(screen.getByText('600')).toBeInTheDocument();
    });
  });