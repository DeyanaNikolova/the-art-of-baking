import { Component, Input } from '@angular/core';
import { User } from 'src/app/types/user';


@Component({
  selector: 'hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
})
export class HeroDetailsComponent {
  @Input()
  hero?: User;
}
