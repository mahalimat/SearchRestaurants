import React from "react";
import SearchBar from "./SearchBar";
import { mount } from "enzyme";
import Root from "../Root";

describe("Search", () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <SearchBar />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("has a two divs and one inputs", () => {
    expect(wrapped.find("div").length).toEqual(2);
    expect(wrapped.find("input").length).toEqual(1);
  });
});
