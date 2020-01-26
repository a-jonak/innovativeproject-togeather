import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../_services/api.service';
import { UserService } from '../_services/user.service';
import { ToastrService } from 'ngx-toastr';
import { RedirectionService } from '../_services/redirection.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  id = new FormControl('', Validators.required);
  disableLoginButton: boolean = false;

  constructor(
      private api: ApiService,
      private userService: UserService,
      private toaster: ToastrService,
      private redirectionService: RedirectionService,
  ) { }

  ngOnInit() {
  }

  logIn() {

    if (this.id.valid) {
      this.disableLoginButton = true;
      this.api.logIn(Number(this.id.value)).subscribe(
          user => {
            this.userService.loggedInUser = user.name;
            this.toaster.success('Successfully logged in');
            this.redirectionService.redirectToHomePage();
          }
      );
    }
  }
}
