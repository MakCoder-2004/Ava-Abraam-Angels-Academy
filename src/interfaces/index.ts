import { StaticImageData } from "next/image";

export interface servant {
  id: number;
  name: string;
  image: StaticImageData;
}

export interface Handcraft {
  id: number;
  image: StaticImageData;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  youtubeUrl: string;
}
