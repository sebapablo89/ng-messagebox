
import { Component } from '@angular/core';
import { NgMessageboxService } from 'ng-messagebox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultado: boolean = false;
  
  constructor(private service: NgMessageboxService){}

  mostrarModal(){
    
    var options = ''
    
    this.service.MessabeBox({title:'Warning', message:'permanently delete the record. Continue?',buttons:'AcceptCancel', type:'warning'}).then((value: boolean) => {
      console.log(value)
    })
  }
}
