import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classes from './DonateTiles.scss';

const DonateTiles = (props) => {
  const tiles = [
    {
      id: 'one-time',
      content: (
        <div>
          <h5>One-time</h5>
          <h5>Donation</h5>
        </div>
      )
    },
    {
      id: 'the-village-collective',
      content: (
        <div>
          <h5>Join The Village</h5>
          <h5>Collective</h5>
        </div>
      )
    }
  ];

  return (
    <div className={classes.tiles}>
      {
        tiles.map((tile) => (
          props.onTileClick
          ? (
            <div data-id={tile.id} key={tile.id} onClick={props.onTileClick}>
              {tile.content}
            </div>
          )
          : (
            <Link hash={`#${tile.id}`} key={tile.id} to={`/donate/${tile.id}`}>
              {tile.content}
            </Link>
          )
        ))
      }
    </div>
  );
};

DonateTiles.propTypes = {
  onTileClick: PropTypes.func
};

export default DonateTiles;
