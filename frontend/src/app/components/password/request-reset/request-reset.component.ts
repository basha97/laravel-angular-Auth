import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.scss']
})
export class RequestResetComponent implements OnInit {

    public form = {
        email: null
    };

    constructor(
        private jarwish: JarwisService,
        private notify: SnotifyService
        ) { }

    ngOnInit() {
    }

    onSubmit(){
        this.jarwish.sendPasswordResetLink(this.form).subscribe(
            data => this.handleResponse(data),
            error => console.log(error)
        );
    }

    handleResponse(res){
        console.log(res);
        this.form.email = null;
    }

}
