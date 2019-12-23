import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  checkStatus() {

    this.socket.on('connect', () => {
      this.socketStatus = true;
      console.log('Conectado al servidor');
    });

    this.socket.on('disconnect', () => {
      this.socketStatus = false;
      console.log('Desconectado del servidor');
    });
  }


  emitir(evento: string, payload?: any, callback?: Function) {
    this.socket.emit(evento,payload,callback);
  }

  escuchar(evento: string) {
    return this.socket.fromEvent(evento);
  }


}
