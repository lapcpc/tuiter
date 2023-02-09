import { Component } from '@angular/core';
import { HttpserviceService } from '../services/httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private httpService: HttpserviceService,
    private router: Router){}
user = {
  name: "",
  email:"",
  password:""
}
registrar(){
  this.httpService.createUser(this.user).subscribe(res=>{
    //this.$router.push('/login');
    this.router.navigate(['/login'])
  }) 
}
goLogin = () =>{
  this.router.navigate(['/login'])
  }
}
