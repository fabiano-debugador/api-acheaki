export class ProductCategory {
  public readonly id?: string;
  public idLogin!: string;
  public category!: string;
  public categorySlug!: string;
  public image?: string | null;

  constructor(props: Omit<ProductCategory, "id">) {
    Object.assign(this, props);
  }
}
