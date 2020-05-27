import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public credentials = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) { }
  create() {
    this.authService.createOrUpdate(this.credentials).subscribe((result) => {
      return result;
    });
  }


  ngOnInit(): void {
  }

}
