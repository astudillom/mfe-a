import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'mfe-a';
  constructor(private readonly router: Router) {}

  goToPageOne() {
    this.router.navigate(['/mfea/page-one']);
  }
}
