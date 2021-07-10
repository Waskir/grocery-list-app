import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';
import { faPen, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/models/item.model';
import { List } from 'src/app/models/list.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  faPlus = faPlus;
  faDelete = faTrashAlt;
  faEdit = faPen;
  faDone = faCheckSquare;
  faTodo = faSquare

  listId?: number;
  listName?: string;
  items: Item[] = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
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

  toggleStatus(item: Item): void {
    item.done = !item.done;
    this.dataService.updateItem(item).then(result => {
      if (!result) {
        console.error(`Failed to update item: ${item.id}`);
      }
    });
  }

  editItem(id: number, e: Event): void {
    this.router.navigate(['/edititem', id]);
    e.stopPropagation();
  }

  deleteItem(id: number, e: Event): void {
    this.dataService.removeItem(id).then(result => {
      if (result) {
        this.loadData();
      } else {
        console.error(`Failed to remove item: ${id}`);
      }
    });
    e.stopPropagation();
  }
}
