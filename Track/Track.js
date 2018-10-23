import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Track.css';

class Track extends React.Component{
  render()
  {
    return(
      <div className="Track">
  <div className="Track-information">
    <h3>{this.props.track.name}</h3>
    <p>track artist will go here| track album will go here</p>
  </div>
  <a className="Track-action">{this.renderAction}</a>
</div>
    )

    }
    renderAction()
    {
      if(this.isRemoval === true)
        return '-'
      else {
        return '+';
      }
  }
}

export default Track;
