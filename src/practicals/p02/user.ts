export class User {
  private firstname: string = "";
  private lastname: string = "";
  private age: number = 0;

  static BIRTH_YEAR: number = 2000;

  public setFirstname(firstname: string): void {
    this.firstname = firstname;
  }

  public setLastname(lastname: string): void {
    this.lastname = lastname;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public getAge(): number {
    return this.age;
  }

  public getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}