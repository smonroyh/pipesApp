import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero, OrderBy } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUpperCase : boolean=false;

  public sortBy?: keyof Hero;

  public orderBy : OrderBy ='ASC';



  public heroes: Hero[]=[
    {
      name:'Ironman',
      canFly:true,
      color:Color.red
    },
    {
      name:'Batman',
      canFly:false,
      color:Color.black
    },
    {
      name:'Daredevil',
      canFly:false,
      color:Color.red
    },
    {
      name:'Robin',
      canFly:false,
      color:Color.red
    },
    {
      name:'Linterna Verde',
      canFly:true,
      color:Color.green
    }

  ]

  toggleUpperCase():void{
    this.isUpperCase=!this.isUpperCase;
  }

  changeOrder(value: keyof Hero){
    console.log("primero metodo")
    this.sortBy=value;
    this.orderBy= (this.orderBy=='DESC')?'ASC':'DESC';
    // console.log(this.sortBy,this.OrderBy)
  }
}
