import { createGrid } from "./game";

describe("connect 4", () => {
    it("should create grid", () => {
        const grid = createGrid();

        console.log(grid);
    });
});
