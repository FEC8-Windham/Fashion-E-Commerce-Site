import React, { useEffect } from 'react';
import { Facebook, Twitter, Pinterest, ShareButtons } from '../Styled-Components/Styled-ProductInfo';
var ShareButton = () => {

  useEffect(() => {
    (function (d, s, id) {
      var js;
      var fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    (!function (d, s, id) {
      var js;
      var fjs = d.getElementsByTagName(s)[0];
      var p = /^http:/.test(d.location) ? 'http' : 'https';
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, 'script', 'twitter-wjs'));

    (function (d) {
      var f = d.getElementsByTagName('SCRIPT')[0];
      var p = d.createElement('SCRIPT');
      p.type = 'text/javascript';
      p.async = true;
      p.src = '//assets.pinterest.com/js/pinit.js';
      f.parentNode.insertBefore(p, f);
    }(document));
  }, []);

  return (
    <ShareButtons>
      <Facebook>
        <a className="fb-share-button"
          data-href='https://www.google.com'
          data-layout='button_count' >
        </a>
      </Facebook>
      <Twitter>
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false" d data-url="https://dev.twitter.com/web/tweet-button" >Tweet</a>
      </Twitter>
      <Pinterest>
        <a data-pin-do="buttonBookmark" href="https://www.pinterest.com/pin/create/button/" style={{padding: '0px'}}></a>
      </Pinterest>
    </ShareButtons>

  );
};

export default ShareButton;