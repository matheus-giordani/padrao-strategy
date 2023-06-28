import MongoDB from 'mongodb'

export default class MongoDBStrategy {
    #instance
    constructor(connectionString){
        const {pathname: dbname} = new URL(connectionString)
        this.connectionString = connectionString.replace(dbname, '')
        this.collection = "warriors"
        this.db = dbname.replace(/\W/,'')
    }

    async connect(){
        const client = new MongoDB.MongoClient(this.connectionString, {
            useUnifiedTopology: true
        })
        await client.connect()
        this.#instance = client.db(this.db).collection(this.collection)
    }

    async create(item){
        return this.#instance.insertOne(item)
    }

    async read(item){
        return this.#instance.find(item).toArray()
    }
}