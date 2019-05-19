import { Injectable } from '@angular/core';

@Injectable()
export class AutocompleteService {

  constructor() { }

  filter(
    input: string,
    list: any[],
    propertyToCompare: string,
  ) {
    let filteredList = list;
    if (input) {
      filteredList = list.filter((item) => {
        return item[propertyToCompare] &&
          (
            (item[propertyToCompare].toString().toLowerCase())
              .startsWith(input.toString().toLowerCase())
            || (item[propertyToCompare]).toString().toLowerCase()
              .startsWith(input[propertyToCompare].toString().toLowerCase())
          );
      });
    }
    return filteredList;
  }
}
