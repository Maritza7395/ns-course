import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { AppComponent } from "./app.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "@nativescript/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AuthComponent } from './auth/auth.component';
import { DayModalComponent } from './challenges/day-modal/day-modal.component';
import { SharedModule } from './shared/shared.module';
import { ChallengeTabsComponent } from './challenges/challenge-tabs/challenge-tabs.component';


// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule,
        AppRoutingModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        AuthComponent,
        DayModalComponent,
        ChallengeTabsComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents:[
        DayModalComponent
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
