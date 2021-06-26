import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item.model';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  listId?: number;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.listId = +this.route.snapshot.paramMap.get('id')!;
  }

  addItem(name: string, qty: number): void {
    let newItem: Item = {
      id: 0,
      listId: this.listId!,
      name,
      qty,
      done: false,
      isDeleted: false
    }
    this.dataService.addItem(newItem).then(result => {
      if (result) {
        this.location.back();
      } else {
        console.error('Failed to add new item!');
      }
    });
  }
}
