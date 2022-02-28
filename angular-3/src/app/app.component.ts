import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Construction } from './model/construction';
import { ConstructionService } from './service/construction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-3';
  list$: Observable<Construction[]> = this.constructionService.getAll();

  constructor(
    private constructionService: ConstructionService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }


  onDelete(construction: Construction): void {
    this.constructionService.delete(construction.id).subscribe(
      () => this.list$ = this.constructionService.getAll(),
      ar => this.router.navigate(['/', 'construction']),
    );
    }

}
