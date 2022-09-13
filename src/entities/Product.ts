export class Product {
  public readonly id?: string;
  public idLogin!: string;
  public idCategory!: string;
  public name!: string | null;
  public slug!: string | null;
  public price!: number | null;
  public description!: string | null;
  public image!: string | null;
  public page!: string;
  public tag!: string | null;
  public vote!: number;
  public like!: number;
  public point!: number;

  constructor(props: Omit<Product, "id">) {
    Object.assign(this, props);
  }
}
