export default {
    title: "Technology",
    name: "technology",
    type: "document",
    fields: [
      {
        title: "Title",
        name: "title",
        type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
      },
      {
        title: "Slug",
        name: "slug",
        type: "slug",
        options: {
          source: "title",
          auto: true,
        },
      },
    ],
  }
  