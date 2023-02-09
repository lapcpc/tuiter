import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.css']
})
export class UserOptionsComponent {
  constructor(private router: Router){}
  @Input() name: any

  active = false
  change(){
    this.active = !this.active
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
   }
}
