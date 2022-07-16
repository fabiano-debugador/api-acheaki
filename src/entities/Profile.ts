import { uuid } from "uuidv4"

export class Profile {
  public readonly id?: string;
  public idLogin!: string;
  public name!: string;
  public slogan!: string | null;
  public description!: string;
  public titleSlug!: string;
  public imageProfile!: string;
  public  banner!: string;
  public tag!: string;
  public follower!: number;
  public point!: any;
  public vote!: number;

  constructor (
    props: Omit<Profile, 'id'>, id?:string
  ) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid()
    }
  }
}
