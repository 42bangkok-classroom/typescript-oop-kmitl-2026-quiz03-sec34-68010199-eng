export class User {
  private firstname: string;
  private lastname: string;
  private age: number;

  public static readonly BIRTH_YEAR: number = 2025;

  constructor(firstname: string = "", lastname: string = "", age: number = 0) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  public setFirstname(firstname: string): void {
    this.firstname = firstname;
  }

  public getFirstname(): string {
    return this.firstname;
  }

  public setLastname(lastname: string): void {
    this.lastname = lastname;
  }

  public getLastname(): string {
    return this.lastname;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public getAge(): number {
    return this.age;
  }

  public getFullName(): string {
    return `${this.firstname} ${this.lastname}`.trim();
  }
}