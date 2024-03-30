import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  public name = 'Inga loves Angular';
  public surname = 'Developer';

  public date = new Date().toDateString();
}
