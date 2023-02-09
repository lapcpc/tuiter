import { Component } from '@angular/core';
import { HttpserviceService } from '../services/httpservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private httpService: HttpserviceService,
    private router:Router ){}
  ngOnInit(): void {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/']);
    }
    this.getData()
  }

  name=""
 getData(){
   this.httpService.getUserData().subscribe(res=>{
    console.log(res.name)
    this.name = res.name
   })
 }
 logout(){
  localStorage.clear();
  this.router.navigate(['/login'])
 }
}
