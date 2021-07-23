import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

class OutfitIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        Realted Products and My Outfit Component!
        <RelatedProducts />
        <YourOutfit />
      </div>
    )
  }
}

export default OutfitIndex;