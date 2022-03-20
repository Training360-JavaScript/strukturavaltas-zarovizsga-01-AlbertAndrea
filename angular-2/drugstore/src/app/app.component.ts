import { Component } from '@angular/core';
import { DrugService } from './service/drug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drugstore';

  constructor(
    private drugService: DrugService,
  ) {
    this.drugService.getAll().subscribe(drugs => console.log(drugs))
  }

}
