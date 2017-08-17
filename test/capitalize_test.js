const path       = require("path");
const chai       = require("chai");
const expect     = chai.expect;
const capitalize = require(path.resolve(__dirname, "..", "capitalize"));

describe("capitalize", () => {
  it("capitalizes single words", () => {
    expect(capitalize("express")).to.equal("Express");
    expect(capitalize("cats")).to.equal("Cats");
  });

  it("makes the rest of the string lowercase", () => {
    expect(capitalize("javaScript")).to.equal("Javascript");
  });

  it("leaves empty strings alone", () => {
    expect(capitalize("")).to.equal("");
  });

  it("leaves strings with no words alone", () => {
    expect(capitalize("   ")).to.equal("   ");
    expect(capitalize("123")).to.equal("123");
  });

  it("capitalizes multiple-word strings", () => {
    expect(capitalize("what is Express?")).to.equal("What is express?");
    expect(capitalize("i love lamp")).to.equal("I love lamp");
  });

  it("leaves already capitalized words alone", () => {
    expect(capitalize("Express")).to.equal("Express");
    expect(capitalize("Evan")).to.equal("Evan");
    expect(capitalize("Catman")).to.equal("Catman");
  });

  it("capitalizes String objects without changing their values", () => {
    const str = new String("who is JavaScript?");
    expect(capitalize(str)).to.equal("Who is javascript?");
    expect(str.valueOf()).to.equal("who is JavaScript?");
  });
});
