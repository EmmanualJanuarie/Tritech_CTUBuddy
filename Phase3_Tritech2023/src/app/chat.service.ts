import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public connection : signalR.HubConnection = new  signalR.HubConnectionBuilder()
  .withUrl("http://localhost:5000/chat")
  .configureLogging(signalR.LogLevel.Information)
  .build();

  public messages$  =  new BehaviorSubject<any>([]);
  public connectedUsers$ = new BehaviorSubject<string[]>([]);

  public messages: any[] = [];
  public users: string[] = [];

  constructor() {


    this.start();
    // catching users message
    this.connection.on("ReceiveMessage", (user: string, message: string, messageTime: string)=>{
      // console.log('user:', user);
      // console.log('message:', message);
      // console.log('message Time:', messageTime);
      
      this.messages = [...this.messages, {user, message, messageTime}];
      this.messages$.next(this.messages);
      
    });
    this.connection.on("ConnectedUser", (users: any)=>{
      // console.log(this.users);
      
      this.connectedUsers$.next(users)
      
    })
   }

  // starts connection
  public async start(){
    try{
      await this.connection.start();
      console.log('SignalR Connected');
    } catch (error) {
      console.error('SignalR Connection Error: ', error);
    }
  }
  

  // error come from here
// Join room
public async joinRoom(user: string, room: string){
  return this.connection.invoke("JoinRoom", {user,room})
}



// send Messages
public async sendMessage(message: string){
  return this.connection.invoke("SendMessage", message)
}



// leave chat room
public async leaveChat(){
  return this.connection.stop();
}

}
