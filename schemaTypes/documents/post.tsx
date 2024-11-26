import { defineField, defineType } from "sanity";
import { Text } from "@sanity/ui";

const HeadingStyle = {
  marginTop: "-1.5rem",
  borderBottom: "1px dashed #000",
  paddingBottom: "50px",
  paddingTop: "50px",
  paddingLeft: "70px",
};

const HeadingListStyle = {
  margin: "0",
  borderBottom: "1px dashed #000",
  paddingBottom: "5px",
  paddingTop: "5px",
  paddingLeft: "7px",
};

const TextStyle = {
  fontSize: "28px",
  fontWeight: 600,
};

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            {
              title: "Normal Heading",
              value: "normalHeading",
              component: (props) => {
                return (
                  <div style={HeadingStyle}>
                    <Text style={TextStyle}>{props.children}</Text>
                  </div>
                );
              },
            },
            {
              title: "Conditional Heading",
              value: "conditionalHeading",
              component: (props) => {
                return (
                  <div style={Array.isArray(props.children) ? HeadingStyle : HeadingListStyle}>
                    <Text style={TextStyle}>{props.children}</Text>
                  </div>
                );
              },
            },
          ],
        },
      ],
    }),
  ],
});
