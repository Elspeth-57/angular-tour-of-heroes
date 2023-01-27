import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  /**
   * When MessagesComponent is created the MessageService will be injected into the public messageService property.
   * The property is public as you need to bind the property in the template as well as accessing it in the typescript.
   * @param messageService - public property to hold MessageService
   */
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
