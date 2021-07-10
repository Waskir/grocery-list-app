import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/models/list.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {

  constructor(private dataService: DataService,
              private location: Location) { }

  ngOnInit(): void { }

  addList(name: string): void {
    let newList: List = {
      id: 0,
      name,
      isDeleted: false,
      items: [],
    }
    this.dataService.addList(newList).then(result => {
      if (result) {
        this.location.back();
      } else {
        console.error('Failed to add new list!');
      }
    });
  }
}
