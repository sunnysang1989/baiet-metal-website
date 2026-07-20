import { defineConfig } from "tinacms";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "7bec5977-a895-45cc-9b91-ad81e833eb84",
  token: "9abb4b15ddb8598ede6e5ec0c0b66230726af6d1",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "product",
        label: "Products",
        path: "content/products",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "shortName",
            label: "Short Name",
          },
          {
            type: "string",
            name: "headline",
            label: "Headline",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "string",
            name: "keywords",
            label: "Keywords",
            list: true,
          },
          {
            type: "string",
            name: "bullets",
            label: "Bullets",
            list: true,
          },
          {
            type: "string",
            name: "specs",
            label: "Specs",
            list: true,
          },
        ],
      },
      {
        name: "news",
        label: "News",
        path: "content/news",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "string",
            name: "description",
            label: "Summary",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
