import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  cards: any[] = [{icon: 'architecture', title: 'System Architecture Design', body: 'Nam pharetra sollicitudin euismod. Sed non dolor finibus, dapibus massa vel, consequat neque.'},
  {icon: 'design_services', title: 'Control Panel Design', body: 'Nam pharetra sollicitudin euismod. Sed non dolor finibus, dapibus massa vel, consequat neque.'},
  {icon: 'construction', title: 'Industrial Control Panel Fabrication', body: 'Nam pharetra sollicitudin euismod. Sed non dolor finibus, dapibus massa vel, consequat neque.'},
  {icon: 'work_update', title: 'Installation & Commissioning', body: 'Nam pharetra sollicitudin euismod. Sed non dolor finibus, dapibus massa vel, consequat neque.'},
  {icon: 'code', title: 'HMI & PLC Integration and Programming', body: 'Nam pharetra sollicitudin euismod. Sed non dolor finibus, dapibus massa vel, consequat neque.'},
  {icon: 'update', title: 'Control System Upgrades', body: 'Nam pharetra sollicitudin euismod. Sed non dolor finibus, dapibus massa vel, consequat neque.'}]

  ngOnInit(): void {

  }



}
