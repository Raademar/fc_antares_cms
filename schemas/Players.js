export default {
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
}
