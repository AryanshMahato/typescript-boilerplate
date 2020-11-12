import {main} from "../src/App";

describe('main()', function () {
  describe('When function is called', function () {
    it('should return Hello World', function () {
      const returnedValue = main()
      
      expect(returnedValue).toBe("Hello from TypeScript")
    });
  });
});