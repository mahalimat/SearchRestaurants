import React from "react";
import { mount } from "enzyme";
import App from "../App";
import SearchBar from "../SearchBar";
import Root from "../../Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

it("shows a search bar", () => {
  expect(wrapped.find(SearchBar).length).toEqual(1);
});
