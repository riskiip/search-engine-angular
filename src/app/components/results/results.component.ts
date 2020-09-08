import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoogleResponse } from 'src/app/models/GoogleResponse.model';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  results: GoogleResponse;
  subs: Subscription[] = [];
  term;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    const { term } = history.state;
    this.term = term;

    if (term) {
      this.subs.push(
        this.searchService.getSearchData(term).subscribe( (data: GoogleResponse) => {
          this.results = data;
        })
      )
    }
  }

  ngOnDestroy() {
    this.subs.map(s => s.unsubscribe());
  }

}
