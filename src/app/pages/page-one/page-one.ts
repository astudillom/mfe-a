import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-one',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './page-one.html',
  styleUrl: './page-one.scss'
})
export class PageOne {

  constructor(private readonly router: Router) { }
  goToPageTwo() {
    this.router.navigate(['/mfea/page-two']);
  }
}
