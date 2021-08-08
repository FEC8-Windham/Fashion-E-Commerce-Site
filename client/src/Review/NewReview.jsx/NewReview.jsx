import React, { useState } from 'react';
import styled from 'styled-components';
import { Float, FullWidthDiv, Form, StarCont, FullWidthForm, RadioBox, RadioInput, RadioLabel, RadioContainer, ImageFlexContainer, RevClose, Button, ButtonCont } from '../Styles/ReviewStyles';
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
          <FullWidthForm key={charID} onChange={e=>charRadios(e.target.name, e.target.value)}>
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
    if (Object.keys(props.reviewMeta.characteristics).length !== Object.keys(charObj).length) {
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
          <h4>Write Your Review</h4>
          <RevClose onClick={props.close}>X Close</RevClose>
        </FullWidthDiv>
        <FullWidthDiv border={'1px solid black'}>
          {'About ' + props.productName}
        </FullWidthDiv>
        <FullWidthDiv border={'1px solid black'}> <span>Select Rating:&nbsp;</span>
          <div>
            <span>&nbsp;{ratings[selectedRating]}</span>
            {stars[selectedRating].map((rating, index) => <Star onClick={()=>setRating(index + 1)}key={index + 1} yellowPercentage={rating}>&#9733;</Star>)}
          </div>
        </FullWidthDiv >
        <FullWidthForm border={'1px solid black'} onChange={e=> setRecommend(e.target.value)}width={'100%'}> Would your recommend this product?*
          <input type="radio" value="true" name="Yes" onChange={()=>{}} checked={recommend === 'true'}/> Yes
          <input type="radio" value="false" name="No" onChange={()=>{}} checked={recommend === 'false'}/> No
        </FullWidthForm>
        <FullWidthDiv>
        Characteristics*
        </FullWidthDiv>
        {radioArr.map(form=>form)}
        <FullWidthForm border={'1px solid black'}>
          <label>
            Summary: <br></br>
            <textarea cols='60' key={'summaryform'} value={summary} placeholder={'Example: Best purchase ever!'} onChange={e=>setSummary(e.target.value.slice(0, 60))}/>
          </label>
        </FullWidthForm>
        <FullWidthForm border={'1px solid black'}>
          <label>
            Body*: <br></br>
            <textarea cols='60' key={'bodyform'} value={body} placeholder={'Why did you like the product or not'} onChange={e=>setBody(e.target.value.slice(0, 1000))}/>
          </label>
          <FullWidthDiv fontSize={'12px'}>
            {counter < 50 ? `Minimum required characters left: ${50 - counter}` : 'Minimum reached'}
          </FullWidthDiv>
        </FullWidthForm>
        <FullWidthForm border={'1px solid black'}>
          <label>
            Attach Picture:&nbsp;
            <input type='text' key={'photoform'} value={url} placeholder={'Example: imgur.com/image'} onChange={e=>setUrl(e.target.value)} />
            <input onClick={e=>addPhoto(e, url)} type="submit" value="Submit" />
            <input onClick={e=>{
              e.preventDefault();
              setPhotos([]);
            }} type="button" value="Clear Photos" />
          </label>
        </FullWidthForm>
        <ImageFlexContainer border={'1px solid black'}>
          Photos:
          {photosArr.length > 0 ? photosArr.map(photo => <img height ={80} width={80} src ={photo}></img>) : ' No photos saved'}
        </ImageFlexContainer>
        <FullWidthForm>
          <label>
            Enter Your Name*:{' '}
            <input type='text' key={'nameform'} value={name} placeholder={'Example: jackson11!'} onChange={e=>setName(e.target.value.slice(0, 60))}/>
          </label>
          <FullWidthDiv fontSize={'12px'} border={'1px solid black'}>
             For privacy reasons, do not use your full name or email address
          </FullWidthDiv>
        </FullWidthForm>
        <FullWidthForm>
          <label>
            Enter Your Email*:&nbsp;
            <input type='text' key={'emailform'} value={email} placeholder={'Example: jackson11@email.com'} onChange={e=>setEmail(e.target.value.slice(0, 60))}/>
          </label>
          <FullWidthDiv fontSize={'12px'} border={'1px solid black'}>
            For authentication reasons, you will not be emailed
          </FullWidthDiv>
        </FullWidthForm>
        <ButtonCont>
          <Button margin={'15px'} onClick={()=>submitForm()} type="submit" value="Submit" >Submit Review</Button>
        </ButtonCont>
      </Form>
    </Float>
  );
};

export default NewReview;
