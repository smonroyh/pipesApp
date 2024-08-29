import { Pipe, PipeTransform } from '@angular/core';
import { Hero, OrderBy } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero | '' , orderBy : OrderBy = 'ASC' ): Hero[] {
    console.log({heroes, sortBy})
    switch(sortBy){
      case 'name':{
        return (orderBy == 'ASC') ? heroes.sort((a,b)=>(a.name>b.name) ?1 : -1) :heroes.sort((a,b)=>(a.name>b.name) ?-1 : 1)
      }
        // return heroes.sort((a,b)=>(a.name>b.name) ?1 : -1)
      case 'canFly':
        return (orderBy == 'ASC') ? heroes.sort((a,b)=>(a.canFly>b.canFly) ?1 : -1) :heroes.sort((a,b)=>(a.canFly>b.canFly) ?-1 : 1);
        // return heroes.sort((a,b)=>(a.canFly>b.canFly) ? 1 : -1);
      case 'color':
        return (orderBy == 'ASC') ? heroes.sort((a,b)=>(a.color>b.color) ?1 : -1) :heroes.sort((a,b)=>(a.color>b.color) ?-1 : 1);

        // return heroes.sort((a,b)=>(a.color>b.color) ? 1 : -1);
      default:
        return heroes;
    }
  }

}
