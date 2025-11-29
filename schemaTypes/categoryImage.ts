import { defineField, defineType } from 'sanity'

export const categoryImageType = defineType({
  name: 'categoryImage',
  title: 'Category Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Descriptive name for the image (e.g., "Weight Loss Category Banner")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for accessibility',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: title,
        media: media,
      }
    },
  },
})
