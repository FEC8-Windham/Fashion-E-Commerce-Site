
export var calculateAverageRating = (ratingsObj) => {
  var reviewCount = 0;
  var reviewTotal = 0;
  for (var key in ratingsObj) {
    reviewCount += Number(ratingsObj[key]);
    reviewTotal += (ratingsObj[key] * key);
  }
  return (reviewTotal / reviewCount);

};

export var sum = (a, b) => {
  return a + b;
};

export var calculateRecommendation = (recommendedObj) => {
  var wouldRec = Number(recommendedObj.true);
  var notRec = Number(recommendedObj.false);
  var totalRec = wouldRec + notRec;

  return {recomended: Math.floor((wouldRec / (totalRec)) * 100), total: totalRec };

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

export var getQuantityBySize = (style) => {
  var quantityObj = {
    'XS': 0,
    'S': 0,
    'M': 0,
    'L': 0,
    'XL': 0,
  };
  var skus = style.skus;
  var totalCount = 0;

  for (var key in skus) {
    quantityObj[skus[key].size] += skus[key].quantity;
    totalCount += skus[key].quantity;
  }
  quantityObj.totalCount = totalCount;
  return quantityObj;
};

export var getSKU = (style, size) => {
  var skus = style.skus;
  for (var key in skus) {
    if (skus[key].size === size) {
      return key;
    }
  }
};
