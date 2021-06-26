import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item.model';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) {}

  async getAllLists(): Promise<List[]> {
    const url = `${environment.apiUrl}/list/all`;
    return await this.http.get<List[]>(url, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    }).toPromise();
  }

  async getListById(id: number): Promise<List> {
    const url = `${environment.apiUrl}/list`;
    return await this.http.get<List>(url, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      params: {
        id
      }
    }).toPromise();
  }

  async getListItems(listId: number): Promise<Item[]> {
    const url = `${environment.apiUrl}/item/fromlist`;
    return await this.http.get<Item[]>(url, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      params: {
        id: listId
      }
    }).toPromise();
  }

  async getItemById(id: number): Promise<Item> {
    const url = `${environment.apiUrl}/item`;
    return await this.http.get<Item>(url, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      params: {
        id
      }
    }).toPromise();
  }

  async addItem(newItem: Item): Promise<boolean> {
    const url = `${environment.apiUrl}/item`;
    return await this.http.post<boolean>(url, newItem, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    }).toPromise();
  }

  async addList(newList: List): Promise<boolean> {
    const url = `${environment.apiUrl}/list`;
    return await this.http.post<boolean>(url, newList, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    }).toPromise();
  }

  async updateItem(updatedItem: Item): Promise<boolean> {
    const url = `${environment.apiUrl}/item`;
    return await this.http.put<boolean>(url, updatedItem, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    }).toPromise();
  }

  async updateList(updatedList: List): Promise<boolean> {
    const url = `${environment.apiUrl}/list`;
    return await this.http.put<boolean>(url, updatedList, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    }).toPromise();
  }

  async removeItem(id: number): Promise<boolean> {
    const url = `${environment.apiUrl}/item`;
    return await this.http.delete<boolean>(url, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      params: {
        id
      }
    }).toPromise();
  }

  async removeList(id: number): Promise<boolean> {
    const url = `${environment.apiUrl}/list`;
    return await this.http.delete<boolean>(url, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      params: {
        id
      }
    }).toPromise();
  }
}
