import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() listName?: string;

  listId?: number;
  list: any;
  items: any[] = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('items', this.dataService.ITEMS);
    this.listId = +this.route.snapshot.paramMap.get('id')!;
    if (this.listId) {
      this.list = this.dataService.LISTS.find(
        (list) => list.id === this.listId
      );

      this.items = this.dataService.ITEMS.filter(
        (item) => item.listId === this.listId
      );
    }
  }
}
