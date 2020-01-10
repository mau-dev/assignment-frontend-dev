import { paginator } from "./pagination";

test("when page 1 is active, it just renders up to four more pages", () => {
  let result = paginator(1, 1);
  expect(result).toEqual([1]);

  result = paginator(1, 2);
  expect(result).toEqual([1, 2]);

  result = paginator(1, 3);
  expect(result).toEqual([1, 2, 3]);

  result = paginator(1, 4);
  expect(result).toEqual([1, 2, 3, 4]);

  result = paginator(1, 5);
  expect(result).toEqual([1, 2, 3, 4, 5]);

  result = paginator(1, 6);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test("when we are near the left edge of the range, pages start from 1", () => {
  let result = paginator(2, 10);
  expect(result).toEqual([1, 2, 3, 4, 5]);

  result = paginator(3, 10);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test("in most cases, we see two pages before and after the current page", () => {
  let result = paginator(4, 10);
  expect(result).toEqual([2, 3, 4, 5, 6]);

  result = paginator(5, 10);
  expect(result).toEqual([3, 4, 5, 6, 7]);

  result = paginator(6, 10);
  expect(result).toEqual([4, 5, 6, 7, 8]);

  result = paginator(7, 10);
  expect(result).toEqual([5, 6, 7, 8, 9]);

  result = paginator(8, 10);
  expect(result).toEqual([6, 7, 8, 9, 10]);
});

test("when we are near the right edge of the range, pages end at the last page", () => {
  let result = paginator(9, 10);
  expect(result).toEqual([6, 7, 8, 9, 10]);

  result = paginator(10, 10);
  expect(result).toEqual([6, 7, 8, 9, 10]);
});
