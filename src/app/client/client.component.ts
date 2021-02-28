import { Component,Inject, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../models/client'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  client: Client;
  constructor(private route: ActivatedRoute, private clientsService: ClientsService,
    private router: Router,public dialogRef: MatDialogRef<ClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data:number ) { }

    
    //id: number = 0
  ngOnInit(): void {
    this.client = new Client('',null, '');
    const id = this.data;
    this.clientsService.getSingleClient(+id).then(
      (client: Client) => {
        this.client = client;
      }
    );
  }

 /* onBack() {
    this.router.navigate(['/books']);
  }*/

}




