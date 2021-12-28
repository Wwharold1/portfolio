import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HeaderListenerEnum } from 'src/app/shared/constants/enums/header-listener.enum';
import { EmitEvent, EventBusService, Events } from 'src/app/shared/service/event.bus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private eventBusService: EventBusService) { }

  @ViewChild('curtain')
  curtain!: ElementRef;

  ngOnInit(): void {
    const event: EmitEvent = {
      name: Events.HeaderListener,
      value: HeaderListenerEnum.Open
    }
    this.eventBusService.emit(event);
    setTimeout(()=> {
      document.getElementsByClassName('btn-met')[0].classList.add('view');
    },2000);
  }

  meetMe(){
    const event: EmitEvent = {
      name: Events.HeaderListener,
      value: HeaderListenerEnum.Close
    }
    this.eventBusService.emit(event);
    this.curtain.nativeElement.classList.add('clean');
    document.getElementsByClassName('hp-curtain')[0].classList.add('close');
    document.getElementsByClassName('avatar')[0].classList.add('in-header');
    document.getElementsByClassName('div-avatar')[0].classList.add('close');
    document.getElementsByClassName('person')[0].classList.add('hide');
    document.getElementsByClassName('div-person')[0].classList.add('close');
  }
}
