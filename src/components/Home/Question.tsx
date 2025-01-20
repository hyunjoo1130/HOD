import { ChangeEvent, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';
import borderBg from '../../assets/Images/Home_Img/QUESTION SECTION BORDER.png';
import searchIcon from '../../assets/icons/AI SEARCH ICON.png';
import { CallGPT } from '../../api/gpt';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { gptAnswerState } from '../../state/atoms';

const Question = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');
  const [gptAnswer, setGptAnswer] = useRecoilState(gptAnswerState);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    navigate('/ai_search');
    try {
      const response = await CallGPT(prompt);
      setGptAnswer(response);
      console.log('response => ', response);
    } catch (error) {
      console.log('에러발생 : ', error);
    }
  };

  const handleEnterSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    return e.key === 'Enter'
      ? handleSubmit()
      : console.error('에러발생 : ', Error);
  };

  return (
    <QuestionContainer>
      <QuestionWrapper backgroundImage={borderBg}>
        <Title>
          <h1>ai search engine</h1>
          <p>도자기에 대해 궁금한 점을 AI에게 질문해 보세요!</p>
        </Title>
        <QuestionInput>
          <input
            placeholder="전통 도자기와 현대 도자기의 차이점은 무엇인가요?"
            onChange={handleInput}
            onKeyDown={handleEnterSubmit}
          />
          <SearchIconBox>
            <img width="100%" src={searchIcon} onClick={handleSubmit} />
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
