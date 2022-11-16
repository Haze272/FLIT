import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tag-container',
  templateUrl: './tag-container.component.html',
  styleUrls: ['./tag-container.component.scss']
})
export class TagContainerComponent implements OnInit {
  @Input() tags: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
