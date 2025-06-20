import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
        {
          label: 'Pastel',
          value: 'pastel',
        },
      ],
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      label: 'PROUT PROUT',
      admin: {
        placeholder: 'Ex: Nom',
      },
    },
    {
      name: 'surname',
      type: 'text',
      label: 'PROUT PROUTv',
      admin: {
        placeholder: 'Ex: Prénom',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'PROUT PROUT',
      admin: {
        placeholder: 'Ex: Développeur web',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Phrase d\'accroche',
      admin: {
        placeholder: 'Ex: Bienvenue sur mon portfolio...'
      },
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
  ],
  label: false,
}
