import { StaticImageData } from "next/image";

export interface servant {
  id: number;
  name: string;
  image: StaticImageData;
}

export interface handcraft {
  id: number;
  image: string;
  title: string;
  description: string;
  youtubeUrl: string;
}