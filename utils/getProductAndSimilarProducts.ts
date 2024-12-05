import { productsJSONData } from "constants/productsArray"
import { ProductType } from "types"
interface Product{
    id:string|number 
}
export const getProductWithId = (arg:Product) => {
    const {id}=arg
    let items = {}
    let found: ProductType | null = null;
    let similarProducts :ProductType[] = []
    productsJSONData.map((item, index) => {
      items[index + 1] = item.items;
    })
    for (const key in items) {
      if (items[key] && items[key].find(item => item.id == id)) {
        found = items[key].find(item => item.id == id)
        similarProducts = items[key]
      }
    }
    return { found, similarProducts }
  }