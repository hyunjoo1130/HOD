import { ChangeEvent, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';
import borderBg from '../../assets/Images/Home_Img/QUESTION SECTION BORDER.png';
import searchIcon from '../../assets/icons/SEARCH ICON.png';
import { CallGPT } from '../../api/gpt';

const Question = () => {
  const [prompt, setPrompt] = useState("");
  const [gptAnswer, setGptAnswer] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await CallGPT(prompt);
      console.log('question => ', response.question);
      console.log('summarize => ', response.summarize);  
      console.log('answer => ', response.answer);  
      setGptAnswer(response.answer);
    } catch (error) {
      console.log('에러발생 : ', error);
    }
  }

  const handleEnterSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' ? handleSubmit() : console.error('에러발생 : ', Error);
  }

  return (
    <QuestionContainer>
      <QuestionWrapper backgroundImage={borderBg}>
        <Title>
          <h1>ask a question to AI</h1>
          <p>도자기에 대해 알고싶은 것이나 궁금한 점이 있나요?</p>
        </Title>
        <QuestionInput>
          <input placeholder="전통 도자기와 현대 도자기의 차이점은 무엇인가요?" onChange={handleInput} onKeyDown={handleEnterSubmit} />
          <SearchIconBox>
            <img width="100%" src={searchIcon} onClick={handleSubmit} />
          </SearchIconBox>
        </QuestionInput>
        {/* 임시 테스트 UI */}
        {gptAnswer && <div style={{ padding: '20px' }}>{gptAnswer}</div>}
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
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    font-size: ${({ theme }) => theme.fonts.fontSize.xxLarge};
    text-transform: uppercase;
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
    padding: 22px 24px 22px 69px;
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

  img {
    cursor: pointer;
  }
`;

export default Question;
