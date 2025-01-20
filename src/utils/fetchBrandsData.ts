import { Dispatch, SetStateAction } from 'react';
import { BrandsData } from '../types/dataTypes';

export const fetchBrandsData = async (
  setDataState: Dispatch<SetStateAction<BrandsData[]>>
) => {
  try {
    const res = await fetch('/data/brandsData.json');
    if (!res.ok) {
      throw new Error('브랜드 데이터를 불러오는데 실패했음.');
    }
    const data = await res.json();
    setDataState(data);
  } catch (error) {
    console.error('error => ', error);
  }
};
