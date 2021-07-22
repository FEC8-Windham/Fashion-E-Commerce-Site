import React from 'react';
import OverviewIndex from './Overview/OverviewIndex.jsx';
import OutfitIndex from './Outfit/OutfitIndex.jsx';
import ReviewIndex from './Review/ReviewIndex.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  get(string) {
    axios.get()
  }

  render() {
    return(
      <div>
        <div><OverviewIndex/></div>
        <div><OutfitIndex/></div>
        <div><ReviewIndex/></div>
      </div>
    )
  }
}

export default App;