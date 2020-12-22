import Ship from "./ships-factory";

const expectedShip = {
  shipLength: 2,
  coords: [],
  damages: [],
  sunk: false,
  hit(position) {
    return position;
  },
  isSunk() {
    if (this.damages.length === shipLength) this.sunk = true;
    return this.sunk;
  },
};

describe("Ship Factory", () => {
  it("should return expectedShip", () => {
    expect(JSON.stringify(Ship(2))).toEqual(JSON.stringify(expectedShip));
  });

  it("should have identical properties", () => {
    expect(Ship(2).shipLength).toBe(expectedShip.shipLength);
    expect(Ship(2).sunk).toBe(expectedShip.sunk);
    expect(Ship(2).damages).toEqual(expectedShip.damages);
  });
});

describe("Hit Function", () => {
  const newShip = Ship(5);
  it("should take a number and then mark that position as ‘hit’.", () => {
    newShip.hit(10);
    expect(newShip.damages).toEqual([10]);
  });
});

describe("isSunk Function", () => {
  const newShip = Ship(0);
  it("should convert sunk into true if ship's length equals to", () => {
    newShip.isSunk();
    expect(newShip.sunk).toBe(true);
  });
});

/*
- are all ships located / chosen ?
- is the computer smart
- isSunk should be true if Ship created's length === 0?
- ships can not have same places
*/
