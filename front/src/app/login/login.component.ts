import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from '../services/httpservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private httpService: HttpserviceService,
    private router: Router,
    ){}
//variables
user={
  email:'',
  password:''
}
login =()=>{

  this.httpService.login(this.user).subscribe(res=>{
  console.log(res.token)
  localStorage.setItem('token', res.token);
  this.router.navigate(['/home'])
}, 
err => console.log(err)
 
  )
}
goRegister = () =>{
this.router.navigate(['/register'])
}
}
