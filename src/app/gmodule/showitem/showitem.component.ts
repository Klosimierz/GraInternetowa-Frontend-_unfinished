import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showitem',
  templateUrl: './showitem.component.html',
  styleUrls: ['./showitem.component.css']
})
export class ShowitemComponent implements OnInit {

  @Input() playerDesc: Object;
  @Input() playerL: Number;

  constructor() { }

  ngOnInit() {
  }

}
