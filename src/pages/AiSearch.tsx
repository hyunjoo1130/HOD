import { ChangeEvent, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';
import ExhibitionNavigation from '../components/ExhibitionNavigation';
import { CallGPT } from '../api/gpt';
import searchIcon from '../assets/icons/AI SEARCH ICON.png';
import backgroundImg from '../assets/Images/AiSearch_Img/dojagi-bg.png';
import { useRecoilState } from 'recoil';
import { gptAnswerState, gptLoadingState } from '../state/atoms';

const AiSearch = () => {
  const [prompt, setPrompt] = useState('');
  const [gptAnswer, setGptAnswer] = useRecoilState(gptAnswerState);
  const [gptLoading, setGptLoading] = useRecoilState(gptLoadingState);

  console.log('gptAnswer => ', gptAnswer);
  console.log('gptLoading => ', gptLoading);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    setGptLoading(true);
    setGptAnswer([]);
    try {
      const response = await CallGPT(prompt);
      setGptAnswer(response);
    } catch (error) {
      console.log('에러발생 : ', error);
    } finally {
      setGptLoading(false);
    }
  };

  const handleEnterSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    return e.key === 'Enter'
      ? handleSubmit()
      : console.error('에러발생 : ', Error);
  };

  return (
    <AiSearchContainer>
      <Background>
        <img src={backgroundImg} alt="도자기 배경" width="40%" />
      </Background>
      <ExhibitionNavigation linkColor="black" />
      {gptLoading && !gptAnswer[0] && (
        <QuestionWrapper>...loading</QuestionWrapper>
      )}
      {gptAnswer[0] && (
        <AnswerWrapper>
          <Title>
            <h1>ask a question</h1>
          </Title>
          <AnswerBox>
            <YourQuestion>{gptAnswer[0]?.question}</YourQuestion>
            <AiAnswer>{gptAnswer[0]?.answer}</AiAnswer>
          </AnswerBox>
          <RequestionInput>
            <input
              placeholder="다른 질문 보내보기"
              onChange={handleInput}
              onKeyDown={handleEnterSubmit}
            />
            <SearchIconBox>
              <img width="100%" src={searchIcon} onClick={handleSubmit} />
            </SearchIconBox>
          </RequestionInput>
        </AnswerWrapper>
      )}
      {/* 기존 스크린 */}
      {!gptLoading && !gptAnswer[0] && (
        <QuestionWrapper>
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
      )}
    </AiSearchContainer>
  );
};

const AiSearchContainer = styled.div`
  position: relative;
  padding: 110px 60px;
`;

const Background = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  opacity: 0.1;
  text-align: right;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  padding: 120px 0;
`;

const AnswerWrapper = styled.div`
  padding: 40px 0 100px;
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
  margin: 0 auto;

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

const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
  padding: 80px 40px 90px;
  margin: 0 auto;
`;

const YourQuestion = styled.div`
  align-self: flex-end;

  padding: 21px 32px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fonts.fontSize.medium};
`;

const AiAnswer = styled.div`
  align-self: start;

  margin-top: 40px;
  line-height: 2;
`;

const RequestionInput = styled.div`
  position: absolute;
  width: 50%;
  bottom: 12%;
  left: 50%;
  transform: translate(-50%, 0);

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

export default AiSearch;
