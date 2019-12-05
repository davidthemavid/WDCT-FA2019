import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchResults from "../components/SearchResults";

const mockArticles = [
  {
    webUrl: "http://www.google.ca",
    webTitle: "This is Google's HomePage"
  }
];
// configure enzyme for react components
Enzyme.configure({ adapter: new Adapter() });

// suite or collection of tests
describe("Testing SearchResults Component", () => {
  test("returns empty array when no props are passed", () => {
    const wrapper = shallow(<SearchResults />);
    // assertions
    expect(wrapper).toMatchSnapshot();
  });
  test("no <li> elements when no props are passed", () => {
    const wrapper = shallow(<SearchResults />);
    expect(wrapper.find("li")).toHaveLength(0);
  });
  test("renders one article", () => {
    const wrapper = mount(<SearchResults articles={mockArticles} />);
    expect(wrapper.find("li")).toHaveLength(1);
  });
  test("renders one article", () => {
    const wrapper = mount(<SearchResults articles={[]} />);
    expect(wrapper.find("li")).toHaveLength(0);
  });
});
