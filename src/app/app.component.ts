import { Component, HostBinding } from "@angular/core";
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
export class AppComponent {
  name = "Angular";
  @HostBinding('@.disabled') public animationDisabled = false;
  isNavOpen = true;

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}

