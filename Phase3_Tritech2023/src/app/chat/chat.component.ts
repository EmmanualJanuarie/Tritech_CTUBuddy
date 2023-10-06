import { Component , inject, OnInit, ViewChild, ElementRef, AfterViewChecked, OnDestroy} from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-chat',
  templateUrl:'chat.component.html' 
  
  ,
  styles: [`
  .container{
    max-width:1170px;
    margin:auto;
    background-color:#f8f8f3;
  }

  .chat_header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:70px;
  }

  .no_chat{
    height:calc(100vh - 70px);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .join{
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  .online{
    width:10px;
    height:10px;
    border-radius: 50%;
    background: green;
  }

  img{
    max-width: 100%;
  }

  .inbox_people{
    background-color:#f8f8f3;
  
    float:left;
    overflow:hidden;
    width:40%;
    border-right:1px solid #c4c4c4;
  }

  .inbox_msg{
    border: 1px solid #c4c4c4;
    clear: both;
    overflow:hidden;
  }
  
  .top_spac{
    margin:20px 0 0;
  }

  .recent_heading{
    float:left;
    width: 40%;
  }

  .srch_bar{
    display: inline-block;
    text-align: right;
    width: 60%;
  }

  .headind_srch{
    padding: 10px 29px 10px 20px;
    overflow: hidden;
    border-bottom: 1px solid #c4c4c4;
    color: black;
  }

  .recent_heading h4{
    color: #05728f;
    font-size:20px;
    margin: auto;
  }

  .srch_bar input{
    border: 1px solid #c4c4c4;
    border-width: 0 0 1px 0;
    width: 80%;
    padding: 2px 0 4px 6px;
    background:none;
    outline:none;
  }

  .srch_bar .input-group-addon button{
    background:
    rgba(0, 0, 0, 0) none repeat scroll 0 0;
    border: medium none;
    padding: 0;
    color:#707070;
    font-size:18px;
  }

  .srch_bar .input-group-addon{
    margin: 0 0 0 -27px;
  }

  .chat_ib h5{
    font-size: 15px;
    color:#464646;
    margin:0 0 8px 0;
  }

  .chat_ib h5 span{
    font-size:13px;
    float:right;
  }

  .chat_ib p{
    font-size: 14px;
    color:#989898;
    margin:auto;
  }

  .chat_img{
    float:left;
    width:11%;

  }

  .chat_img img{
    border-radius:50%;

  }

  .chat_ib{
    float:left;
    padding: 0 0 0 15px;
    width:88%;
  }

  .chat_people{
    overflow:hidden;
    clear:both;
  }

  .chat_list{
    border-bottom: 1px solid #c4c4c4;
    margin:0;
    padding: 10px 10px 10px;
  }

  .inbox_chat{
    height:550px;
    overflow-y: scroll;
  }

  .active_chat{
    background: #ebebeb;
  }

  .incoming_msg_img{
    display: inline-block;
    width: 6%;
  }

  .received_msg{
    display:inline-block;
    padding: 0 0 0 10px;
    vertical-align: top;
    width:92%;
  }

  .received_withd_msg p{
    background: #ebebeb none repeat scroll 0 0;
    border-radius: 3px;
    color: #646464;
    font-size: 14px;
    margin: 0;
    padding: 5px 10px 5px 12px;
    width:100%;
  }

  .time_date{
    color:#747474;
    display:block;
    font-size: 12px;
    margin: 8px 0 0;
    margin-bottom:6px;
  }

  .received_withd_msg{
    width: 57%;
  }

  .mesgs{
    float:left;
    padding: 30px 15px 0 25px;
    width: 60%;
  }

  .sent_msg p{
    background: 
    #05728f none repeat scroll 0 0 ;
    border-radius:3px;
    font-size: 14px;
    margin:0;
    color: #fff;
    padding: 5px 10px 5px 12px;
    width: 100%;
  }

  .outgoing_msg {
    overflow: hidden;
    margin: 8px 0 8px;
  }

  .sent_msg{
    float:right;
    width: 46%;
  }

  .input_msg_write input{
    background:
    rgba(0, 0, 0, 0) none repeat scroll 0 0;
    border: medium none;
    color:#4c4c4c;
    font-size:15px;
    min-height:48px;
    width:100%;
  }

  .type_msg{
    border-top: 1px solid #c4c4c4;
    position: relative;
  }

  .msg_send_btn{
    background:
    #05728f none repeat scroll 0 0;
    border: medium none;
    border-radius: 50%;
    color:#fff;
    cursor: pointer;
    font-size: 17px;
    height: 33px;
    position: absolute;
    right: 0;
    top: 11px;
    width: 33px;
  }

  .messaging{
    padding: 0 0 58px 0;
  }

  .msg_history{
    height: 516px;
    overflow-y: auto;
  }

  body{
    background: rgba(76, 175, 80, 0);

    /* move the form */
    position:relative;
    top:10%;
  }
  
  html{
    overflow-x: hidden;
    overflow-y: hidden;

    background-image: url('/assets/img/chat.webp');
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;

    height:100vh;
  }

  .navbar-menu{
    text-decoration:none;
  }



  `
  ]
})
export class ChatComponent implements OnInit, AfterViewChecked, OnDestroy{

  constructor( private navbarService : NavbarService){}

chatService = inject(ChatService);
inputMessage = "";
messages: any[] = [];
router = inject(Router);
loggedInUserName = sessionStorage.getItem("user");
roomName = sessionStorage.getItem("room")


@ViewChild('scrollMe') private scrollContainer!: ElementRef;

ngOnInit(): void {
  this.chatService.messages$.subscribe(res=>{
    this.messages = res
    console.log(this.messages);
  });

  // hide the nav bar
  this.navbarService.hide();
}

ngAfterViewChecked(): void {
  this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
}

ngOnDestroy(): void {
  // is called when navbar is destroyed
  this.navbarService.display();
}

// enable you to send messages
sendMessage(){
this.chatService.sendMessage(this.inputMessage)
.then(()=>{
  this.inputMessage = '';
}).catch((err)=>{
  console.log(err);
  
})
}

leaveChat(){
  this.chatService.leaveChat()
.then(() =>{
  this.router.navigate(['welcome']);
  // settig timeout
  setTimeout(()=>{
    location.reload();
  }, 0);
}).catch((err)=>{
  console.log(err);
  
})
}
}
