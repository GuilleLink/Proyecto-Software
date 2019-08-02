//import { CustomerTestPage } from './../customer-test/customer-test.page';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../Providers/post-provider'

@Component({
  selector: 'app-addcustomer-test',
  templateUrl: './addcustomer-test.page.html',
  styleUrls: ['./addcustomer-test.page.scss'],
})
export class AddcustomerTestPage implements OnInit {

  name_customer: string = "";
  desc_customer: string = "";

  constructor(
    private postPvdr: PostProvider,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createdProses(){
    //console.log('OK')
    return new Promise(resolve => {
      let body = {
        aksi: 'add',
        name_customer: this.name_customer,
        desc_customer: this.desc_customer,
      };
      this.postPvdr.postData(body,'proses-api.php').subscribe(data => {
        this.router.navigate(['/customer-test']);
        console.log('OK');
      });
    });

  }

}
