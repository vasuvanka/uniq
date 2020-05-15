import { uniq } from "../src/uniq"


describe("Uniq", ()=>{
    it("uniq id generator", ()=>{
        const id = uniq()
        expect(id).not.toBe(null)
        expect(id.length).toBe(12)
    })
    it("no duplicate ids generator", ()=>{
        const id = uniq()
        const anotherId = uniq()
        expect(id).not.toBe(null)
        expect(id.length).toBe(12)
        expect(id).not.toBe(anotherId)
    })
})