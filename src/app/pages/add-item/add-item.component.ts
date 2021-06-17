import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';


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

  addItem(name: string): void {
    const id = this.dataService.ITEMS.length + 1
    this.dataService.ITEMS.push({id, listId: this.listId, name});
    this.location.back();
  }
}
