import React, { useState } from 'react';
import styled from 'styled-components';
import { Float, FullWidthDiv, Form, StarCont, FullWidthForm, RadioBox, RadioInput, RadioLabel, RadioContainer, ImageFlexContainer, Close } from '../Styles/ReviewStyles';
import { Star } from '../../Overview/Styled-Components/Styled-ProductInfo';
import { postReview } from '../../Controllers/reviewController';


const NewReview = (props) => {

  const [selectedRating, setRating] = useState(5);
  const [recommend, setRecommend] = useState('false');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photosArr, setPhotos] = useState([]);
  const [charObj, setCharObj] = useState({});
  const [url, setUrl] = useState('');
  const counter = body.length;
  const photosLength = photosArr.length;

  const charArray = Object.keys(props.reviewMeta.characteristics);

  const submissionBody = {
    "product_id": Number(props.reviewMeta.product_id),
    "rating": selectedRating,
    "summary": summary,
    "body": body,
    "recommend": Boolean(recommend),
    "name": name,
    "email": email,
    "photos": photosArr,
    "characteristics": charObj
  };

  const addPhoto = (e, url) => {

    if (url.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi)) {
      e.preventDefault();
      var temp = photosArr;
      temp.push(url);
      console.log(temp);
      alert(url + ' added to photos');
      setPhotos(temp);
      setUrl('');
    } else if (photosArr.length === 5) {
      e.preventDefault();
      alert('Limit of 5 Photos');
    } else {
      e.preventDefault();
      alert('Invalid photo URL');
    }

  };

  const charRadios = (property, rating) => {
    var temp = charObj;
    temp[property] = Number(rating);
    setCharObj(temp);

  };

  const createRadios = () => {
    for (var key in properties) {
      if (charArray.includes(key)) {
        var charID = props.reviewMeta.characteristics[key].id;

        radioArr.push(
          <FullWidthForm onChange={e=>charRadios(e.target.name, e.target.value)}>
            <RadioContainer>
              <RadioBox>
                {key}
              </RadioBox>
              <RadioBox>
                <RadioLabel>
                  {properties[key][1]}
                </RadioLabel>
                <RadioInput type="radio" value="1" name={charID}></RadioInput>
              </RadioBox>
              <RadioBox>
                <RadioLabel>
                  {properties[key][2]}
                </RadioLabel>
                <RadioInput type="radio" value="2" name={charID}></RadioInput>
              </RadioBox>
              <RadioBox>
                <RadioLabel>
                  {properties[key][3]}
                </RadioLabel>
                <RadioInput type="radio" value="3" name={charID}></RadioInput>
              </RadioBox>
              <RadioBox>
                <RadioLabel>
                  {properties[key][4]}
                </RadioLabel>
                <RadioInput type="radio" value="4" name={charID}></RadioInput>
              </RadioBox>
              <RadioBox>
                <RadioLabel>
                  {properties[key][5]}
                </RadioLabel>
                <RadioInput type="radio" value="5" name={charID}></RadioInput>
              </RadioBox>
            </RadioContainer>
          </FullWidthForm>
        );

      }
    }
  };

  const submitCheck = () => {
    var warning = '';
    if (radioArr.length !== charArray.length) {
      warning += 'Please rate all characterstics\n';
    }
    if (counter < 50) {
      warning += 'Please meet the minimum 50 character review body\n';
    }
    if (name.length === 0) {
      warning += 'Please provide a name\n';
    }
    if (email.length === 0 || !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      warning += 'Please enter a valid email address\n';
    }
    if (warning.length > 0) {
      alert(warning);

      return true;
    }

  };

  const submitForm = () => {

    if (submitCheck()) {
      return;
    }

    props.closeAndSubmit(submissionBody);

  };

  const properties = {

    Size: {
      1: 'A size too small',
      2: '½ a size too small',
      3: 'Perfect',
      4: '½ a size too small',
      5: 'A size to wide'
    },
    Width: {
      1: 'Too narrow',
      2: 'Slightly narrow',
      3: 'Perfect',
      4: 'Slightly Wide',
      5: 'Too wide'
    },
    Comfort: {
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect'
    },
    Quality: {
      1: 'Poor',
      2:'Below Average',
      3: 'What I expected',
      4: 'Pretty Great',
      5: 'Perfect'
    },
    Length: {
      1: 'Runs Short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    },
    Fit: {
      1: 'Runs tight',
      2: 'Runs slightly tight',
      3: 'Perfect',
      4: 'Runs slightly Long',
      5: 'A size to wide'
    }
  };

  const stars = {
    1: [100, 0, 0, 0, 0],
    2: [100, 100, 0, 0, 0],
    3: [100, 100, 100, 0, 0],
    4: [100, 100, 100, 100, 0],
    5: [100, 100, 100, 100, 100],
  };

  const ratings = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great',
  };




  const radioArr = [];


  createRadios();


  return (


    <Float>
      <Form>
        <FullWidthDiv>
        Write Your Review
        </FullWidthDiv>
        <FullWidthDiv>
          {'About ' + props.productName}
        </FullWidthDiv>
        <FullWidthDiv>
          {stars[selectedRating].map((rating, index) => <Star onClick={()=>setRating(index + 1)}key={index + 1} yellowPercentage={rating}>&#9733;</Star>)}
          <span>{ratings[selectedRating]}</span>
        </FullWidthDiv >
        <FullWidthForm onClick={e=> setRecommend(e.target.value)}width={'100%'}> Would your recommend this product?*
          <input type="radio" value="true" name="Yes" checked={recommend === 'true'}/> Yes
          <input type="radio" value="false" name="No" checked={recommend === 'false'}/> No
        </FullWidthForm>
        <FullWidthDiv>
        Characteristics*
        </FullWidthDiv>
        {radioArr.map(form=>form)}
        <FullWidthForm>
          <label>
            Summary:
            <textarea key={'summaryform'} value={summary} placeholder={'Example: Best purchase ever!'} onChange={e=>setSummary(e.target.value.slice(0, 60))}/>
          </label>
        </FullWidthForm>
        <FullWidthForm>
          <label>
            Body*:
            <textarea key={'bodyform'} value={body} placeholder={'Why did you like the product or not'} onChange={e=>setBody(e.target.value.slice(0, 1000))}/>
          </label>
          <FullWidthDiv>
            {counter < 50 ? `Minimum required characters left: ${50 - counter}` : 'Minimum reached'}
          </FullWidthDiv>
        </FullWidthForm>
        <FullWidthForm>
          <label>
            Attach Picture:
            <input type='text' key={'photoform'} value={url} placeholder={'Example: imgur.com/image'} onChange={e=>setUrl(e.target.value)} />
            <input onClick={e=>addPhoto(e, url)} type="submit" value="Submit" />
            <input onClick={e=>{
              e.preventDefault();
              setPhotos([]);
            }} type="button" value="Clear Photos" />
          </label>
        </FullWidthForm>
        <ImageFlexContainer>
          Photos:
          {photosArr.map(photo => <img height ={80} width={80} src ={photo}></img>)}
        </ImageFlexContainer>
        <FullWidthForm>
          <label>
            Enter Your Name*:
            <input type='text' key={'nameform'} value={name} placeholder={'Example: jackson11!'} onChange={e=>setName(e.target.value.slice(0, 60))}/>
          </label>
          <FullWidthForm>
             For privacy reasons, do not use your full name or email address
          </FullWidthForm>
        </FullWidthForm>
        <FullWidthForm>
          <label>
            Enter Your Email*:
            <input type='text' key={'emailform'} value={email} placeholder={'Example: jackson11@email.com'} onChange={e=>setEmail(e.target.value.slice(0, 60))}/>
          </label>
          <FullWidthForm>
            For authentication reasons, you will not be emailed
          </FullWidthForm>
        </FullWidthForm>
        <input onClick={()=>submitForm()} type="submit" value="Submit" />
      </Form>
      <Close onClick={props.close}>Close</Close>
    </Float>


  );
};

export default NewReview;


// {"product_id":"17071",
// "rating":1,
// "summary":"hot trash",
// "body":"my feet rotted and fell off after wearing these shoes",
// "recommend":"false",
// "name":"reeee",
// "email":"reee@reee.com",
// "photos":["https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvYXNzZXRzL2VkODM2MGMzLTlkNzUtNGI0Yy1hYmNlLWVjMWRjZjU1MmViMDViZmJkMDc0OTUwM2Y3NDM5MV82MTIyNCAoYykgTXVzZXVtIG9mIExvbmRvbi5qcGciXSxbInAiLCJjb252ZXJ0IiwiLWF1dG8tb3JpZW50ICJdLFsicCIsInRodW1iIiwiMjcwMngxODAxKzIxNisxMTciXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il0sWyJwIiwidGh1bWIiLCI2MDB4PiJdXQ/61224%20%28c%29%20Museum%20of%20London.jpg"],"characteristics":{"57235":1,"57236":1,"57237":1,"57238":1}}

// {"product_id":17071,
// "rating":1,
// "summary":"hot trash",
// "body":"my feet rotted and fell off after wearing these shoes","recommend":"false",
// "name":"reeee",
// "email":"rreee@reee.com",
// "photos":["https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvYXNzZXRzL2VkODM2MGMzLTlkNzUtNGI0Yy1hYmNlLWVjMWRjZjU1MmViMDViZmJkMDc0OTUwM2Y3NDM5MV82MTIyNCAoYykgTXVzZXVtIG9mIExvbmRvbi5qcGciXSxbInAiLCJjb252ZXJ0IiwiLWF1dG8tb3JpZW50ICJdLFsicCIsInRodW1iIiwiMjcwMngxODAxKzIxNisxMTciXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il0sWyJwIiwidGh1bWIiLCI2MDB4PiJdXQ/61224%20%28c%29%20Museum%20of%20London.jpg"],
// "characteristics":{"57235":1,"57236":1,"57237":1,"57238":1}}