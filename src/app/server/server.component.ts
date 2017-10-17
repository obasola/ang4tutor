import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverId = 10;
  serverStatus = 'offline';
  serverName = '';
  servers = [
    {name: 'Tomcat Server', version: '7.0'},
    {name: 'Glassfish Server', version: '4.1'},
    {name: 'JBoss Server', version: '7.1'},
    {name: 'Node Server', version: '4.6.1'}
  ];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {
  }

  getServerId() {
    return this.serverId;
  }
  getServerStatus() {
    return this.serverStatus;
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
