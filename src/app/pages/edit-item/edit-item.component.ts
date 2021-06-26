import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  id!: number;
  item!: Item;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.dataService.getItemById(this.id).then(result => {
      this.item = result;
    });
  }

  saveChanges(newName: string, newQty: number): void {
    this.item.name = newName;
    this.item.qty = newQty;
    this.dataService.updateItem(this.item).then(result => {
      if (result) {
        this.location.back();
      } else {
        console.error('Failed to update item name!');
      }
    });
  }
}
