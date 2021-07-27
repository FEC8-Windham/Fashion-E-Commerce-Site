
export var calculateAverageRating = (ratingsObj) => {
  var reviewCount = 0;
  var reviewTotal = 0;
  for (var key in ratingsObj) {
    reviewCount += Number(ratingsObj[key]);
    reviewTotal += (ratingsObj[key] * key);
  }
  return (reviewTotal / reviewCount);

};

export var setDefaultAsFirstStyle = (styles) => {
  var newStyleList = styles.slice();
  for (var i = 0; i < newStyleList.length; i++) {
    if (newStyleList[i]['default?']) {
      var temp = newStyleList[i];
      newStyleList.splice(i, 1);
      newStyleList.unshift(temp);
      break;
    }
  }
  return newStyleList;
};

