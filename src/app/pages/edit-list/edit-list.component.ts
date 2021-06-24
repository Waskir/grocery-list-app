import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss'],
})
export class EditListComponent implements OnInit {
  listId!: number;
  name!: string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.listId = +this.route.snapshot.paramMap.get('id')!;
    this.name = this.dataService.LISTS.find(list => list.id === this.listId).name;
  }

  saveChanges(name: string): void {
    // zaimplementować z api
  }
}
