import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-lists',
  templateUrl: './my-lists.component.html',
  styleUrls: ['./my-lists.component.scss'],
})
export class MyListsComponent implements OnInit {
  lists: any[] = [
    {
      id: 0,
      name: 'Lista zakupów 😎',
    },
    {
      id: 0,
      name: 'Projekty na WST',
    },
    {
      id: 0,
      name: 'Lista 123',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
}
