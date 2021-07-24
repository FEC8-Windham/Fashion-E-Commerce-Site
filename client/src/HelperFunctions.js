export var calculateAverageRating = (ratingsObj) => {
  var reviewCount = 0;
  var reviewTotal = 0;
  for (var key in ratingsObj) {
    reviewCount += Number(ratingsObj[key]);
    reviewTotal += (ratingsObj[key] * key);
  }
  return (reviewTotal / reviewCount);

};


export var getDefaultStyle = (styles) => {
  var defaultStyle;
  for (var i = 0; i < styles.length; i++) {
    if (styles[i]['default?']) {
      return styles[i];
    }
  }
  throw 'No default style!';
};

