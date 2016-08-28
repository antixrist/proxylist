"use strict"
const expect = require("unexpected")
const R = require("ramda")
const tested = require("./main")
describe("proxylist", () => {
    it("main", (done) => {
        tested.main().then((incoming) => {
            expect(incoming, "to be an array")
            expect(incoming.length, "to be greater than", 5)
            expect(addressFn(incoming), "to be", true)
            done()
        })
    })
    it("second", (done) => {
        tested.second().then((incoming) => {
            expect(incoming, "to be an array")
            expect(incoming.length, "to be greater than", 10)
            expect(addressFn(incoming), "to be", true)
            done()
        })
    })
})

function addressFn(addressArr) {

    let flag = true
    addressArr.map((address) => {
        let state = R.match(/(?:[0-9\.\:])/g, address)
        if (state.length !== address.length) {
            flag = false
        }
    })
    return flag
}
