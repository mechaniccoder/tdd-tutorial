import React from "react";
import {render, fireEvent} from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("<TodoForm />", () => {
  const set = (props = {}) => {
    const utils = render(<TodoForm {...props} />);
    const {getByText, getByPlaceholderText} = utils;
    const input = getByPlaceholderText("할 일을 입력하세요.");
    const button = getByText("등록");

    return {...utils, input, button};
  };

  it("has input and a button", () => {
    const {input, button} = set();

    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("changes input", () => {
    const {input} = set();

    fireEvent.change(input, {
      target: {
        value: "tdd 배우기",
      },
    });
    expect(input).toHaveAttribute("value", "tdd 배우기");
  });

  it("calls onInsert and clears input", () => {
    const onInsert = jest.fn();
    const {input, button} = set({onInsert});

    fireEvent.change(input, {
      target: {
        value: "tdd 배우기",
      },
    });
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("tdd 배우기");
    expect(input).toHaveAttribute("value", "");
  });
});
