import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/models/list.model';
import { DataService } from 'src/app/services/data.service';
import { faCheck, faPen, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-lists',
  templateUrl: './my-lists.component.html',
  styleUrls: ['./my-lists.component.scss'],
})
export class MyListsComponent implements OnInit {
  lists: List[] = [];

  faPlus = faPlus;
  faDelete = faTrashAlt;
  faEdit = faPen;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getAllLists().then((result) => {
      this.lists = result;
      console.log(result);
    });
  }

  editList(id: number, e: Event): void {
    this.router.navigate(['/editlist', id]);
    e.stopPropagation();
  }

  deleteList(id: number, e: Event): void {
    this.dataService.removeList(id).then((result) => {
      if (result) {
        this.loadData();
      } else {
        console.error(`Failed to remove list: ${id}`);
      }
    });
    e.stopPropagation();
  }
}
