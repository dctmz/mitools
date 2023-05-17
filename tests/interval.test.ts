import { describe, it, vi } from "vitest";
import { requestInterval } from "../src/interval";

describe('interval test', () => {
  it('interval test', async () => {
    vi.useFakeTimers()
    let i = 0
    requestInterval(() => console.log(++i), 50)
    vi.runOnlyPendingTimers()
  });
}
);
