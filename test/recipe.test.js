import { expect } from "chai"
import Recipe from "../lib/recipe"
import Pantry from "../lib/pantry"

describe("Recipe", () => {
  describe("attributes", () => {
    const recipe = new Recipe("Pizza")

    it("has a name", () => {
      expect(recipe.name).to.equal("Pizza")
    })

    it("has ingredients", () => {
      expect(recipe.ingredients).to.eql({})
    })
  })

  describe("functions", () => {
    describe("addIngredient", () => {
      it("adds an ingredient and amount to ingredients", () => {
        const recipe = new Recipe("Pizza")
        expect(recipe.ingredients).to.eql({})

        recipe.addIngredient("cheese", 10)

        expect(recipe.ingredients).to.eql({ cheese: 10 })
      })
    })

    describe("ingredientTypes", () => {
      it("returns an empty array by default", () => {
        const recipe = new Recipe("Pizza")
        expect(recipe.ingredientTypes()).to.eql([])
      })

      it("returns an array of the ingredient types", () => {
        const recipe = new Recipe("Pizza")
        const ingredients = ["cheese", "flour"]
        ingredients.forEach((ingredient, index) => recipe.addIngredient(ingredient, 10 + index))

        expect(recipe.ingredientTypes()).to.eql(ingredients)
      })
    })

    describe("amountRequired", () => {
      it("returns 0 if ingredient DNE", () => {
        const recipe = new Recipe("Pizza")
        expect(recipe.amountRequired("cheese")).to.equal(0)
      })

      it("returns amount required for an ingredient", () => {
        const recipe = new Recipe("Pizza")
        recipe.addIngredient("cheese", 10)
        expect(recipe.amountRequired("cheese")).to.equal(10)
      })
    })
  })
})

describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry()

    it('has a stock that starts empty', () => {
      expect(pantry.stock).to.deep.equal({})
    })
  })

  describe("functions", () => {
    describe("stockCheck", () => {
      const pantry = new Pantry()

      it("returns 0 if the food does not exist in the pantry", () => {
        expect(pantry.stockCheck("Cheese")).to.equal(0)
      })

      it("returns the amount of the food if it does exist in the pantry", () => {
        pantry.restock("Cheese", 10)
        expect(pantry.stockCheck("Cheese")).to.equal(10)
      })
    })

    describe("restock", () => {
      it("adds an amount of a food to the pantry", () => {
        const pantry = new Pantry()

        pantry.restock("Cheese", 10)

        expect(pantry.stock).to.deep.equal({ "Cheese": 10 })
        expect(pantry.stockCheck("Cheese")).to.equal(10)

        pantry.restock("Cheese", 20)

        expect(pantry.stockCheck("Cheese")).to.equal(30)
      })
    })
  })
})
