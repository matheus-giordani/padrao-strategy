import ContextStrategy from "./src/base/contextStrategy.js";
import PostgresStrategy from './src/strategies/postgresStrategy.js'
import MongoDBStrategy from './src/strategies/mongoDBStrategy.js'

const postgresConnectionString = "postgres://user:123@localhost:5432/db"
const postgresContext = new ContextStrategy(new PostgresStrategy(postgresConnectionString))
await postgresContext.connect()

const mongoDBConnectionString = "mongodb://user:admin@localhost:27017/db"
const mongoDBContext = new ContextStrategy(new MongoDBStrategy(mongoDBConnectionString))
await mongoDBContext.connect()

const data = [
    {
        name: 'testePostgres',
        type: 'transaction'
    },
    {
        name: 'testeMongo',
        type: 'activityLog'
    }
]

const contextTypes = {
    transaction : postgresContext,
    activityLog: mongoDBContext
}


for(const {name, type} of data){
    const context = contextTypes[type]
    await context.create({name: name + new Date()})
    console.log(type, await context.read())
}