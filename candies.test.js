const searchCandies = require('./candies');

describe('candies', () => {
  it("search for candies beginning with 'Ma' and price less than 10", () => {
    expect(searchCandies('Ma', 10)).toEqual(['Maltesers', 'Mars']);
  })

  it("search for candies beginning with 'Ma' and price less than 2", () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  })

  it("search for candies beginning with 'S' and price less than 10", () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
  })

  it("search for candies beginning with 'S' and price less than 4", () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
  })

  it("is not case sensitive", () => {
    expect(searchCandies('ma', 10)).toEqual(['Maltesers', 'Mars']);
  })
})