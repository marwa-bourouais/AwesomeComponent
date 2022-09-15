import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Candidate } from '../../models/candidate.model';
import { CandidatesService } from '../../services/candidates.service';

@Component({
  selector: 'app-single-candidate',
  templateUrl: './single-candidate.component.html',
  styleUrls: ['./single-candidate.component.scss']
})
export class SingleCandidateComponent implements OnInit {

  loading$!: Observable<boolean>;
candidate$!: Observable<Candidate>;

constructor(private candidatesService: CandidatesService,
  private route: ActivatedRoute,
  private router: Router) { }


onGoBack() {
this.router.navigateByUrl('/reactive-state/candidates');
}

ngOnInit(): void {
    this.initObservables();
}

private initObservables() {
    this.loading$ = this.candidatesService.loading$;
    this.candidate$ = this.route.params.pipe(
      switchMap(params => this.candidatesService.getCandidateById(+params['id']))
  );
}

}
