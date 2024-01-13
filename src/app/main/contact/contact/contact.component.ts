import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
cards: any = [
  {title: 'E-mail', body: 'jrios@rjautomated.com - José Ríos', icon: 'mail'},
  {title: 'Phone', body: '787-439-3748 - José Ríos', icon: 'phone'},
  {title: 'Postal Address', body: 'RJ Automated Solutions, HC 61 BOX 5493, Aguada PR 00602', icon: 'markunread_mailbox'}
];

}
