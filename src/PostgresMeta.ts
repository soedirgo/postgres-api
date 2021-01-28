import { init } from './db'
import PostgresMetaColumn from './PostgresMetaColumn'
import PostgresMetaConfig from './PostgresMetaConfig'
import PostgresMetaExtension from './PostgresMetaExtension'
import PostgresMetaFunction from './PostgresMetaFunction'
import PostgresMetaPolicy from './PostgresMetaPolicy'
import PostgresMetaPublication from './PostgresMetaPublication'
import PostgresMetaRole from './PostgresMetaRole'
import PostgresMetaSchema from './PostgresMetaSchema'
import PostgresMetaTable from './PostgresMetaTable'
import PostgresMetaType from './PostgresMetaType'
import PostgresMetaVersion from './PostgresMetaVersion'

export default class PostgresMeta {
  query: Function
  column: PostgresMetaColumn
  config: PostgresMetaConfig
  extension: PostgresMetaExtension
  function: PostgresMetaFunction
  policy: PostgresMetaPolicy
  publication: PostgresMetaPublication
  role: PostgresMetaRole
  schema: PostgresMetaSchema
  table: PostgresMetaTable
  type: PostgresMetaType
  version: PostgresMetaVersion

  constructor(connectionString: string) {
    this.query = init(connectionString)
    this.column = new PostgresMetaColumn(this.query)
    this.config = new PostgresMetaConfig(this.query)
    this.extension = new PostgresMetaExtension(this.query)
    this.function = new PostgresMetaFunction(this.query)
    this.policy = new PostgresMetaPolicy(this.query)
    this.publication = new PostgresMetaPublication(this.query)
    this.role = new PostgresMetaRole(this.query)
    this.schema = new PostgresMetaSchema(this.query)
    this.table = new PostgresMetaTable(this.query)
    this.type = new PostgresMetaType(this.query)
    this.version = new PostgresMetaVersion(this.query)
  }
}
