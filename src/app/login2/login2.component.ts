import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],

  templateUrl: './login2.component.html',
  styleUrl: './login2.component.scss',
})
export class Login2Component implements OnInit {
  hide = true;

  loginForm!: FormGroup;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required), // here we can set default value instead of null if need
    });
  }

  onLogin() {
    console.log(this.loginForm);
    this.router.navigate(['/layout',]);
  }
}
