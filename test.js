"use strict"
const expect = require("unexpected")
const tested = require("./proxylist")
describe("proxylist", () => {
    it("main", (done) => {
        tested.main().then((incoming) => {
            expect(incoming, "to be an array")
            expect(incoming.length, "to be greater than", 5)
            expect(incoming[0], "to contain", ":")
            expect(incoming[0].length, "to be greater than", 10)
            done()
        })
    })
    it("first", (done) => {
        tested.first().then((incoming) => {
            expect(incoming, "to be an array")
            expect(incoming.length, "to be greater than", 10)
            expect(incoming[0], "to contain", ":")
            expect(incoming[0].length, "to be greater than", 10)
            done()
        })
    })
    it("second", (done) => {
        tested.second().then((incoming) => {
            expect(incoming, "to be an array")
            expect(incoming.length, "to be greater than", 10)
            expect(incoming[0], "to contain", ":")
            expect(incoming[0].length, "to be greater than", 10)
            done()
        })
    })
})