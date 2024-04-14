import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  userEmail: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve email from query parameters
    this.route.queryParams.subscribe(params => {
      this.userEmail = params['email'];
    });
  }
}


