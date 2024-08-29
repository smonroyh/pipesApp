import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18nSelect

  public name: string="Fernando";
  public gender: 'male'|'female'="male";
  public invitationMap={
    'male':'invitarlo',
    'female':'invitarla'
  }


  changeCliente():void{
    this.name="Melissa",
    this.gender="female"
  }

  //i18plural
  public clientes:string[]=['Maria','Pedro','Fernando','Hernando'];
  public clientesMap={
    '=0':'no tenemos clientes',
    '=1':'1 cliente',
    '=2':'2 clientes',
    'other':'# clientes ',
  }

  deleteClient(){
    this.clientes.shift();
  }

  //keyValue Pipe
  public person={
    name:'Fernando',
    age:36,
    address:'Ottawa, Canada'
  }

  //async pipe
  public myObservableTimer= interval(2000).pipe(
    tap(value=>console.log("tap : ",value))
  );

  public promiseValue : Promise<string>=new Promise((res,rej)=>{
    setTimeout(() => {
      res("Tenemos data en la promesa")
    }, 3500);
  })

}
