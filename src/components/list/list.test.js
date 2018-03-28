import React from "react";
import renderer from "react-test-renderer";
import List from "./list.js";

describe("List component", () => {
    test("should be defined", () => {
        expect(List).toBeDefined();
    });
    test("snapshot", () => {
        expect(renderer.create(<List initialItems={["a", "b", "c"]} />).toJSON()).toMatchSnapshot();
    });
});
