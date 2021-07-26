import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-validation-page',
  templateUrl: './validation-page.component.html',
  styleUrls: ['./validation-page.component.scss']
})
export class ValidationPageComponent implements OnInit {

  reactiveForm!: FormGroup ;
  pinNumber:string = "";

  constructor(private fb:FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      userPIN:[this.pinNumber],

    })
  }

  onSubmit(){
    
  }

}
