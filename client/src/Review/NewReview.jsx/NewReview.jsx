import React, { useState } from 'react';
import styled from 'styled-components';
import { Float, FullWidthDiv } from '../Styles/ReviewStyles';
import { Star } from '../../Overview/Styled-Components/Styled-ProductInfo';


const NewReview = (props) => {

  const [selectedRating, setRating] = useState(5);
  const [recommend, setRecommend] = useState('false');

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

  const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 500px;
    height: 500px;
    background-color: white;
  `;

  const StarCont = styled.div`
    width: 10px;
    height: 10px;
    background-color: purple;
  `;

  const FullWidthForm = styled.form`
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: lightgray;
  border: solid 1px;
  `;

  const RadioBox = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 200px;
    height: 75px;
  `;

  const RadioInput = styled.input`
    text-align: center;
    align-content: center;
    width: 100%;
    margin: 0;
  `;

  const RadioLabel = styled.div`
    width: 100%;
    height: 55px;
    align-content: center;
    text-align: center;

  `;

  const RadioContainer = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const radioArr = [];

  const createRadios = () => {
    for (var key in properties) {
      radioArr.push(
        <FullWidthForm>
          <RadioContainer>
            <RadioBox>
              {key}
            </RadioBox>
            <RadioBox>
              <RadioLabel>
                {properties[key][1]}
              </RadioLabel>
              <RadioInput type="radio" value="false" name="Size"></RadioInput>
            </RadioBox>
            <RadioBox>
              <RadioLabel>
                {properties[key][2]}
              </RadioLabel>
              <RadioInput type="radio" value="false" name="Size"></RadioInput>
            </RadioBox>
            <RadioBox>
              <RadioLabel>
                {properties[key][3]}
              </RadioLabel>
              <RadioInput type="radio" value="false" name="Size"></RadioInput>
            </RadioBox>
            <RadioBox>
              <RadioLabel>
                {properties[key][4]}
              </RadioLabel>
              <RadioInput type="radio" value="false" name="Size"></RadioInput>
            </RadioBox>
            <RadioBox>
              <RadioLabel>
                {properties[key][5]}
              </RadioLabel>
              <RadioInput type="radio" value="false" name="Size"></RadioInput>
            </RadioBox>
          </RadioContainer>
        </FullWidthForm>
      );
    }
  };

  createRadios();


  return (


    <Float>
      <Form>
        <FullWidthDiv>
          {stars[selectedRating].map((rating, index) => <Star onClick={()=>setRating(index + 1)}key={index + 1} yellowPercentage={rating}>&#9733;</Star>)}
          <span>{ratings[selectedRating]}</span>
        </FullWidthDiv >
        <FullWidthForm onClick={e=> setRecommend(e.target.value)}width={'100%'}> Would your recommend this product?*
          <input type="radio" value="true" name="Yes" checked={recommend === 'true'}/> Yes
          <input type="radio" value="false" name="No" checked={recommend === 'false'}/> No
        </FullWidthForm>
        {radioArr.map(form=>form)}

      </Form>
    </Float>


  );
};

export default NewReview;