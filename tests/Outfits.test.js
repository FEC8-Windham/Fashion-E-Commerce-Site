import React from 'react';
import 'regenerator-runtime/runtime';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
import { shallow, configure, mount } from 'enzyme';

import { beforeEach, it } from 'jest-circus';
import App from './App.test.js';
import OutfitIndex from '../client/src/Outfit/OutfitIndex.jsx';
import RelatedProducts from '../client/src/Outfit/RelatedProducts.jsx';
import RelatedProductsEntry from '../client/src/Outfit/RelatedProductsEntry.jsx';
import YourOutfit from '../client/src/Outfit/YourOutfit.jsx';
import YourOutfitEntry from '../client/src/Outfit/YourOutfitEntry.jsx';
import ComparisonModal from '../client/src/Outfit/ComparisonModal.jsx';
import { exportAllDeclaration } from '@babel/types';
import { describe } from 'yargs';

var metaData = {
  'productsList': [
    {
      'id': 17067,
      'campus': 'hr-rfp',
      'name': 'Camo Onesie',
      'slogan': 'Blend in to your crowd',
      'description': 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
      'category': 'Jackets',
      'default_price': '140.00',
      'created_at': '2021-02-23T04:22:44.728Z',
      'updated_at': '2021-02-23T04:22:44.728Z'
    },
    {
      'id': 17068,
      'campus': 'hr-rfp',
      'name': 'Bright Future Sunglasses',
      'slogan': 'You\'ve got to wear shades',
      'description': 'Where you\'re going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.',
      'category': 'Accessories',
      'default_price': '69.00',
      'created_at': '2021-02-23T04:22:44.728Z',
      'updated_at': '2021-02-23T04:22:44.728Z'
    },
    {
      'id': 17069,
      'campus': 'hr-rfp',
      'name': 'Morning Joggers',
      'slogan': 'Make yourself a morning person',
      'description': 'Whether you\'re a morning person or not.  Whether you\'re gym bound or not.  Everyone looks good in joggers.',
      'category': 'Pants',
      'default_price': '40.00',
      'created_at': '2021-02-23T04:22:44.728Z',
      'updated_at': '2021-02-23T04:22:44.728Z'
    },
    {
      'id': 17070,
      'campus': 'hr-rfp',
      'name': 'Slacker\'s Slacks',
      'slogan': 'Comfortable for everything, or nothing',
      'description': 'I\'ll tell you how great they are after I nap for a bit.',
      'category': 'Pants',
      'default_price': '65.00',
      'created_at': '2021-02-23T04:22:44.728Z',
      'updated_at': '2021-02-23T04:22:44.728Z'
    },
    {
      'id': 17071,
      'campus': 'hr-rfp',
      'name': 'Heir Force Ones',
      'slogan': 'A sneaker dynasty',
      'description': 'Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I\'m just a sneaker pro, I love Pumas and shell toes, but can\'t nothin compare to a fresh crispy white pearl',
      'category': 'Kicks',
      'default_price': '99.00',
      'created_at': '2021-02-23T04:22:44.728Z',
      'updated_at': '2021-02-23T04:22:44.728Z'
    }
  ],
  'productId': 17067,
  'productInfo': {
    'id': 17067,
    'campus': 'hr-rfp',
    'name': 'Camo Onesie',
    'slogan': 'Blend in to your crowd',
    'description': 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    'category': 'Jackets',
    'default_price': '140.00',
    'created_at': '2021-02-23T04:22:44.728Z',
    'updated_at': '2021-02-23T04:22:44.728Z',
    'features': [
      {
        'feature': 'Fabric',
        'value': 'Canvas'
      },
      {
        'feature': 'Buttons',
        'value': 'Brass'
      }
    ],
    'numberStyles': 6,
    'rating': 3.995305164319249,
    'style1': {
      'style_id': 90250,
      'name': 'Forest Green & Black',
      'original_price': '140.00',
      'sale_price': null,
      'default?': true,
      'photos': [
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
        }
      ],
      'skus': {
        '522040': {
          'quantity': 8,
          'size': 'XS'
        },
        '522041': {
          'quantity': 16,
          'size': 'S'
        },
        '522042': {
          'quantity': 17,
          'size': 'M'
        },
        '522043': {
          'quantity': 10,
          'size': 'L'
        },
        '522044': {
          'quantity': 15,
          'size': 'XL'
        },
        '522045': {
          'quantity': 4,
          'size': 'XL'
        }
      }
    },
    'url': 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
  },
  'productStyles': [
    {
      'style_id': 90250,
      'name': 'Forest Green & Black',
      'original_price': '140.00',
      'sale_price': null,
      'default?': true,
      'photos': [
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
        }
      ],
      'skus': {
        '522040': {
          'quantity': 8,
          'size': 'XS'
        },
        '522041': {
          'quantity': 16,
          'size': 'S'
        },
        '522042': {
          'quantity': 17,
          'size': 'M'
        },
        '522043': {
          'quantity': 10,
          'size': 'L'
        },
        '522044': {
          'quantity': 15,
          'size': 'XL'
        },
        '522045': {
          'quantity': 4,
          'size': 'XL'
        }
      }
    },
    {
      'style_id': 90251,
      'name': 'Desert Brown & Tan',
      'original_price': '140.00',
      'sale_price': null,
      'default?': false,
      'photos': [
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80'
        }
      ],
      'skus': {
        '522046': {
          'quantity': 8,
          'size': 'XS'
        },
        '522047': {
          'quantity': 16,
          'size': 'S'
        },
        '522048': {
          'quantity': 17,
          'size': 'M'
        },
        '522049': {
          'quantity': 10,
          'size': 'L'
        },
        '522050': {
          'quantity': 15,
          'size': 'XL'
        },
        '522051': {
          'quantity': 6,
          'size': 'XXL'
        }
      }
    },
    {
      'style_id': 90252,
      'name': 'Ocean Blue & Grey',
      'original_price': '140.00',
      'sale_price': '100.00',
      'default?': false,
      'photos': [
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
        }
      ],
      'skus': {
        '522052': {
          'quantity': 8,
          'size': 'XS'
        },
        '522053': {
          'quantity': 16,
          'size': 'S'
        },
        '522054': {
          'quantity': 17,
          'size': 'M'
        },
        '522055': {
          'quantity': 10,
          'size': 'L'
        },
        '522056': {
          'quantity': 15,
          'size': 'XL'
        },
        '522057': {
          'quantity': 6,
          'size': 'XXL'
        }
      }
    },
    {
      'style_id': 90253,
      'name': 'Digital Red & Black',
      'original_price': '140.00',
      'sale_price': null,
      'default?': false,
      'photos': [
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
          'url': 'https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        }
      ],
      'skus': {
        '522058': {
          'quantity': 8,
          'size': 'XS'
        },
        '522059': {
          'quantity': 16,
          'size': 'S'
        },
        '522060': {
          'quantity': 17,
          'size': 'M'
        },
        '522061': {
          'quantity': 10,
          'size': 'L'
        },
        '522062': {
          'quantity': 15,
          'size': 'XL'
        },
        '522063': {
          'quantity': 6,
          'size': 'XXL'
        }
      }
    },
    {
      'style_id': 90254,
      'name': 'Sky Blue & White',
      'original_price': '140.00',
      'sale_price': '100.00',
      'default?': false,
      'photos': [
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        }
      ],
      'skus': {
        '522064': {
          'quantity': 8,
          'size': 'XS'
        },
        '522065': {
          'quantity': 16,
          'size': 'S'
        },
        '522066': {
          'quantity': 17,
          'size': 'M'
        },
        '522067': {
          'quantity': 10,
          'size': 'L'
        },
        '522068': {
          'quantity': 15,
          'size': 'XL'
        },
        '522069': {
          'quantity': 6,
          'size': 'XXL'
        }
      }
    },
    {
      'style_id': 90255,
      'name': 'Dark Grey & Black',
      'original_price': '170.00',
      'sale_price': null,
      'default?': false,
      'photos': [
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
        }
      ],
      'skus': {
        '522070': {
          'quantity': 8,
          'size': 'XS'
        },
        '522071': {
          'quantity': 16,
          'size': 'S'
        },
        '522072': {
          'quantity': 17,
          'size': 'M'
        },
        '522073': {
          'quantity': 10,
          'size': 'L'
        },
        '522074': {
          'quantity': 15,
          'size': 'XL'
        },
        '522075': {
          'quantity': 6,
          'size': 'XXL'
        }
      }
    }
  ],
  'relatedProducts': [
    17068,
    17069,
    17074,
    17073
  ],
  'reviewList': {
    'product': '17067',
    'page': 0,
    'count': 10,
    'results': [
      {
        'review_id': 525142,
        'rating': 1,
        'summary': 'Testing the red tree',
        'recommend': true,
        'response': null,
        'body': 'Do you see the red tree?',
        'date': '2021-08-03T00:00:00.000Z',
        'reviewer_name': 'fall',
        'helpfulness': 6,
        'photos': [
          {
            'id': 965544,
            'url': 'blob:http://localhost:3000/c9fc5bd6-7c48-40cf-8732-98e36add7908'
          }
        ]
      },
      {
        'review_id': 406612,
        'rating': 5,
        'summary': 'Lorem ipsum',
        'recommend': false,
        'response': null,
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'date': '2021-06-05T00:00:00.000Z',
        'reviewer_name': 'Lorem',
        'helpfulness': 0,
        'photos': []
      },
      {
        'review_id': 406600,
        'rating': 5,
        'summary': 'Lorem ipsum',
        'recommend': false,
        'response': null,
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'date': '2021-06-05T00:00:00.000Z',
        'reviewer_name': 'Lorem',
        'helpfulness': 0,
        'photos': []
      },
      {
        'review_id': 406598,
        'rating': 5,
        'summary': 'Lorem ipsum',
        'recommend': false,
        'response': null,
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'date': '2021-06-05T00:00:00.000Z',
        'reviewer_name': 'Lorem',
        'helpfulness': 0,
        'photos': []
      },
      {
        'review_id': 525129,
        'rating': 1,
        'summary': 'testing the red tree',
        'recommend': false,
        'response': null,
        'body': 'do you see the red tree?',
        'date': '2021-08-02T00:00:00.000Z',
        'reviewer_name': 'adf',
        'helpfulness': 0,
        'photos': [
          {
            'id': 965540,
            'url': 'blob:http://localhost:3000/0de21562-9f89-47ca-969f-e85508db4858'
          }
        ]
      },
      {
        'review_id': 525128,
        'rating': 5,
        'summary': 'fgb',
        'recommend': true,
        'response': null,
        'body': 'dfgvzdfg',
        'date': '2021-08-02T00:00:00.000Z',
        'reviewer_name': 'dffgedfr',
        'helpfulness': 0,
        'photos': [
          {
            'id': 965539,
            'url': 'blob:http://localhost:3000/a999d595-a757-49c8-ad74-84c7e1a21490'
          }
        ]
      },
      {
        'review_id': 525127,
        'rating': 5,
        'summary': 'lo.',
        'recommend': false,
        'response': null,
        'body': 'ol.',
        'date': '2021-08-02T00:00:00.000Z',
        'reviewer_name': 'hju90',
        'helpfulness': 0,
        'photos': [
          {
            'id': 965538,
            'url': 'red tree.jpeg'
          }
        ]
      },
      {
        'review_id': 525126,
        'rating': 3,
        'summary': 'uj',
        'recommend': true,
        'response': null,
        'body': 'ju',
        'date': '2021-08-02T00:00:00.000Z',
        'reviewer_name': 'uj',
        'helpfulness': 0,
        'photos': [
          {
            'id': 965537,
            'url': 'red tree.jpeg'
          }
        ]
      },
      {
        'review_id': 525125,
        'rating': 5,
        'summary': 'yju',
        'recommend': false,
        'response': null,
        'body': 'yhu',
        'date': '2021-08-02T00:00:00.000Z',
        'reviewer_name': 'yju',
        'helpfulness': 0,
        'photos': [
          {
            'id': 965536,
            'url': 'red tree.jpeg'
          }
        ]
      },
      {
        'review_id': 525118,
        'rating': 5,
        'summary': 'This is a summary',
        'recommend': true,
        'response': null,
        'body': 'saljkdapsdjaposjdaposdjopasjdopajsdpoadsjdop',
        'date': '2021-08-02T00:00:00.000Z',
        'reviewer_name': 'dilbertbeets',
        'helpfulness': 0,
        'photos': [
          {
            'id': 965525,
            'url': 'https://mdbcdn.b-cdn.net/wp-content/uploads/2017/08/radio-buttons-fb.jpg'
          }
        ]
      }
    ]
  },
  'reviewMeta': {
    'product_id': '17067',
    'ratings': {
      '1': '7',
      '2': '10',
      '3': '39',
      '4': '78',
      '5': '79'
    },
    'recommended': {
      'false': '69',
      'true': '144'
    },
    'characteristics': {
      'Fit': {
        'id': 57222,
        'value': '2.7127659574468085'
      },
      'Length': {
        'id': 57223,
        'value': '2.7319587628865979'
      },
      'Comfort': {
        'id': 57224,
        'value': '3.1368421052631579'
      },
      'Quality': {
        'id': 57225,
        'value': '3.0990099009900990'
      }
    }
  }
};

