import React from 'react';
import StarRating from '../Helper-Components/StarRating.jsx';
import axios from 'axios';

class OverviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  getInfo() {
    axios.get('/user?ID=12345')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  }

  render() {
    return (
      <div>
        <StarRating rating ={3.7}/>
      </div>
    );
  }
}

export default OverviewIndex;