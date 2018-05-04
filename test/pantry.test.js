import { expect } from "chai"
import Pantry from "../lib/pantry"

describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry()

    it("has a stock", () => {
      expect(pantry.stock).to.eql({})
    })
  })

  describe("functions", () => {
    describe("stockCheck", () => {
      it("looks to see if an ingredient is in the pantry", () => {
        const pantry = new Pantry()
        expect(pantry.stockCheck("Cheese")).to.eq(0)
      })
    })

    describe("restock", () => {
      it("adds ingredient and amount to pantry", () => {
        const pantry = new Pantry()
        pantry.restock("Cheese", 10)

        expect(pantry.stock).to.eql({ Cheese: 10 })

        pantry.restock("Cheese", 20)
        expect(pantry.stock).to.eql({ Cheese: 30})
        expect(pantry.stockCheck("Cheese")).to.eql(30)
      })
    })
  })
})
