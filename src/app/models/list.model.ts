import { Item } from "./item.model";

export interface List {
  id: number
  name: string
  isDeleted: boolean
  items: Item[];
}
