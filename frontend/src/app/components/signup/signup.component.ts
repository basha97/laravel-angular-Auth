import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    public form = {
        email: null,
        name: null,
        password: null,
        password_confirmation: null
    };

    public error = [];

    constructor(
        private jarwish: JarwisService,
        private token: TokenService,
        private router: Router
        ) { }

    ngOnInit() {
    }

    onSubmit(){
        this.jarwish.signup(this.form).subscribe(
            data =>  this.handleResponse(data),
            error => this.handleError(error) 
        );
    }

    handleResponse(data){
        this.token.handle(data.access_token);
        this.router.navigateByUrl('/profile');
    }

    handleError(error){
        this.error = error.error.errors;
    } 

}
