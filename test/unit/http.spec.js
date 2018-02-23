import { parseUrlParams } from "@/http";

describe("parses url params and gives them the correct signature", () => {
  it("retrieves only the date, ignoring the time", () => {
    const params = {
      page: 1,
      camera: "MAST",
      earth_date: "2017-12-12"
    };
    const actualUrl = parseUrlParams(params);
    expect(actualUrl).toBe("?page=1&camera=MAST&earth_date=2017-12-12");
  });
});
