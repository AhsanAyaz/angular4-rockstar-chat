import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';

export interface Message {
  id: string;
  text: string;
  user?: string;
}

@Component({
  selector: 'ar-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesList') private messagesList: ElementRef;
  @Input('messages') public messages: Array<Message>;
  constructor() { }

  ngOnInit() {
      this.scrollToBottom();  // scroll to bottom on component init
  }

  ngAfterViewChecked() {
      this.scrollToBottom();  // whenever the change detection happens. I.e. messages are changed.
  }

  removeMessage(message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }

  /**
   * @author Ahsan Ayaz
   * Scrolls to bottom
   */
  scrollToBottom() {
        try {
          this.messagesList.nativeElement.scrollTop = this.messagesList.nativeElement.scrollHeight;
        } catch (err) {
          console.log(err);
        }
    }

}
