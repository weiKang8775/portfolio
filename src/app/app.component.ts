import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostBinding, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
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
export class AppComponent implements OnInit {
  name = "Angular";
  @HostBinding('@.disabled') public animationDisabled = false;
  useMobileNav: boolean;

  constructor(private breakPointObserver: BreakpointObserver) {
    this.useMobileNav = false;
  }

  ngOnInit(): void {
    this.breakPointObserver.observe('(max-width: 800px)').subscribe(result => {
      this.useMobileNav = result.matches;
    })
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}

