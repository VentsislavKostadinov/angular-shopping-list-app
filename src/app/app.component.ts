import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-shopping-list-app';
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature
  }
}
