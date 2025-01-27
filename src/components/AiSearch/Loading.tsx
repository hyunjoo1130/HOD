import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingTitle />
      <LoadingAnswerBox>
        <YourQuestion />
        <AiAnswer />
        <AiAnswer />
        <AiAnswer />
      </LoadingAnswerBox>
      <LoadingRequestionInput />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  padding: 40px 60px 70px;
`;

const LoadingTitle = styled.div`
  width: 50%;
  height: 40px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondaryWhite};
  margin: 0 auto;
`;

const LoadingAnswerBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 40px 90px;
`;

const YourQuestion = styled.div`
  align-self: flex-end;

  width: 50%;
  height: 80px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.secondaryWhite};
  margin-bottom: 40px;
`;

const AiAnswer = styled.div`
  align-self: start;

  margin-top: 10px;
  width: 60%;
  height: 40px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondaryWhite};
`;

const LoadingRequestionInput = styled.div`
  width: 70%;
  margin: 0 auto;
  height: 80px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.secondaryWhite};
`;

export default Loading;
