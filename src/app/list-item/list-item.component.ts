import { Component, OnInit, Injectable} from '@angular/core';

@Injectable()
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
