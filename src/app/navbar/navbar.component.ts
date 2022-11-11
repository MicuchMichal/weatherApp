import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  navToggle(){
    const links = document.querySelector(".links");
    links?.classList.toggle("show-links");//pre linky zapne a vypne triedu show-links
  }
  linkToggle(){
    const links = document.querySelector(".links");
    if (links?.classList.contains("show-links")){
      links.classList.remove("show-links");
    }
  }
}
