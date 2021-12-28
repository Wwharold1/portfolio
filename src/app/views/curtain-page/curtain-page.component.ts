import { Component, OnInit } from '@angular/core';
import { HeaderListenerEnum } from 'src/app/shared/constants/enums/header-listener.enum';
import { EmitEvent, EventBusService, Events } from 'src/app/shared/service/event.bus.service';

@Component({
  selector: 'app-curtain-page',
  templateUrl: './curtain-page.component.html',
  styleUrls: ['./curtain-page.component.scss']
})
export class CurtainPageComponent implements OnInit {

  constructor(private eventBusService: EventBusService) { }

  ngOnInit(): void {
  }

  o(){
    const event: EmitEvent = {
      name: Events.HeaderListener,
      value: HeaderListenerEnum.Open
    }
    this.eventBusService.emit(event);
  }
}
