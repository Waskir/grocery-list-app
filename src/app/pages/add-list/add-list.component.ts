import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {

  constructor(private dataService: DataService,
              private location: Location) { }

  ngOnInit(): void {
  }

  addList(name: string): void {
    const id = this.dataService.LISTS.length + 1
    this.dataService.LISTS.push({id, name});
    this.location.back();
  }
}
