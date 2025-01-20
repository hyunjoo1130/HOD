import { Dispatch, SetStateAction } from 'react';
import { ExhibitionData } from '../types/dataTypes';

export const fetchExhibitionData = async (
  setDataState: Dispatch<SetStateAction<ExhibitionData[]>>
) => {
  try {
    const res = await fetch('/data/exhibitionsData.json');
    if (!res.ok) {
      throw new Error('전시회 데이터를 불러오는데 실패했음.');
    }
    const data = await res.json();
    setDataState(data);
  } catch (error) {
    console.error('error => ', error);
  }
};
