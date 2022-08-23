import { uuid } from "uuidv4";

export class Product {
  public readonly id?: string;
  public idLogin!: string;
  public idCategory!: string;
  public name!: string;
  public slug!: string;
  public price!: number;
  public description!: string;
  public image!: string;
  public page!: string;
  public tag!: string;
  public vote!: number;
  public like!: number;
  public point!: number;

  constructor(props: Omit<Product, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
