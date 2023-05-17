import { describe, it, vi } from "vitest";
import { requestInterval } from "../src/Interval";

describe('interval test', () => {
  it('interval test', async () => {
    let i = 0
    requestInterval(() => console.log(++i), 50)
    vi.runOnlyPendingTimers()
  });
}
);
