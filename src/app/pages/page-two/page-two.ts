import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-page-two',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './page-two.html',
  styleUrl: './page-two.scss'
})
export class PageTwo {
  constructor(private readonly router: Router) { }

  goToMFEBHome() {
    this.router.navigate(['/mfeb']);
  }

  goToMFEBPageOne() {
    this.router.navigate(['/mfeb/page-one']);
  }

}
