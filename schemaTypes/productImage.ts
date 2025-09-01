import { defineField, defineType } from 'sanity'

export const productImageType = defineType({
  name: 'productImage',
  title: 'Product Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Descriptive name for the image (e.g., "B12 Injection Vial")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Pills/Tablets', value: 'pills' },
          { title: 'Vials/Injections', value: 'vials' },
          { title: 'Capsules', value: 'capsules' },
          { title: 'Topical/Creams', value: 'topical' },
          { title: 'Liquid/Drops', value: 'liquid' },
          { title: 'Patches', value: 'patches' },
          { title: 'Other', value: 'other' },
        ],
      },
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
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Keywords to help match products to images (e.g., "b12", "vitamin", "injection")',
    }),
    defineField({
      name: 'mdiOfferingIds',
      title: 'MDI Offering IDs',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Optional: Specific MDI offering IDs that should use this image',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'image',
    },
    prepare(selection) {
      const { title, category, media } = selection
      return {
        title: title,
        subtitle: category ? `Category: ${category}` : '',
        media: media,
      }
    },
  },
})