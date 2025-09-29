import { Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  employeeName: string = "Sachin";
  createdAt:Date = new Date();
  private toastInstance?: Toast;
  
  constructor(private hostElementRef: ElementRef<HTMLElement>) {}
  
  showWelcomeAlert(){
    if (!this.toastInstance) {
      const toastElement = this.hostElementRef.nativeElement.querySelector('#welcomeToast');
      if (toastElement) {
        this.toastInstance = new Toast(toastElement, { delay: 2500 });
      }
    }
    this.toastInstance?.show();
  }
}
