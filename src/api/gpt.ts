import OpenAI from 'openai';

const apiKey = import.meta.env.VITE_CHAT_GPT_API_KEY as string;
const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

interface GPTResponse {
  question: string;
  summarize: string;
  answer: string;
}

export const CallGPT = async (prompt: string) => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content:
          'You are an expert on pottery. You are a person who loves pottery very much and wants to convey the knowledge of pottery to those who love it well.',
      },
      {
        role: 'user',
        content: `1. [question]: Write down the question i asked.
                2. [summarize]: Write a brief summary of [question].
                3. [answer]: Please answer about [summarize] with simple and accurate information, not too long.
        
                Translate into Korean and Use the output in the following JSON format:
                {
                    question: here is [question],
                    summarize: here is [summarize],
                    answer: here is [answer]
                }`,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    model: 'gpt-4o-mini',
    temperature: 0.5,
    max_tokens: 300,
  });

  const rawAnswer = completion.choices[0].message.content; // json 형태
  if (!rawAnswer) throw new Error('GPT의 응답이 비어있습니다');

  try {
    const parsedAnswer = JSON.parse(rawAnswer) as GPTResponse; // JSON.parse로 json 값을 react에서 사용할 수 있도록 변환시킴.
    return parsedAnswer;
  } catch (error) {
    console.error('JSON 파싱 실패 | ', error);
    throw new Error('응답을 처리하는데 실패했어요');
  }
};
