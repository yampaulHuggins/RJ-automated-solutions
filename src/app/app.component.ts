import { Component } from '@angular/core';
import { Page } from './assets/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RJ Automated Solutions';
  options: Page[] = [{  name: 'Home', path: '/home'}, {name: 'Services', path: '/services'}, { name: 'Contact us', path: '/contact'}]
  page: Page = { name: 'Home', path: '/home'};

  selectOption(option: Page) {
    this.page = option
  }
}
