import { exportAllDeclaration } from '@babel/types';
import { TestResult } from '@jest/types';
import { calculateAverageRating, setDefaultAsFirstStyle, getQuantityBySize, getSKU } from '../client/src/HelperFunctions';
var styles;
beforeAll(() => {
  styles = [
    {
      "style_id": 1,
      "name": "Forest Green & Black",
      "original_price": "140",
      "sale_price": "0",
      "default?": false,
      "photos": [
        {
          "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
          "url": "urlplaceholder/style_1_photo_number.jpg"
        },
        {
          "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
          "url": "urlplaceholder/style_1_photo_number.jpg"
        }
        // ...
      ],
      "skus": {
        "37": {
          "quantity": 8,
          "size": "XS"
        },
        "38": {
          "quantity": 16,
          "size": "S"
        },
        "39": {
          "quantity": 17,
          "size": "M"
        },
        //...
      }
    },
    {
      "style_id": 2,
      "name": "Desert Brown & Tan",
      "original_price": "140",
      "sale_price": "0",
      "default?": true,
      "photos": [
        {
          "thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
          "url": "urlplaceholder/style_2_photo_number.jpg"
        }
        // ...
      ],
      "skus": {
        "37": {
          "quantity": 8,
          "size": "XS"
        },
        "38": {
          "quantity": 16,
          "size": "S"
        },
        "39": {
          "quantity": 17,
          "size": "M"
        },
        //...
      }
    }
  ];
});

test('Caculates the average rating when given ratings object', () => {
  var ratingObj = {
    1: '3',
    2: '2',
    3: '4',
    4: '4',
    5: '2'
  };
  expect(calculateAverageRating(ratingObj)).toBe(3);
});

test('Should set the object with the property default?: true as the first item in the array', () => {
  expect(setDefaultAsFirstStyle(styles)[0][
    'default?']).toBe(true);
});

test('it should get all quantities of different sizes', () => {
  expect(getQuantityBySize(styles[0])['XS']).toBe(8);
  expect(getQuantityBySize(styles[0])['S']).toBe(16);
  expect(getQuantityBySize(styles[0])['M']).toBe(17);
  expect(getQuantityBySize(styles[0])['L']).toBe(0);
  expect(getQuantityBySize(styles[0])['XL']).toBe(0);
  expect(getQuantityBySize(styles[0]).totalCount).toBe(41);
});

test('it should get the SKU of a style according to size', () => {
  expect(getSKU(styles[0], 'XS')).toBe('37');
  expect(getSKU(styles[0], 'S')).toBe('38');
  expect(getSKU(styles[0], 'M')).toBe('39');
  expect(getSKU(styles[0], 'L')).toBeUndefined();
  expect(getSKU(styles[0], 'XL')).toBeUndefined();
});