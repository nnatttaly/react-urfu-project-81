import Tag from "./Tag";

export type FormTemplate = {
  [field: string]: string | number;
};

export type FormOptions = {
  url?: string;
};

export default class HexletCode {
  static formFor(template: FormTemplate, options: FormOptions, f: () => void) {
    return new Tag("form", {
      action: options.url ?? "#",
      method: "post",
    }).toString();
  }
}
