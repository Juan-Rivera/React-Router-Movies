import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link to='/'> {/* Links to Home */}
    <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
