import { describe, expect, test } from "vitest";
import Tag from "../src/Tag.js";

describe("Tag", () => {
  test("генерирует одинарный тег без атрибутов", () => {
    const tag = new Tag("br");

    expect(tag.toString()).toBe("<br>");
  });
  test("генерирует одинарный тег с атрибутом", () => {
    const tag = new Tag("img", { src: "path/to/image" });

    expect(tag.toString()).toBe('<img src="path/to/image">');
  });

  test("генерирует одинарный тег с несколькими атрибутами", () => {
    const tag = new Tag("input", { type: "submit", value: "Save" });

    expect(tag.toString()).toBe('<input type="submit" value="Save">');
  });

  test("генерирует парный тег с текстом", () => {
    const tag = new Tag("label", {}, "Email");

    expect(tag.toString()).toBe("<label>Email</label>");
  });

  test("генерирует парный тег с атрибутом и текстом", () => {
    const tag = new Tag("label", { for: "email" }, "Email");

    expect(tag.toString()).toBe('<label for="email">Email</label>');
  });

  test("генерирует парный тег без содержимого", () => {
    const tag = new Tag("div");

    expect(tag.toString()).toBe("<div></div>");
  });
});