var outfit = {
  url: '',
  category: '',
  name: '',
  price: 0,
  rating: ''
};

// OutfitIndex
it('should find the moduleOutfit div', function () {
  const wrapper = shallow(<OutfitIndex metaData={metaData} averageRating='4.5' />);
  expect(wrapper.exists('#moduleOutfit')).toEqual(true);
  expect(wrapper.exists('#comparisonModal')).toEqual(true);
  expect(wrapper.exists('#relatedProductsComponent')).toEqual(true);
  expect(wrapper.exists('#yourOutfitsComponent')).toEqual(true);
});

// RelatedProducts
it('should find the relatedProductsContainer', function () {
  const wrapper = shallow(<RelatedProducts data={[1, 2, 3]} />);
  expect(wrapper.exists('#relatedProductsContainer')).toEqual(true);
  expect(wrapper.exists('#fadeout')).toEqual(true);
  expect(wrapper.exists('#relatedContainer')).toEqual(true);
});

// RelatedProductsEntry
it('should find the cardContainer', function () {
  const wrapper = shallow(<RelatedProductsEntry relatedId={1} />);
  expect(wrapper.exists('#relatedProductsCard')).toEqual(true);
});

// YourOutfit
it('should find the cardContainer', function () {
  const wrapper = shallow(<YourOutfit metaData={metaData} />);
  expect(wrapper.exists('#yourOutfitContainer')).toEqual(true);
  expect(wrapper.exists('#outfitContainer')).toEqual(true);
  expect(wrapper.exists('#Add')).toEqual(true);
});

// YourOutfitEntry
it('should find the cardContainer', function () {
  const wrapper = shallow(<YourOutfitEntry item={outfit} />);
  expect(wrapper.exists('#yourOutfitCardContainer')).toEqual(true);
});

// ComparisonModal
it('should find the comparisonModal', function () {
  const wrapper = shallow(<ComparisonModal relatedData={modalData} currentData={modalData} isOpen={true}/>);
  expect(wrapper.exists('#comparisonModal')).toEqual(true);
});