import { describe, expect, test } from "vitest";
import HexletCode from "../src/index.js";

describe("HexletCode.formFor", () => {
  const template = { name: "rob", job: "hexlet", gender: "m" };

  test("генерирует пустую форму с адресом по умолчанию", () => {
    const form = HexletCode.formFor(template, {}, () => {});

    expect(form).toBe('<form action="#" method="post"></form>');
  });

  test("генерирует пустую форму с указанным адресом", () => {
    const form = HexletCode.formFor(template, { url: "/users" }, () => {});

    expect(form).toBe('<form action="/users" method="post"></form>');
  });
});
