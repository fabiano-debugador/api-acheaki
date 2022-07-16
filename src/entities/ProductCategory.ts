import { uuid } from "uuidv4";

export class ProductCategory {
  public readonly id?: string;
  public idLogin!: string;
  public category!: string;
  public categorySlug!: string;
  public image!: string;

  constructor(props: Omit<ProductCategory, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
