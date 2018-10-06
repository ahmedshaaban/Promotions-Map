import request from "supertest";
import app from "../src/app";
import container from "../src/inversify.config";

const chai = require("chai");
const expect = chai.expect;

beforeAll(() => {
  container.rebind("PromoMap").toConstantValue([{
    id: "36a3d6ce-e41f-56b0-ac5c-d4444b8351e6", price: 81, expire_date: "09/27/1964"
  }]);
});

describe("GET /promotions/:id", () => {
  it("should return 200 OK", (done) => {
    request(app).get("/promotions/36a3d6ce-e41f-56b0-ac5c-d4444b8351e6")
      .end(function (err, res) {
        expect(res.body.price).to.be.equal(81);
        done();
      })
      .expect(200);
  });
});