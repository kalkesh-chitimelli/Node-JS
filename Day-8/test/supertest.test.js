import { expect } from "chai";
import supertest from "supertest";
import app from "../index.js";

describe("SuperTest test cases", () => {
  it("should call hello api", () => {
    supertest(app)
      .get("/helloApi")
      .expect(200)
      .end(function (err, res) {
        console.log("Response", res.body);
        if (err) throw err;
        expect(res.body).to.be.deep.equal({ message: "Hello! World..." });
      });
  });
});
