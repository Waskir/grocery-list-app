import { Component } from '@angular/core';
import { faCog, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Lists'
  faSettings = faCog;
  faCart = faShoppingCart;
}
