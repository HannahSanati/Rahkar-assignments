import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  http=inject(HttpClient)
  SendMessage(user_id:number, message:string,reply_markup:any){
    var data={
      chat_id:user_id,
      text:message,
      reply_markup:{keyboard:reply_markup}
    }
    return this.http.post(`https://api.telegram.org/bot6977287824:AAFJKcug5MCLU3ghb28taNhVt-Vki9trXUQ/sendMessage
    `,data)
  } 
  sendPhoto(user_id:number,photourl:string,caption:string){
    var data={
      chat_id:user_id,
      photo:photourl,
      caption:caption
    }
    return this.http.post(`https://api.telegram.org/bot6977287824:AAFJKcug5MCLU3ghb28taNhVt-Vki9trXUQ/sendMessage
    `,data)
  }
}