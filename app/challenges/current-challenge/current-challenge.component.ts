import { Component, Input, ViewContainerRef } from '@angular/core';
import { ModalDialogService } from '@nativescript/angular';
import { DayModalComponent } from '../day-modal/day-modal.component';
import { UIService } from '../../shared/ui.service';

@Component({
    selector: 'ns-current-challenge',
    templateUrl: './current-challenge.component.html',
    styleUrls: ['./current-challenge.component.common.css']
})

export class CurrentChallengeComponent {

    constructor(
        private modalDialog: ModalDialogService,
        private vcRef: ViewContainerRef,
        private uiService: UIService
    ) { }

    onChangeStatus() {
        this.modalDialog.showModal(DayModalComponent, {
            fullscreen: true,
            viewContainerRef: this.uiService.getRootVcRef()
                ? this.uiService.getRootVcRef()
                : this.vcRef,
            context: { date: new Date() }
        }).then((action: string) => {
            console.log("action: ", action)
        });
    }
}
