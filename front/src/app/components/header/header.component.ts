import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  select!: boolean;
  setSelect(n:number){
      if (n== 0){
          this.select=true
      }else{this.select = false}
  }
}
