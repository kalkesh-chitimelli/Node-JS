import { addTwoNumbers } from "../services/service.js";
import { expect, should, assert } from "chai";
should();

describe("Calculation service test case", () => {
  describe("addTwoNumbers function test", () => {
    it("Should get successful", (done) => {
      const result = addTwoNumbers(2, 3);
      expect(result).to.be.equal(5);
      done();
    });

    it("Should not get successful ", (done) => {
      const result = addTwoNumbers(2, 3);
      expect(result).to.be.not.equal(8);
      done();
    });

    it("Should not get successful with Should", (done) => {
      const result = addTwoNumbers(2, 3);
      result.should.not.be.a("string");
      done();
    });

    it("Should get successful with assert", (done) => {
      const result = addTwoNumbers(2, 3);
      assert.typeOf(result, "number");
      done();
    });
  });
});
