import { Component } from '@angular/core';

import { MessageService } from "./messages/message.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService]
    // This will instantiate a MessageService object for AppComponent and all its child components
})
export class AppComponent {
}