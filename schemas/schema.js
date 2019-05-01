// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'players',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      title: 'Players',
      name: 'players',
      type: 'document',
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string'
        },
        {
          title: 'Position',
          name: 'position',
          type: 'reference',
          to: [{ type: 'positions' }]
        },
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              // Editing this field will be hidden behind an "Edit"-button
              name: 'attribution',
              type: 'string',
              title: 'Attribution'
            }
          ]
        }
      ]
    },
    {
      title: 'Positions',
      name: 'positions',
      type: 'document',
      fields: [
        {
          title: 'Position',
          name: 'position',
          type: 'string'
        }
      ]
    }
  ])
})
