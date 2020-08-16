import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  moduleId: module.id
})
export class AuthComponent implements OnInit {

  constructor(private router: RouterExtensions, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSignin(){
    // this.router.navigate(['/challenges'], { clearHistory: true });
    this.router.navigate(['./challenges'], { relativeTo: this.route, clearHistory: true });
  }

}
