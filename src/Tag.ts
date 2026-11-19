const VOID_HTML_TAGS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "source",
  "track",
  "wbr",
]);

export type TAttributes = {
  [key: string]: string | number;
};

export default class Tag {
  constructor(
    private readonly tag: string,
    private readonly attributes: TAttributes = {},
    private readonly text: string = "",
  ) {}

  toString() {
    const parts = [`<${this.tag}`];

    for (const [attrName, value] of Object.entries(this.attributes)) {
      parts.push(` ${attrName}="${value}"`);
    }

    parts.push(">");

    if (!VOID_HTML_TAGS.has(this.tag)) {
      parts.push(this.text);
      parts.push(`</${this.tag}>`);
    }

    return parts.join("");
  }
}
