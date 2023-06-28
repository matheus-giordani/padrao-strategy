import {describe, it, beforeEach, jest, expect} from '@jest/globals'
import ContextStrategy from '../../src/base/contextStrategy.js'

describe('#ContextStrategy', ()=>{
    class MockDbStrategy {
        connect(){ return true}
        create(){}
        read(){}
    }
    beforeEach(()=>{
        jest.clearAllMocks()

    })
    it('#ContextStrategy.connect', ()=>{
        

        const spyMockDbStrategy = jest.spyOn(MockDbStrategy.prototype, MockDbStrategy.prototype.connect.name )
        const mockContextStrategy = new ContextStrategy(new MockDbStrategy())
        mockContextStrategy.connect()
        expect(spyMockDbStrategy).toBeCalled        

    })

    it('#ContextStrategy.create', ()=>{
        

        const spyMockDbStrategy = jest.spyOn(MockDbStrategy.prototype, MockDbStrategy.prototype.create.name )
        const mockContextStrategy = new ContextStrategy(new MockDbStrategy())
        const item = {}
        mockContextStrategy.create(item)
        expect(spyMockDbStrategy).toBeCalledWith(item)

    })
    it('#ContextStrategy.read', ()=>{
        

        const spyMockDbStrategy = jest.spyOn(MockDbStrategy.prototype, MockDbStrategy.prototype.read.name )
        const mockContextStrategy = new ContextStrategy(new MockDbStrategy())
        const item = {}
        mockContextStrategy.read(item)
        expect(spyMockDbStrategy).toBeCalledWith(item)

    })
})