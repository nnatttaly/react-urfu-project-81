import type { FormTemplate } from "./index.js";
import Tag, { type TagAttributes } from "./Tag.js";

export type FieldOptions = TagAttributes & {
  as?: "input" | "textarea";
};

export default class FormBuilder {
  private readonly fields: string[] = [];

  constructor(private readonly template: FormTemplate) {}

  input(name: string, options: FieldOptions = {}) {
    const value = this.getTemplateValue(name);
    const { as = "input", ...attributes } = options;
    const labelText = name.charAt(0).toUpperCase() + name.slice(1);
    const label = new Tag("label", { for: name }, labelText);
    const tag =
      as === "textarea"
        ? new Tag("textarea", { cols: 20, rows: 40, name, ...attributes }, value)
        : new Tag("input", { name, type: "text", value, ...attributes });

    this.fields.push(label.toString(), tag.toString());
  }

  submit(value: string = "Save") {
    this.fields.push(new Tag("input", { type: "submit", value }).toString());
  }

  toString() {
    return this.fields.join("");
  }

  private getTemplateValue(name: string) {
    if (!Object.hasOwn(this.template, name)) {
      throw new Error(`Field '${name}' does not exist in the template.`);
    }

    return this.template[name];
  }
}
