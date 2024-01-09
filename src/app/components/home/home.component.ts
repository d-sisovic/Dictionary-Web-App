import { BodyComponent } from '../body/body.component';
import { HeaderComponent } from '../header/header.component';
import { InputComponent } from '../ui/input/input.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BodyComponent,
    InputComponent,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
