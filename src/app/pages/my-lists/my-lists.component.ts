import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/models/list.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-my-lists',
  templateUrl: './my-lists.component.html',
  styleUrls: ['./my-lists.component.scss'],
})
export class MyListsComponent implements OnInit {
  lists: List[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getAllLists().then(result => this.lists = result);
  }

  deleteList(id: number): void {
    this.dataService.removeList(id).then(result => {
      if (result) {
        this.loadData();
      } else {
        console.error(`Failed to remove list: ${id}`);
      }
    });
  }
}
