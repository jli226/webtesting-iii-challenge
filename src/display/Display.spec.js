// Test away!
import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import "jest-dom/extend-expect";

import Display from "./Display";

// shows the display
describe("<Display />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});

// defaults to unlocked and open
describe("<Display />", () => {
  it("defaults to unlocked and open", () => {
    const { getByText } = render(<Display />);

    const unlocked = getByText(/^unlocked$/i);
    const open = getByText(/open/i);

    expect(unlocked).toBeTrue;
    expect(open).toBeTrue;
  });
});

// displays 'Closed' if the closed prop is true
describe("<Display />", () => {
  it("displays 'Closed' if the closed prop is true", () => {
    const { getByText } = render(<Display closed={true} />);
    const closed = getByText(/^Closed$/i);
    expect(closed).toBeTrue;
  });
});

// displays 'Open' if the closed prop is !true
describe("<Display />", () => {
  it("displays 'Open' if the closed prop is false", () => {
    const { getByText } = render(<Display closed={!true} />);
    const open = getByText(/^Open$/i);
    expect(open).toBeTrue;
  });
});

// displays 'Locked' if the locked prop is true
describe("<Display />", () => {
  it("displays 'Locked' if the locked prop is true", () => {
    const { getByText } = render(<Display locked={true} />);
    const locked = getByText(/^Locked$/i);
    expect(locked).toBeTrue;
  });
});

// displays 'Unlocked' if the locked prop is !true
describe("<Display />", () => {
  it("displays 'Unlocked' if the locked prop is true", () => {
    const { getByText } = render(<Display locked={!true} />);
    const unlocked = getByText(/^Unlocked$/i);
    expect(unlocked).toBeTrue;
  });
});

// when locked use the red-led class
describe("<Display />", () => {
  it("when locked use the red-led class", () => {
    const { getByText } = render(<Display locked={true} />);

    const lockedDiv = getByText(/^Locked$/i);
    expect(lockedDiv).toHaveClass("led red-led");
  });
});

// when closed use the red-led class
describe("<Display />", () => {
  it("when closed use the red-led class", () => {
    const { getByText } = render(<Display closed={true} />);

    const closedDiv = getByText(/^Closed$/i);
    expect(closedDiv).toHaveClass("led red-led");
  });
});

// when unlocked use the green-led class
describe("<Display />", () => {
  it("when unlocked use the green-led class", () => {
    const { getByText } = render(<Display locked={false} />);

    const unlockedDiv = getByText(/^Unlocked$/i);
    expect(unlockedDiv).toHaveClass("led green-led");
  });
});

// when open use the green-led class
describe("<Display />", () => {
  it("when open use the green-led class", () => {
    const { getByText } = render(<Display closed={false} />);

    const openDiv = getByText(/^Open$/i);
    expect(openDiv).toHaveClass("led green-led");
  });
});
