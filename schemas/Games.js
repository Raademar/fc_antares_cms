export default {
  title: 'Games',
  name: 'games',
  type: 'document',
  fields: [
    {
      title: 'Home team',
      name: 'home_team',
      type: 'string'
    },
    {
      title: 'Away team',
      name: 'away_team',
      type: 'string'
    },
    {
      title: 'Where is it played?',
      name: 'where',
      type: 'string'
    },
    {
      title: 'At what time?',
      name: 'time',
      type: 'datetime'
    },
    {
      title: 'Scores',
      name: 'scores',
      type: 'object',
      fields: [
        { name: 'home_team_goals', type: 'number', title: 'Home team goals' },
        { name: 'away_team_goals', type: 'number', title: 'Away team goals' }
      ]
    },
    {
      title: 'Players attending',
      name: 'players_attending',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'players' }] }]
    },
    {
      title: 'Players declined',
      name: 'players_declined',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'players' }] }]
    },
    {
      title: 'Players uncertain',
      name: 'players_uncertain',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'players' }] }]
    }
  ]
}
