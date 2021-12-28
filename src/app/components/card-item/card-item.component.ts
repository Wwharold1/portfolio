import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() img: string = '';
  @Input() title: string = '';
  @Input() route: string = '';

  ngOnInit(): void {
  }

  redirectTo() {
    this.router.navigate([this.route]);
  }
}
