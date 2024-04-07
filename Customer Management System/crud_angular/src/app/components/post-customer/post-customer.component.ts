import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.css']
})
export class PostCustomerComponent {

  postCustomerForm: FormGroup = this.fb.group({});
  
  constructor(private customerService: CustomerService,
    private fb: FormBuilder, 
    private router: Router){}

  ngOnInit(){
    this.postCustomerForm = this.fb.group({
      name: [null,[Validators.required]],
      phone: [null,[Validators.required]],
      email: [null,[Validators.required, Validators.email]]
    })
  }

  PostCustomer(){
    console.log(this.postCustomerForm.value);
    this.customerService.postCustomer(this.postCustomerForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("");
    })
  }

}