
export default class Pantry {
  constructor(){
    this.stock = {}
    this.shoppingList = {}
  }

  stockCheck(ingredientName){
    return this.stock[ingredientName] || 0
  }

  restock(ingredientName, amount){
    this.stock[ingredientName] = this.stockCheck(ingredientName) + amount
  }

  addToShoppingList(recipe){
    recipe.ingredientTypes().forEach(ingredient => {
      let currentAmount = this.shoppingList[ingredient] || 0
      let newAmount = currentAmount + recipe.amountRequired(ingredient)
      this.shoppingList[ingredient] = newAmount
    })
  }
}
