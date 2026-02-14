import { defineType, defineArrayMember } from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineArrayMember({
      name: 'videoEmbed',
      title: 'Video Embed',
      type: 'object',
      fields: [
        {
          name: 'videoType',
          title: 'Video Type',
          type: 'string',
          options: {
            list: [
              { title: 'YouTube', value: 'youtube' },
              { title: 'Vimeo', value: 'vimeo' },
              { title: 'Direct URL', value: 'url' },
            ],
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'videoUrl',
          title: 'Video URL',
          type: 'url',
          description: 'For YouTube: paste the full URL (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ or https://youtu.be/dQw4w9WgXcQ). For Vimeo: https://vimeo.com/VIDEO_ID',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          description: 'Optional: Add a caption below the video',
        },
      ],
      preview: {
        select: {
          videoType: 'videoType',
          videoUrl: 'videoUrl',
        },
        prepare({ videoType, videoUrl }) {
          return {
            title: `${videoType?.toUpperCase() || 'Video'} Embed`,
            subtitle: videoUrl,
          }
        },
      },
    }),
    defineArrayMember({
      name: 'gifEmbed',
      title: 'GIF Embed',
      type: 'object',
      fields: [
        {
          name: 'gifUrl',
          title: 'GIF URL',
          type: 'url',
          description: 'Paste the GIF URL from Giphy, Tenor, or direct GIF link',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the GIF for accessibility',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          description: 'Optional: Add a caption below the GIF',
        },
        {
          name: 'size',
          title: 'Size',
          type: 'string',
          options: {
            list: [
              { title: 'Small', value: 'small' },
              { title: 'Medium', value: 'medium' },
              { title: 'Large', value: 'large' },
              { title: 'Full Width', value: 'full' },
            ],
          },
          initialValue: 'medium',
        },
      ],
      preview: {
        select: {
          gifUrl: 'gifUrl',
          alt: 'alt',
        },
        prepare({ gifUrl, alt }) {
          return {
            title: 'GIF Embed',
            subtitle: alt || gifUrl,
          }
        },
      },
    }),
    defineArrayMember({
      type: 'table',
    }),
  ],
})

