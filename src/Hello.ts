export class Hello {
  public sayHello = (name: string): string => {
    if (!Number.isNaN(+name)) {
      throw new Error("numeric string is not accepted");
    }

    return `Hello ${name}!`;
  };
}
