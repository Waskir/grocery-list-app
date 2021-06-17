import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() listName?: string;

  items: any[] = [
    {
      id: 0,
      name: 'Item 1',
    },
    {
      id: 0,
      name: 'Item 2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
