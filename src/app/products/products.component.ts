import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) { 
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
  }

}
