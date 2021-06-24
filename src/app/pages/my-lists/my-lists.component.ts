import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-my-lists',
  templateUrl: './my-lists.component.html',
  styleUrls: ['./my-lists.component.scss'],
})
export class MyListsComponent implements OnInit {
  lists: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.lists = this.dataService.LISTS;
  }

  deleteList(id: number): void {
    const index = this.dataService.LISTS.findIndex(list => list.id === id);
    this.dataService.LISTS.splice(index, 1);
  }
}
