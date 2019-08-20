// Test away!
import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";

import Controls from "./Controls";

// shows the controls
describe("<Controls />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});

// cannot be closed or opened if it is locked
describe("<Controls />", () => {
  it("cannot be closed or opened if it is locked", () => {
    const { getByText } = render(<Controls locked={true} closed={true} />);

    const openGate = getByText(/^Open Gate$/i);
    expect(openGate.closest("button")).toHaveAttribute("disabled");
  });
});

// provide button to toggle the closed state
describe("<Controls />", () => {
  it("provide button to toggle the closed state", () => {
    const { getByText } = render(<Controls />);

    const closeButton = getByText(/^Close Gate$/i);
    expect(closeButton).toBeTrue;
  });
});

// provide button to toggle the locked state
describe("<Controls />", () => {
  it("provide button to toggle the locked state", () => {
    const { getByText } = render(<Controls />);

    const closeButton = getByText(/^Close Gate$/i);
    fireEvent.click(closeButton);

    const lockButton = getByText(/^Lock Gate$/i);
    expect(lockButton).toBeTrue;
  });
});

// close button text changes to reflect the state the door will be in if clicked

// tests if mock function is called on a click
describe("<Controls />", () => {
  it("tests if toggleClosed / mock function is called on a click", () => {
    const mockFunction = jest.fn();
    const { getByText } = render(<Controls toggleClosed={mockFunction} />);

    const closeButton = getByText(/^Close Gate$/i);

    fireEvent.click(closeButton);

    expect(mockFunction).toHaveBeenCalled();
  });
});

// tests if button text is Open Gate when closed is true
describe("<Controls />", () => {
  it("tests if button text is Open Gate when closed is true", () => {
    const { getByText } = render(<Controls closed={true} />);

    const openButton = getByText(/^Open Gate$/i);

    expect(openButton).toHaveTextContent(/^Open Gate$/i);
  });
});

// tests if button text is Close Gate when closed is false
describe("<Controls />", () => {
  it("tests if button text is Close Gate when closed is false", () => {
    const { getByText } = render(<Controls closed={false} />);

    const closeButton = getByText(/^Close Gate$/i);

    expect(closeButton).toHaveTextContent(/^Close Gate$/i);
  });
});

// the closed toggle button is disabled if the gate is locked
describe("<Controls />", () => {
  it("the closed toggle button is disabled if the gate is locked", () => {
    const { getByText } = render(<Controls locked={true} />);

    const closeButton = getByText(/^Close Gate$/i);
    expect(closeButton).toHaveAttribute("disabled");
  });
});

// the locked toggle button is disabled if the gate is open
describe("<Controls />", () => {
  it("the locked toggle button is disabled if the gate is open", () => {
    const { getByText } = render(<Controls closed={false} />);

    const lockButton = getByText(/^Lock Gate$/i);
    expect(lockButton).toHaveAttribute("disabled");
  });
});
