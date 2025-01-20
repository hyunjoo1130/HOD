import { atom } from 'recoil';
import { GPTResponse } from '../api/gpt';

export const gptAnswerState = atom<GPTResponse[]>({
  key: 'gptAnswerState',
  default: [],
});
