import React from "react";
import {expect} from "vitest"
import { render, screen, renderHook } from "@testing-library/react";
import useTimeConverter from "../useTimeConverter";

describe("useTimeConverter", () => {
  test("should convert 4994000 milliseconds to '1:23:14'", () => {
    const timeString = renderHook(() => useTimeConverter(4994000));

    render(<div>{timeString.result.current}</div>);
    const result = screen.getByText("1:23:14");
    expect(result).toBeDefined()
  });
});
