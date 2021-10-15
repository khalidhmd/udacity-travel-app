const rewire = require("rewire")
const server = rewire("./server")
const getGeoData = server.__get__("getGeoData")
const getPixaBayData = server.__get__("getPixaBayData")
// @ponicode
describe("getGeoData", () => {
    test("0", async () => {
        await getGeoData(-10)
    })

    test("1", async () => {
        await getGeoData("Skhirat")
    })

    test("2", async () => {
        await getGeoData("Paris")
    })

    test("3", async () => {
        await getGeoData(1)
    })

    test("4", async () => {
        await getGeoData("New York")
    })

    test("5", async () => {
        await getGeoData(-Infinity)
    })
})

// @ponicode
describe("getPixaBayData", () => {
    test("0", async () => {
        await getPixaBayData(-10)
    })

    test("1", async () => {
        await getPixaBayData(0)
    })

    test("2", async () => {
        await getPixaBayData("New York")
    })

    test("3", async () => {
        await getPixaBayData(10)
    })

    test("4", async () => {
        await getPixaBayData("Skhirat")
    })

    test("5", async () => {
        await getPixaBayData(-Infinity)
    })
})
