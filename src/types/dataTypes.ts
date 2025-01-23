export interface ExhibitionData {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  posterUrl: string;
}

export interface BrandsData {
  id: number;
  name: string;
  description: string;
  instaUrl: string;
  homepageUrl: string;
  thumbnailUrl: string;
}

export interface NewsData {
  id: number;
  thumbnail: string;
  title: string;
  subTitle: string;
  writer: string;
  publishedDate: string;
  views?: number;
}
