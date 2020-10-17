import React from "react";
import {mount} from "enzyme";
import HookCounter from "./HookCounter";

describe("<HookCounter />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<HookCounter />);
    expect(wrapper).toMatchSnapshot();
  });

  it("increase", () => {
    const wrapper = mount(<HookCounter />);
    const plusButton = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "+1"
    );

    plusButton.simulate("click");
    plusButton.simulate("click");

    const number = wrapper.find("h2");

    expect(number.text()).toBe("2");
  });

  it("decrease", () => {
    const wrapper = mount(<HookCounter />);
    const minusButton = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "-1"
    );

    minusButton.simulate("click");
    minusButton.simulate("click");

    const number = wrapper.find("h2");

    expect(number.text()).toBe("-2");
  });
});
