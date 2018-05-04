export default class Pantry {
  constructor(stock) {
    this.stock = {}
  }

  stockCheck(ingredientName) {
    return this.stock[ingredientName] || 0
  }

  restock(ingredientName, amount) {
    var totalAmount = this.stockCheck(ingredientName) + amount
    return this.stock[ingredientName] = totalAmount
  }

  addToShoppingList(recipe){
    var ingredients = recipe.ingredients;

    for (let [key, value] of Object.entries(ingredients)) {
      this.restock(key, value);
    }
  }

  shoppingList(){
    return this.stock
  }
}
