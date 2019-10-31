import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 topPosts=[{img:"../../assets/Surface.png",views:'10,000',likes:'10,000'},
 {img:"../../assets/helicopter.png",views:'3,000',likes:'1,500'},
 {img:"../../assets/metro.png",views:'12,000',likes:'10,000'},
 {img:"../../assets/bag.png",views:'30,000',likes:'7,000'},
 {img:"../../assets/whiteSleeve.png",views:'1,200',likes:'800'},
 {img:"../../assets/wild.png",views:'1,200',likes:'800'},
 {img:"../../assets/random.png",views:'1,200',likes:'800'},
 {img:"../../assets/trouser.png",views:'1,000',likes:'300'},
 {img:"../../assets/yoga.png",views:'3,000',likes:'700'},
 {img:"../../assets/pink.png",views:'1,200',likes:'250'},
 {img:"../../assets/freeHair.png",views:'3,300',likes:'779'},
 {img:"../../assets/hat.png",views:'3,000',likes:'1,200'},
 {img:"../../assets/hat.png",views:'1,200',likes:'800'}];




  constructor(private _http:HttpClient) { }

topPostDetails(){
  let url = "https://my-json-server.typicode.com/siddarthakadasani/kofluenceDB/Posts";
  const httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*'
    })
    
   };
  return this._http.get(url,httpOptions);
}

latestPostDetails(){

}

}
