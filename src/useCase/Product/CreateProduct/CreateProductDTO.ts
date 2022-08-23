export interface ICreateProductDTO {
  idLogin: string;
  idCategory: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
  page: string;
  tag: string;
  vote: number;
  like: number;
  point: number;
}
