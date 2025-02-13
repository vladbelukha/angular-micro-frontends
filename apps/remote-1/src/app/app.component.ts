import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="red">
      <h1>Red Remote 1</h1>
    </div>
  `,
  styles: `
    .red {
      display: block;
      background-color: rgb(202, 145, 145);
      color: white;
    }
  `,
})
export class AppComponent {
  title = 'remote-1';
}
