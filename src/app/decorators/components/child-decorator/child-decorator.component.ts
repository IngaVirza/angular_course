import { Component } from '@angular/core';

@Component({
  selector: 'app-child-decorator',
  templateUrl: './child-decorator.component.html',
  styleUrl: './child-decorator.component.scss',
})
export class ChildDecoratorComponent {
  public title = 'Hello';
  public _second = 'Word';
}
