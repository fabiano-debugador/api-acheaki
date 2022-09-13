export interface IUpdateProfileDTO {
  id: string;
  name: string;
  slogan: string;
  description: string;
  titleSlug: string;
  imageProfile?: any;
  banner?: any;
  tag: string;
  follower: number | number;
  point: number | number;
  vote: number | number;
}
