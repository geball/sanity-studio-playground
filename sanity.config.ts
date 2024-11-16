import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'playground',

  projectId: 'qwhul4zk',
  dataset: 'testing',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
