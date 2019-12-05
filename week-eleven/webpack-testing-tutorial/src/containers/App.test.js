import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

// enzyme configured for react components
Enzyme.configure({ adapter: new Adapter() });

describe("Testing App Component", () => {
  test("renders", () => {
    const wrapper = shallow(<App />);
    // assertions
    expect(wrapper.exists()).toBe(true);
  });
});
