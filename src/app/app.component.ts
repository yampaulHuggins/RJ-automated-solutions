import { Component } from '@angular/core';
import { Page } from './assets/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RJ Automated Solutions';
  options: Page[] = [{  name: 'Inicio', path: '/home'}, {name: 'Servicios', path: '/services'}, { name: 'Contacto', path: '/contact'}]
  page: Page = { name: 'Inicio', path: '/home'};

  selectOption(option: Page) {
    this.page = option
  }
}
