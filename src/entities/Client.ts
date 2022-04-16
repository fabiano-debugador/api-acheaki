import { uuid } from "uuidv4";

export class Client {
  public readonly id?: string;
  public login?: string | null;
  public password?: string | null ;

  constructor (props: Omit<Client, 'id'>, id?:string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid()
    }
  }
}
