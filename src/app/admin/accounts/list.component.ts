import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services';
import { Account } from '@app/_models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    accounts: any[];

    constructor(private accountService: AccountService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(accounts => this.accounts = accounts);
        
    }

    deleteAccount(id: string) {
        const account = this.accounts.find(x => x.id === id);
        account.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.accounts = this.accounts.filter(x => x.id !== id) 
            });
    }

    disableAccount(id: string) {
        const account = this.accounts.find(x => x.id === id);
        account.deleteFlg = "true";
        this.accountService.disable(id)
            .pipe(first())
            .subscribe(() => {
                this.accounts = this.accounts.filter(x => x.id !== id) 
            });
        this.router.navigate(['/admin']); 
    }

    enableAccount(id: string) {
        const account = this.accounts.find(x => x.id === id);
        account.deleteFlg = "false";
        this.accountService.enable(id)
            .pipe(first())
            .subscribe(() => {
                this.accounts = this.accounts.filter(x => x.id !== id) 
            });
        this.router.navigate(['/admin']); 
    }
}