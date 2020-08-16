import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ActionBarComponent } from "./ui/action-bar/action-bar.component";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NativeScriptRouterModule } from "@nativescript/angular"

@NgModule({
    declarations: [
        ActionBarComponent
    ],
    exports: [
        ActionBarComponent
    ],
    imports:[
        NativeScriptCommonModule,
        NativeScriptRouterModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class SharedModule {}
