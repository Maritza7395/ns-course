import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular'
import { ChallengesRoutingModule } from  "./challenges-routing.module";
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';
import { TodayComponent } from './today/today.component';
// import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ChallengesRoutingModule,
        SharedModule
    ],
    declarations: [
        CurrentChallengeComponent,
        TodayComponent,
        // ChallengeTabsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class ChallengesModule {}
