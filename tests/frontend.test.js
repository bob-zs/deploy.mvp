const { JSDOM } = require("jsdom");

describe("Frontend JavaScript", () => {
  it("should change the background color to lightgreen", () => {
    const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
    global.document = dom.window.document;

    require("@src/index");

    expect(document.body.style.backgroundColor).toBe("lightgreen");
  });
});
