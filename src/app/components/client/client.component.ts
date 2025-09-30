import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client/client.service';
import { APIResponse } from '../../model/interface/response';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit{
  clientObj: Client = new Client();
  clientList: Client[] = [];

  ngOnInit(): void {
    this.loadClients();
  }

  clientService = inject(ClientService);

  onSaveClient(){
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe(( res:APIResponse )=>{
      if(res.result){
       alert("Client Created Successfully");
       this.loadClients();
      }else{
        alert(res.message);
      }
    })
  }

  loadClients(){
    this.clientService.getAllClients().subscribe((res:APIResponse)=>{
      this.clientList = res.data;
      console.log(this.clientList);
    })
  } 
}
