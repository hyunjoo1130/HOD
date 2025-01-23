import { Dispatch, SetStateAction } from 'react';
import { NewsData } from '../types/dataTypes';

export const fetchNewsData = async (
  setDataState: Dispatch<SetStateAction<NewsData[]>>
) => {
  try {
    const res = await fetch('/data/newsData.json');
    if (!res.ok) {
      throw new Error('브랜드 데이터를 불러오는데 실패했음.');
    }
    const data = await res.json();
    setDataState(data);
  } catch (error) {
    console.error('error => ', error);
  }
};
