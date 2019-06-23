import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductAssignment';

  constructor(private router:Router){}

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  authenticate():boolean{
    if(localStorage.getItem('token')!=null)
    return true;
    return false;

  }

}
