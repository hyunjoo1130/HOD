import { atom } from 'recoil';
import { GPTResponse } from '../api/gpt';

export const gptAnswerState = atom<GPTResponse[]>({
  key: 'gptAnswerState',
  default: [],
});

export const gptLoadingState = atom<boolean>({
  key: 'gptLoadingState',
  default: false,
});
