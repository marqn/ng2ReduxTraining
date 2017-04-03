import {Injectable} from "@angular/core";

export interface Contact {
  id:number;
  name:string;
  email:string;
  age:number;
}

@Injectable()
export class TempServices {

  contacts:Array<Contact> =
    [
      {
        id: 1,
        name: 'Marek Małecki',
        email: 'marek@o2.pl',
        age: 45
      },
      {
        id: 2,
        name: 'Janko Muzykant',
        email: 'lala@wp.pl',
        age: 21
      }
    ]
}
