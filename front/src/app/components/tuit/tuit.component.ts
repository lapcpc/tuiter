import { Component } from '@angular/core';

@Component({
  selector: 'app-tuit',
  templateUrl: './tuit.component.html',
  styleUrls: ['./tuit.component.css']
})
export class TuitComponent {
   tuits= [{
    imgsrc: "https://cdn-icons-png.flaticon.com/512/8847/8847523.png",
    nombre: "Luis Pinot",
    user: "@lapcpc",
    tuit: "Esto es un tuit",
    img: "https://pbs.twimg.com/media/FoPUv9PXEAMz2ij?format=jpg&name=small"
}]
}
