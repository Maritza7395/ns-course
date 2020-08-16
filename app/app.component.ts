import { Component, ViewChild, ChangeDetectorRef, OnInit, AfterViewInit, OnDestroy, ViewContainerRef } from "@angular/core";
import { Subscription } from 'rxjs';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

import { UIService } from './shared/ui.service';
@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
    moduleId: module.id,
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;
  activeChallenge = '';
  private drawerSub: Subscription;
  private drawer: RadSideDrawer;
  private vcRef: ViewContainerRef;

  constructor(
    private uiService: UIService,
    private changeDetectionRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.drawerSub = this.uiService.drawerState.subscribe(() => {
      if (this.drawer) {
        this.drawer.toggleDrawerState();
      }
    });

    this.uiService.setRootVcRef(this.vcRef);
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this.changeDetectionRef.detectChanges();
  }

  onChallengeInput(challengeDescription: string){
      this.activeChallenge = challengeDescription;
      console.log('onChallengeInput: ', challengeDescription);
    }
    onLogout() {
        this.uiService.toggleDrawer();
      }

      ngOnDestroy() {
        if (this.drawerSub) {
          this.drawerSub.unsubscribe();
        }
      }
 }
