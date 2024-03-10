import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { machPasswordValidator } from 'src/app/shared/validators/match-password-validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  form = this.fb.group({
    email: ['', [Validators.required]],
    username: ['', [Validators.required, Validators.minLength(4)]],
    passGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      repass: ['', [Validators.required]],
    }, {
      validators: [machPasswordValidator('password', 'repass')],
    }),
  });


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }


  register(): void {
    
    if (this.form.invalid) {
      return;
    }
    const { email,
       username, 
       passGroup: { password, repass} = {} 
      } = this.form.value;
      
    this.userService.register(email!, username!, password!, repass!).subscribe(() => {
      alert('Successfull :-)');
      this.router.navigate(['/']);
    });
  }
}
