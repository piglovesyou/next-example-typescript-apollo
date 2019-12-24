const withSass = require('@zeit/next-sass')
const withTypeScriptGraphQL = require('./with-typescript-graphql')

module.exports = withTypeScriptGraphQL(withSass())
