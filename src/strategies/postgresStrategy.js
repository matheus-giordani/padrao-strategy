import knex from "knex"


export default class PostgresStrategy {
    #instance
    constructor(connectionString) {
        this.connectionString = connectionString
        //não é a melhor pratica guardar o nome da table na class
        this.table = "warrior"

    }

    async connect() {
        this.#instance = knex({
            client: 'pg',
            connection: this.connectionString
        })


        return this.#instance.raw('select 1+1 as result')

    }

    async create(item) {
        return this.#instance.insert(item).into(this.table)
    }

    async read(item) {
        return this.#instance.select().from(this.table)
    }
}