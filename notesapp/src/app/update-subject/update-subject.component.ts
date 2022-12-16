import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent {
  id: number;
  subject: Subject = new Subject();
  
  constructor(private subjectService: SubjectService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.subjectService.getSubjectById(this.id).subscribe(data => {
      this.subject = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.subjectService.updateSubject(this.subject).subscribe( data =>{
      this.goToSubjectList();
    }
    , error => console.log(error));
  }

  goToSubjectList(){
    this.router.navigate(['/subject']);
  }

}
