import { describe, it, beforeEach, jest, expect } from '@jest/globals'
import PostgresStrategy from '../../src/strategies/postgresStrategy';
import knex from 'knex';




describe('PostgresStrategy', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        
    });

    it('connect should establish a connection to the PostgreSQL database', async () => {
        const spyKnex = jest.spyOn(knex.prototype, "constructor").mockResolvedValue({teste:'teste'})
        const connectionString = "postgres://user:123@localhost:5432/db"
        const strategy = new PostgresStrategy(connectionString)
        await strategy.connect();

        expect(spyKnex).toBeCalledWith({
            client: 'pg',
            connection: connectionString,
        })
        
    });
});