import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master/master.service';
import { APIResponse } from '../../model/interface/response';
import { IDesignation } from '../../model/interface/designation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  designationList:IDesignation[] =[];
  masterService = inject(MasterService);
  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((result:APIResponse)=>{
      this.designationList = result.data;
      console.log(result);
    })
  }
}
