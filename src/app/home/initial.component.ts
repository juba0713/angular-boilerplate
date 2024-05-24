import { Component } from '@angular/core';

import { AccountService } from '../_services';

@Component( {templateUrl : 'initial.component.html'})
export class InitialComponent {
    account = this.accountService.accountValue;

    constructor(private accountService: AccountService) { }
}