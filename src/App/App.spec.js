import React from 'react'
import App from './App'
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
const setUp = (props) => shallow(<App {...props} />);

describe("App", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test("should contain .App wrapper", () => {
    const wrapper = component.find(".App");
    expect(wrapper.length).toBe(1);
  });
})

describe("App render", () => {
  test("render", () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot()
  });
})


