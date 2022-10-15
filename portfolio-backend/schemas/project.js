export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            name:'github',
            title: 'Github',
            type: 'url'
        },
        {
            title: "Technologies",
            name: "technology",
            type: "array",
            of: [
              {
                type: "reference",
                to: [
                  { type: "technology" },
                  // etc
                ],
              },
            ],
          },
        {
            title: "Categories",
            name: "category",
            type: "array",
            of: [
              {
                type: "reference",
                to: [
                  { type: "category" },
                  // etc
                ],
              },
            ],
          },
    ]
}