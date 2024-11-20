import { defineField, defineType } from "sanity";

export const cdr = defineType({
  name: "cdr",
  title: "Cross-Dataset References",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "reference",
      title: "Reference",
      type: "reference",
      to: [{ type: "cdr" }],
    }),
    defineField({
      name: "crossDatasetReference",
      title: "Cross-Dataset Reference",
      type: "crossDatasetReference",
      dataset: process.env.SANITY_STUDIO_DATASET || "",
      to: [{ type: "cdr", preview: { select: { title: "title" } } }],
    }),
  ],
});
