import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public form = {
        email: null,
        password: null
    }

    public error = null ;

    constructor(
        private jarwish: JarwisService,
        private token: TokenService,
        private router: Router,
        private auth: AuthService
        ) { }

    ngOnInit() {
    }

    onSubmit(){
        this.jarwish.login(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error) 
        );
    }

    handleResponse(data){
        this.token.handle(data.access_token);
        this.auth.changeAuthStatus(true);
        this.router.navigateByUrl('/profile');
    }

    handleError(error){
        this.error = error.error.error;
    }
}
