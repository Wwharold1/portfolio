import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HeaderListenerEnum } from 'src/app/shared/constants/enums/header-listener.enum';
import { EventBusService, Events } from 'src/app/shared/service/event.bus.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(private eventBusService: EventBusService) { }

  @ViewChild('hpHeader')
  hpHeader!: ElementRef;

  ngOnInit(): void {
    this.eventBusService.on(Events.HeaderListener,(result: HeaderListenerEnum) => {
      if(result == HeaderListenerEnum.Open) this.openHeader();
      if(result == HeaderListenerEnum.Close) this.closeHeader();
    });
  }

  openHeader() {
    this.hpHeader.nativeElement.classList.add('hp-header-open');
  }

  closeHeader() {
    this.hpHeader.nativeElement.classList.remove('hp-header-open');
    this.hpHeader.nativeElement.classList.add('img');
  }
}
