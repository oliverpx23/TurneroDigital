import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';


@Component({
  selector: 'app-turnero',
  templateUrl: './turnero.component.html',
  styleUrls: ['./turnero.styles.css']
})
export class TurneroComponent implements OnInit {

  turnos = [
    { box: 1, ticket: 23 },
    { box: 2, ticket: 24 },
    { box: 3, ticket: 25 },
    { box: 1, ticket: 26 },
    { box: 2, ticket: 27 },
    { box: 3, ticket: 28 },
    { box: 1, ticket: 29 },
    { box: 2, ticket: 30 },
    { box: 3, ticket: 31 },
  ];


  mostarPopUp: boolean = false;

  constructor(public wsock: WebsocketService) { }

  ngOnInit() {
    this.wsock.escuchar('mensaje-nuevo').subscribe(
      (resp: any) => {
        console.log(resp);
        this.nuevoTurno(resp);
        this.hablar();
      }
    )
  }

  nuevoTurno(turno: any) {

    this.mostarPopUp = true;

    setTimeout(() => {
      this.mostarPopUp = false;
    }, 3000);

  }

  hablar() {

    const voice = new SpeechSynthesisUtterance('Box 61 Ticket 23');
    voice.rate = 0.6;
    console.log(speechSynthesis.getVoices());
    speechSynthesis.speak(voice);
  }

}
