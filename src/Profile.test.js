import React from "react";
import {mount} from "enzyme";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<Profile username="mechaniccoder" name="유승환" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders username and name", () => {
    const wrapper = mount(<Profile username="mechaniccoder" name="유승환" />);
    expect(wrapper.props().username).toBe("mechaniccoder");
    expect(wrapper.props().name).toBe("유승환");

    const boldElement = wrapper.find("b");
    expect(boldElement.text()).toBe("mechaniccoder");

    const spanElement = wrapper.find("span");
    expect(spanElement.text()).toBe("유승환");
  });
});
