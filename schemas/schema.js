// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import the schemas
import players from './Players'
import positions from './Positions'
import games from './Games'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'players',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    players,
    positions,
    games
  ])
})
