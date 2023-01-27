import { Injectable } from '@angular/core';

@Injectable({ // @Injectable decorator means this class is used in dependency injection
  providedIn: 'root' // service provided at root level - can be injected anywhere
})
export class MessageService {
  messages: string[] = []; // create new property messages with type array of strings

  /**
   * add function to add a new message to the messages array
   * @param message - the new message to be added to the array - type string
   * @returns nothing
   */
  add(message: string): void {
    this.messages.push(message);
  }

  /**
   * clear function to return the messages array to an empty string
   */
  clear(): void {
    this.messages = [];
  }
}
