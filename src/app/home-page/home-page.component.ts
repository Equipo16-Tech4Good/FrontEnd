import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router, private userServ:UserService) { }

  ngOnInit(): void {
  }

  logout(){
    this.userServ.setToken("");
    this.router.navigate(['/']);
  }

}
