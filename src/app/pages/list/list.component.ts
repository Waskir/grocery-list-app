import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { List } from 'src/app/models/list.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  listId?: number;
  listName?: string;
  items: Item[] = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listId = +this.route.snapshot.paramMap.get('id')!;
    this.loadData();
  }

  loadData(): void {
    this.dataService.getListById(this.listId!).then(result => this.listName = result?.name);
    this.dataService.getListItems(this.listId!).then(result => {
      if (result) {
        this.items = result
      } else {
        console.error('Failed to load list items!');
      }
    });
  }

  deleteList(id: number): void {
    this.dataService.removeItem(id).then(result => {
      if (result) {
        this.loadData();
      } else {
        console.error(`Failed to remove item: ${id}`);
      }
    });
  }
}
