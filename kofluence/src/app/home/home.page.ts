import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../providers/products.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  topPostRecords=[];
  latestPostsRecords=[];
  showSkeleton:boolean=true;
  showSuggestions:boolean=false;
  showChips:boolean = false;
  searchArr = [];
  searchVal:any;
suggestions=[{searchName:'#flatshoes',posts:'16k posts'},
{searchName:'#heels',posts:'5k posts'},
{searchName:'#redshoes',posts:'6k posts'},
{searchName:'#sportshoes',posts:'1k posts'}
];
segmentVal:any = "topPosts";
  constructor(private _productService:ProductsService,private _alertCntrl:AlertController) {}

  ngOnInit() {
    this._productService.topPostDetails().subscribe((res)=>{
     this.topPostRecords = res['topPosts'];
     this.latestPostsRecords = res['latestPosts'];
     this.showSkeleton =false;
    })
  }

  segmentChanged(event){

    console.log(event.target.value);
    this.segmentVal = event.target.value;
  }
  onStart(){
this.presentAlert();
  }

  onBack(){
    this.presentAlert(); 
  }

  onHelp(){
    this.presentAlert();
  }
  onSearch(event){
this.showChips =false;
let searchVal = event.target.value;
if(searchVal != undefined && searchVal != null && searchVal != ""  ){
  this.showSuggestions = true;
  
}else{
  this.showSuggestions = false; 
  this.searchArr=[];
}
  }
  onClear(event){
    this.searchArr=[];
  }

  clearItem(index){
console.log(index);
this.searchArr.splice(index,1);
if(this.searchArr.length == 0){
  this.showChips =false;
}
  }

  onSearchItem(sug){
    this.showChips =true;
    if(sug){
      if(this.searchArr.length !=0){
        for(let i=0;i<this.searchArr.length;i++){
           if(this.searchArr.indexOf(sug) < 0){
            this.searchArr.push(sug); 
           }
        }
      }
      else{
        this.searchArr.push(sug); 
      }
      
    }
    

  }


  async presentAlert(){
    const alert = await this._alertCntrl.create({
      message: "Coming soon....",
      buttons: [{
        text: 'OK',
        handler: () => {
        }
      }]
    });
  
    await alert.present();
  }

}
