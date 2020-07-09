import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showitem',
  templateUrl: './showitem.component.html',
  styleUrls: ['./showitem.component.css']
})
export class ShowitemComponent implements OnInit {

  @Input() playerObject: Object;

  constructor() { }

  ngOnInit() {
  }

}
