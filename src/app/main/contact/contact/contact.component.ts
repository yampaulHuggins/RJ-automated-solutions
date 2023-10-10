import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
cards: any = [
  {title: 'Correo Electrónico', body: 'jrios@rjautomated.com', icon: 'mail'},
  {title: 'Teléfono', body: '787-439-3748', icon: 'phone'},
  {title: 'Dirección Postal', body: 'HC 61 BOX 5493, Aguada PR 00602', icon: 'markunread_mailbox'}
];

}
