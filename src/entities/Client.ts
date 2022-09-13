export class Client {
  public readonly id?: string;
  public login!: string;
  public password!: string;

  constructor(props: Omit<Client, "id">) {
    Object.assign(this, props);
  }
}
