import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router'
import { AuthComponent } from './auth/auth.component'
import { ChallengeTabsComponent } from './challenges/challenge-tabs/challenge-tabs.component'


const routes: Routes = [
    { path: '', component: ChallengeTabsComponent },
    // { path: 'edit-challenge', component: challengeEditComponent, data:{ anyData: 'anyValue' } },
    {
        path: 'challenges', component: ChallengeTabsComponent
        // loadChildren: () => import("./challenges/challenges.module").then(m => m.ChallengesModule)
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})

export class AppRoutingModule{}
