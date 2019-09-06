import React from "react";
import About from "./About";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("About", () => {
  it("displays about page", () => {
    const wrapper = shallow(<About />);
    const heading = wrapper.find("h1").text();
    expect(heading).toEqual("About");
  });

  it("matches the snapshot", () => {
    const tree = renderer.create(<About />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
