import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements AfterViewInit {

  @ViewChild(Carousel) carousel!: Carousel;

  @Input() posts!: any[];

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    
  }

}
