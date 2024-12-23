import React from 'react';
import styled from 'styled-components';
import borderBg from '../assets/Images/Home_Img/QUESTION SECTION BORDER.png';
import searchIcon from '../assets/icons/SEARCH ICON.png';

const Question = () => {
  return (
    <QuestionContainer>
      <QuestionWrapper backgroundImage={borderBg}>
        <Title>
          <h1>ask a question</h1>
          <p>도자기에 대해 알고싶은 것이나 궁금한 점이 있나요?</p>
        </Title>
        <QuestionInput>
          <input placeholder="전통 도자기와 현대 도자기의 차이점은 무엇인가요?" />
          <SearchIconBox>
            <img width="100%" src={searchIcon} />
          </SearchIconBox>
        </QuestionInput>
      </QuestionWrapper>
    </QuestionContainer>
  );
};

interface QuestionWrapperProps {
  backgroundImage: string;
}

const QuestionContainer = styled.div`
  padding: 80px 40px;
`;

const QuestionWrapper = styled.div<QuestionWrapperProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: 100% 100%;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 100px 0;
`;

const Title = styled.div`
  text-align: center;

  h1 {
    font-family: ${({ theme }) => theme.fonts.secondaryEng};
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    text-transform: uppercase;
    font-size: 50px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 30px;
    margin: 19px 0 45px 0;
  }
`;

const QuestionInput = styled.div`
  position: relative;
  width: 70%;

  input {
    display: block;
    width: 100%;
    padding: 24px 24px 22px 69px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 20px;
    /* box-shadow: x축 y축 blur spread color; */
    box-shadow: 0 0 10px rgba(137, 137, 137, 0.3);
    font-size: ${({ theme }) => theme.fonts.fontSize.medium};

    &::placeholder {
      font-size: ${({ theme }) => theme.fonts.fontSize.medium};
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;
const SearchIconBox = styled.div`
  position: absolute;
  top: 13.5px;
  left: 20px;
  width: 38px;
`;

export default Question;
