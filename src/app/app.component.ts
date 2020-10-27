import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Subscription } from 'rxjs';
import { routeAnimation } from "./animations";


@Component({
  selector: "app-root",
  animations: 
  [
    routeAnimation
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  name = "Angular";
  @HostBinding('@.disabled') public animationDisabled = false;
  useMobileNav: boolean;
  mobileNavSub: Subscription;

  constructor(private breakPointObserver: BreakpointObserver) {
    this.useMobileNav = false;
  }

  ngOnInit(): void {
    this.mobileNavSub = this.breakPointObserver.observe('(max-width: 800px)').subscribe(result => {
      this.useMobileNav = result.matches;
    })
  }

  ngOnDestroy(): void {
    this.mobileNavSub.unsubscribe();
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}

