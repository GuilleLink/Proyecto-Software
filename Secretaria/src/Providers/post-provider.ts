import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostProvider { 
	//server: string = "http://localhost/SprintIITest/IONIC4_CRUD_LOGINREGIS_PHP_MYSQL/server_api/"; // default
	// if you test in real device "http://localhost" change use the your IP	

<<<<<<< HEAD
	server: string = "http://localhost/Proyecto-Software/server_api/";   //Equipo Alejandro
=======
	server: string = "http://localhost/Proyecto-Software/server_api/";   //Equipo Alejandro
>>>>>>> cf26db0675c7a1f3d09034f379dc1447c17a42f5
	//server: string = "http://localhost/SprintII_Software_/server_api/";    //Equipo Diego
	constructor(public http : Http) {

	}

	postData(body, file){ 
		let type = "application/json; charset=UTF-8";
		let headers = new Headers({ 'Content-Type': type });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.server + file, JSON.stringify(body), options)
		.map(res => res.json());  
	}
}