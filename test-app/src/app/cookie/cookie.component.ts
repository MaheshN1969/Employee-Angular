import { Component } from '@angular/core';

@Component({
  selector: '[app-cookie]',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent {

  displayCookie : boolean = false ;

  message : string = "Iphone";

  updateMessage(data : Event) 
  {
          // this.message = data ;
          console.log((<HTMLInputElement>data.target).value);
          this.message = (<HTMLInputElement>data.target).value;
  }

}
