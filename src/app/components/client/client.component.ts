import { Component, inject, OnInit } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client/client.service';
import { APIResponse } from '../../model/interface/response';

@Component({
  selector: 'app-client',
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit{
  clientObj: Client = new Client();
  clientList: Client[] = [];
  showToast: boolean = false;
  toastMessage: string = '';
  toastType: 'success' | 'error' = 'success';

  ngOnInit(): void {
    this.loadClients();
  }

  clientService = inject(ClientService);

  onSaveClient(){
    // debugger;
    this.clientService.addUpdate(this.clientObj).subscribe(( res:APIResponse )=>{
      if(res.result){
       this.showToastMessage('Client created successfully', 'success');
       this.loadClients();
       this.resetFormState();
      }else{
        this.showToastMessage(res.message || 'Something went wrong', 'error');
      }
    })
  }

  loadClients(){
    this.clientService.getAllClients().subscribe((res:APIResponse)=>{
      this.clientList = res.data;
      console.log(this.clientList);
    })
  } 

  private showToastMessage(message: string, type: 'success' | 'error' = 'success'){
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  onReset(form: NgForm){
    form.resetForm();
    this.clientObj = new Client();
  }

  private resetFormState(){
    // reset the bound model so controls clear even if form reference is not at hand
    this.clientObj = new Client();
  }
}
