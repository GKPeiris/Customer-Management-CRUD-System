import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrl: './get-all-customers.component.css'
})
export class GetAllCustomersComponent {

  customers: any[] = [];

  constructor(private customerService: CustomerService){}

  ngOnInit(){
    this.getAllCustomer();
  }

  getAllCustomer(){
    this.customerService.getAllCustomer().subscribe((res)=>{
      console.log(res);
      this.customers = res;
    })
  }

  deleteCustomer(id: number){
    this.customerService.deleteCustomer(id).subscribe((res)=>{
      console.log(res);
      this.getAllCustomer();
    })
  }
}
