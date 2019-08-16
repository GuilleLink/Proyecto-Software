import {Injectable } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
//import 'rxjs/add/operator/map';
import { map} from 'rxjs/operators';
//import 'rxjs/Rx';

@Injectable()
export class PostProvider{
    server: string = "http://localhost/Secretaria/server_api/*" //min 22:00 ATENCION PUTEDE AVER PROBLEMA POR localhost

    constructor(public http: Http){

    }

    postData(body,file){
        let type = "application/json; charset=UTF-8";
        let headers = new Headers({'Content-Type': type});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.server + file, JSON.stringify(body), options)
        .pipe(map(res => res.json())); //Problem fixed with pipe. From: https://stackoverflow.com/questions/37208801/property-map-does-not-exist-on-type-observableresponse
    }
}

