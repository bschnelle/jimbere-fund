import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classes from './GetInvolvedTiles.scss';

/**
 * tiles for GetInvolvedLanding and HomeGetInvolved
 */
const GetInvolvedTiles = (props) => {
  const tiles = [
    {
      id: 'fundraising',
      content: (
        <div>
          <h5>Start a</h5>
          <h5>Fundraiser</h5>
        </div>
      )
    },
    {
      id: 'newsletter',
      content: (
        <div>
          <h5>Newsletter</h5>
          <h5>Sign up</h5>
        </div>
      )
    },
    {
      id: 'work-with-us',
      content: (
        <div>
          <h5>Work</h5>
          <h5>With Us</h5>
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
            <Link hash={`#${tile.id}`} key={tile.id} to="/get-involved">
              {tile.content}
            </Link>
          )
        ))
      }
    </div>
  );
};

GetInvolvedTiles.propTypes = {
  onTileClick: PropTypes.func
};

export default GetInvolvedTiles;
