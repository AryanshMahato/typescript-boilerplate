import { Hello } from "../src/Hello";

describe("Hello.sayHello()", function () {
  describe("When correct name is passed as parameter", function () {
    it("should return a hello statement", function () {
      const hello = new Hello();
      const statement = hello.sayHello("Aryansh");

      expect(statement).toBe("Hello Aryansh!");
    });
  });

  describe("When numeric string is passed as parameter", function () {
    it("should return a hello statement without numeric statement", function () {
      try {
        const hello = new Hello();
        hello.sayHello("1");
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e.message).toBe("numeric string is not accepted");
      }
    });
  });
});
