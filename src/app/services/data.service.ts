import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  LISTS: any[] = [
    {
      id: 1,
      name: 'Lista zakupów 🛒',
    },
    {
      id: 2,
      name: 'Projekty na WST',
    },
  ];

  ITEMS: any[] = [
    {
      id: 1,
      listId: 1,
      name: 'Bułki',
    },
    {
      id: 2,
      listId: 1,
      name: 'Masło',
    },
    {
      id: 3,
      listId: 1,
      name: 'Ser',
    },
    {
      id: 4,
      listId: 2,
      name: 'Grocery List APP',
    },
    {
      id: 5,
      listId: 2,
      name: 'Grocery List API',
    },
  ];

  constructor() {}
}
