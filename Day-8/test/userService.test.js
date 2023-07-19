import sinon from "sinon";
import { getAllUsers } from "../services/userService.js";
import { expect } from "chai";

let obj = {
  getAllUsers: getAllUsers,
};

describe("User Service Test Cases", () => {
  describe("test cases of getAllUsers func", () => {
    beforeEach(() => {
      sinon.restore();
    });
    it("should get all the users successfully", async () => {
      sinon.stub(obj, "getAllUsers").returns([
        {
          id: 1,
          firstName: "kalkesh",
        },
      ]);
      const userResult = await obj.getAllUsers();

      expect(userResult).to.be.deep.equal([
        {
          id: 1,
          firstName: "kalkesh",
        },
      ]);
    });
    it("should get all the users successfully with id=1 with mock", async () => {
      const mockResult = sinon.mock(obj);
      mockResult.expects("getAllUsers").returns([
        {
          id: 1,
          firstName: "kalkesh",
        },
      ]);
      const userResult = await obj.getAllUsers();
      console.log("userResult =", userResult);
      mockResult.verify();
      expect(userResult[0].id).to.be.deep.equal(1);
    });
  });
});
