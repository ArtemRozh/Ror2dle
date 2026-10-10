import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { LocalStateService } from './services/local-state.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ror2dle';
  toRevealDetails: boolean = false;
  currentRouteName: string = 'Daily';

  constructor(
    private router: Router,
    private localState: LocalStateService
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.getUrlReadableName(event.urlAfterRedirects);
    });
  }

  ngOnInit() {
    this.localState.loadState();
    this.localState.applyAppearance();
  }

  revealDetails(){
    this.toRevealDetails = !this.toRevealDetails;
  }

  getUrlReadableName(url: string) {
    if (url.includes('/daily')) this.currentRouteName = 'Daily';
    else if (url.includes('/endless')) this.currentRouteName = 'Endless';
    else if (url.includes('/items')) this.currentRouteName = 'Items';
    else if (url.includes('/config')) this.currentRouteName = 'Config';
    else this.currentRouteName = 'Screen';
  }
}
