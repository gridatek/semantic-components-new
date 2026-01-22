import { ChangeDetectionStrategy, Component } from '@angular/core';
import Navbar from '../../components/navbar/navbar';

@Component({
  selector: 'app-home-page',
  imports: [Navbar],
  template: `
    <app-navbar />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {}
