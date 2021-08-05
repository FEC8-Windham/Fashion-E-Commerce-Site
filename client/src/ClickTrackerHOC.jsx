import React, { useRef } from 'react';
import moment from 'moment';
import postClicks from './Controllers/postClicks.js';

const clickTrackerHOC = (WrappedComponent) => {
  const ClickTrackerHOC = (props) => {
    const onButtonClick = () => {
      var selector = event.target.className;
      var widget;
      var time = moment().format('LTS');

      event.path.forEach(element => {
        if (element.id && element.id.startsWith('module')) {
          widget = element.id.slice(6);
        }
      });

      const data = {
        'element': selector,
        'widget': widget,
        'time': time
      };

      postClicks(data);
    };
    return <WrappedComponent click={onButtonClick} {...props} />;
  };
  return ClickTrackerHOC;
};

export default clickTrackerHOC;