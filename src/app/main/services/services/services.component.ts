import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  overview: string = `At RJ Automated Solutions, we understand the importance of system initial evaluation. Our system evaluation process starts with a comprehensive analysis of the client's automation system, including hardware, software, and processes. We use a range of tools and techniques to assess the system's performance, reliability, and efficiency. We also identify potential risks and vulnerabilities and develop recommendations to mitigate them.`
  cards: any[] = [{icon: 'architecture', title: 'System Architecture Design', body: 'System Architecture Design involves defining the hardware and software components, communication protocols, and data flow to ensure efficient and reliable control of processes and equipment.'},
  {icon: 'design_services', title: 'Control Panel Design', body: `Control panel design for control systems involves creating a user-friendly interface that allows operators to monitor and control the system's processes and equipment efficiently and effectively. This includes selecting appropriate components, designing the layout, and integrating the necessary controls and indicators.`},
  {icon: 'construction', title: 'Industrial Control Panel Fabrication', body: `Industrial control panel fabrication involves assembling and wiring the components of the control panel according to the design specifications. This includes mounting the devices, routing the wires, and connecting the power and control circuits to ensure the panel functions correctly and safely.`},
  {icon: 'work_update', title: 'Installation & Commissioning', body: `Installation and commissioning of control systems involves physically installing the control panel and associated equipment,  connecting it to the process or equipment it will control, and testing the system to ensure it operates as intended. This includes verifying the wiring, programming the control logic, and performing functional tests to ensure the system meets the design requirements and specifications.`},
  {icon: 'code', title: 'HMI & PLC Integration and Programming', body: `HMI (Human Machine Interface) and PLC (Programmable Logic Controller) integration and programming for control systems involves designing and programming the HMI to communicate with the PLC, creating a user-friendly interface for operators to interact with the control system. This includes developing the control logic, configuring the communication protocols, and testing the system to ensure it operates as intended. The programming must be done in a way that ensures the safety and reliability of the control system.`},
  {icon: 'update', title: 'Control System Upgrades', body: `Control system upgrades involve replacing or updating outdated hardware and software components of a control system to improve its performance, reliability, and functionality.  This includes assessing the existing system, identifying areas for improvement, selecting new components, designing and implementing the upgrade plan, and testing the system to ensure it meets the design requirements and specifications. The upgrade must be done in a way that minimizes disruption to the process or equipment being controlled.`}]

  ngOnInit(): void {

  }
}
