import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() uniqueId!: string;
  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
