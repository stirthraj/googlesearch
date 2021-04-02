import { mount, shallow } from "enzyme";
import App from "./App";
import SearchData from "./components/SearchData";
import SearchResult from "./components/SearchResult";
import React from "react";
import renderer from "react-test-renderer";

describe("Testing",()=>{
  test("adds 1 + 2 to equal 3", () => {
    expect(1+2).toBe(3);
  });

  test("object testing", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });

  test("adding positive numbers is not zero", () => {
    for (let a = 0; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  test("numbers null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
  });

  test("tobelessthanorequal testing", () => {
    const value = 2 + 2;
    expect(value).toBeLessThanOrEqual(4);
  });

  test("string match", () => {
    expect("tirth").toMatch(/[a-z]/);
    expect("trithraj").not.toMatch(/I/);
  });

  const data = ["tir", "tirth", "hii"];

  test("the shopping list has tirth on it", () => {
    expect(data).toContain("tir");
  });


// //for element
  it("api fetch without Error", () => {
    const wrapper = shallow(<SearchResult />);
    const welcome = <h3>Search Results</h3>;
    expect(wrapper.contains(welcome)).toEqual(false);
  });
//for component
  it("App renders without crashing", () => {
    shallow(<App />);
  });

  test("SearchResult renders without crashing",()=>{
    shallow(<SearchResult/>);
  })
    test("SearchData renders without crashing", () => {
      shallow(<SearchData/>);
    });


    it("testing props", () => {
      const wrapper = mount(<SearchData data={data} />);
      expect(wrapper.props().data).toEqual(data);
    });
    it("contains users account email", () => {
      const wrapper = mount(<SearchData data={data} />);
      const value = wrapper.find(".container").text();
      expect(value).not.toEqual("");
    });
    //state checking
it.skip("SearchData renders correctly with no error message", () => {
  const wrapper = mount(<SearchData/>);
  expect(wrapper.state("error")).toEqual(undefined);
});

//snapshot testing

it("Snapshot SearchResult correctly", () => {
  const tree = renderer
    .create(<SearchResult/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Snapshot SearchData correctly", () => {
  const tree = renderer.create(<SearchData />).toJSON();
  expect(tree).toMatchSnapshot();
});



});