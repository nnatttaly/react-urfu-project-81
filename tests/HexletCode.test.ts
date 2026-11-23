import { readFileSync } from "node:fs";
import { describe, expect, test } from "vitest";
import HexletCode from "../src/index.js";

const readFixture = (name: string) =>
  readFileSync(new URL(`./fixtures/${name}`, import.meta.url), "utf8").trimEnd();

describe("HexletCode.formFor", () => {
  const template = { name: "rob", job: "hexlet", gender: "m" };

  test("генерирует пустую форму с адресом по умолчанию", () => {
    const form = HexletCode.formFor(template, {}, () => {});

    expect(form).toBe(readFixture("empty-form.html"));
  });

  test("генерирует пустую форму с указанным адресом", () => {
    const form = HexletCode.formFor(template, { url: "/users" }, () => {});

    expect(form).toBe(readFixture("empty-form-custom-url.html"));
  });

  test("генерирует input и textarea в порядке добавления", () => {
    const form = HexletCode.formFor(template, { method: "post" }, (f) => {
      f.input("name");
      f.input("job", { as: "textarea" });
    });

    expect(form).toBe(readFixture("input-and-textarea.html"));
  });

  test("добавляет дополнительные атрибуты к указанному полю", () => {
    const form = HexletCode.formFor(template, {}, (f) => {
      f.input("name", { class: "user-input" });
      f.input("job");
    });

    expect(form).toBe(readFixture("inputs-with-attributes.html"));
  });

  test("генерирует textarea с размерами по умолчанию", () => {
    const form = HexletCode.formFor(template, {}, (f) => f.input("job", { as: "textarea" }));

    expect(form).toBe(readFixture("textarea-default.html"));
  });

  test("переопределяет размеры textarea", () => {
    const form = HexletCode.formFor(template, { url: "#" }, (f) =>
      f.input("job", { as: "textarea", rows: 50, cols: 50 }),
    );

    expect(form).toBe(readFixture("textarea-custom.html"));
  });

  test("генерирует поля с пустыми значениями", () => {
    const form = HexletCode.formFor({ name: "", job: "" }, {}, (f) => {
      f.input("name");
      f.input("job", { as: "textarea" });
    });

    expect(form).toBe(readFixture("empty-field-values.html"));
  });

  test("выбрасывает ошибку, если поля нет в шаблоне", () => {
    expect(() =>
      HexletCode.formFor(template, { url: "/users" }, (f) => {
        f.input("name");
        f.input("job", { as: "textarea" });
        f.input("age");
      }),
    ).toThrow("Field 'age' does not exist in the template.");
  });
});
