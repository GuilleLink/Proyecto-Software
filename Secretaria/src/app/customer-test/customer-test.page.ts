import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { PostProvider } from '../../Providers/post-provider'

@Component({
  selector: 'app-customer-test',
  templateUrl: './customer-test.page.html',
  styleUrls: ['./customer-test.page.scss'],
})
export class CustomerTestPage implements OnInit {

  customers: any= [];
  limit: number = 10; //LIMMIT GET perDATA
  start: number = 0;

  constructor(
    private postPvdr: PostProvider,
    private router: Router


  ) { }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.customers = [];
    this.start = 0;
    this.loadCustomer();
  
  }
  addCustomer(){
    this.router.navigate(['/addcustomer-test'])
  }

  loadCustomer(){
    return new Promise(resolve => {
      let body = {
        aksi: 'getdata',
        limit: this.limit,
        start: this.start,
      };
      this.postPvdr.postData(body,'proses-api.php').subscribe(data => {
        for(let customer of data.result){
          this.customers.push(customer);
        }
        resolve(true);
      });
    });
  }
}
