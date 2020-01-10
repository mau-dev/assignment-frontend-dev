import { getCurrentLocale } from "./i18n";

test("when no language is in the URL, it returns the default language `en`", () => {
  let result = getCurrentLocale("/");
  expect(result).toEqual("en");
});

test("when URL starts with `/en/` it should return `en`", () => {
  let result = getCurrentLocale("/en/");
  expect(result).toEqual("en");

  result = getCurrentLocale("/en/foobar/");
  expect(result).toEqual("en");
});

test("when URL starts with `/zh-cn/` it should return `zh-cn`", () => {
  let result = getCurrentLocale("/zh-cn/");
  expect(result).toEqual("zh-cn");

  result = getCurrentLocale("/zh-cn/foobar/");
  expect(result).toEqual("zh-cn");
});

test("when URL does not have language at the beginning, it returns the default langauge `en`", () => {
  let result = getCurrentLocale("/foobar/zh-cn/");
  expect(result).toEqual("en");
});
