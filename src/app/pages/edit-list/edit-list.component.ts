import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss'],
})
export class EditListComponent implements OnInit {
  listId!: number;
  list!: List;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.listId = +this.route.snapshot.paramMap.get('id')!;
    this.dataService.getListById(this.listId).then(result => {
      this.list = result;
    });
  }

  saveChanges(newName: string): void {
    this.list.name = newName;
    this.dataService.updateList(this.list).then(result => {
      if (result) {
        this.location.back();
      } else {
        console.error('Failed to update list name!');
      }
    });
  }
}
