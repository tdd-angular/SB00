import { Injectable } from '@angular/core';

@Injectable()
export class AutocompleteService {

  constructor() { }

  filter(
    input: string,
    list: any[],
    propertyToCompare: string = 'name',
  ) {
    const filterValue = input.toLowerCase();

    return list.filter(state => state[propertyToCompare].toLowerCase().indexOf(filterValue) === 0);
  }
}
