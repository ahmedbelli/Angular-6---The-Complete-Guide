import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  display: boolean = true;
  allowNewServer: boolean = false;
  allowNewUser: boolean = false;
  server: string = 'AWS';
  serverId: number = 10;
  serverStatus: string = 'offline';
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'Test Server';
  username: string = 'Steven';
  loggedClicks: Array<any> = [];

  public click = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  // Assignments begin here

  resetUser() {
    this.username = '';
  }

  toggleDisplay() {
    return (this.display = !this.display);
  }

  logClicks() {
    this.click += 1;
    this.loggedClicks.push('This user is on click no. ' + this.click);
  }
}
