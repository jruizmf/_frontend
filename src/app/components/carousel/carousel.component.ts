import { Component, Input, OnInit } from '@angular/core';
import { faCircleChevronLeft, faCircleChevronRight} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input()
  images: Array<any> = [];
  faCircleChevronLeft: any = faCircleChevronLeft;
  faCircleChevronRight: any = faCircleChevronRight;
  constructor() { }

  ngOnInit(): void {
  }

}
