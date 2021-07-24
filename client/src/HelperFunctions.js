export var calculateAverageRating = (ratingsObj) => {
  var reviewCount = 0;
  var reviewTotal = 0;
  for (var key in ratingsObj) {
    reviewCount += Number(ratingsObj[key]);
    reviewTotal += (ratingsObj[key] * key);
  }
  return (reviewTotal / reviewCount);

};

