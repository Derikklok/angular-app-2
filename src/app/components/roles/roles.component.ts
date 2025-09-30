import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Toast } from 'bootstrap';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http.get('/api/ClientStrive/GetAllRoles').subscribe((res: any) => {
      this.roleList = res.data;
    });
  }

  employeeName: string = 'Sachin';
  createdAt: Date = new Date();
  private toastInstance?: Toast;

  constructor(private hostElementRef: ElementRef<HTMLElement>) {}

  showWelcomeAlert() {
    if (!this.toastInstance) {
      const toastElement =
        this.hostElementRef.nativeElement.querySelector('#welcomeToast');
      if (toastElement) {
        this.toastInstance = new Toast(toastElement, { delay: 2500 });
      }
    }
    this.toastInstance?.show();
  }
}
