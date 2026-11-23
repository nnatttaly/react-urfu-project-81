import FormBuilder from "./FormBuilder.js";
import Tag from "./Tag.js";

export type FormTemplate = {
  [field: string]: string;
};

export type FormOptions = {
  url?: string;
  method?: string;
};

export default class HexletCode {
  static formFor(template: FormTemplate, options: FormOptions, callback: (f: FormBuilder) => void) {
    const formBuilder = new FormBuilder(template);
    callback(formBuilder);

    return new Tag(
      "form",
      {
        method: options.method ?? "post",
        action: options.url ?? "#",
      },
      formBuilder.toString(),
    ).toString();
  }
}
