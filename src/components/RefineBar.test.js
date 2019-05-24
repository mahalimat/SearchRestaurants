import React from "react";
import RefineBar from "./RefineBar";
import { mount } from "enzyme";
import Root from "../Root";

describe("Search", () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <RefineBar />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("has a one div and one inputs", () => {
    expect(wrapped.find("div").length).toEqual(1);
    expect(wrapped.find("input").length).toEqual(1);
  });
});
