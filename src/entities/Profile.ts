export class Profile {
  public readonly id?: string;
  public name!: string | null;
  public slogan!: string | null;
  public description!: string | null;
  public titleSlug!: string | null;
  public imageProfile?: string | null;
  public banner?: string | null;
  public tag!: string | null;
  public follower!: number | null;
  public point!: number | null;
  public vote!: number | null;

  constructor(props: Omit<Profile, "id, idLogin">) {
    Object.assign(this, props);
  }
}
