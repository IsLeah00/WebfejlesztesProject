import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css']
})
export class CreateSubjectComponent implements OnInit {
  subject: Subject = new Subject();
  constructor(private subjectService: SubjectService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveSubject(){
    this.subjectService.createSubject(this.subject).subscribe( data =>{
      console.log(data);
      this.goToSubjectList();
    },
    error => console.log(error));
  }

  goToSubjectList(){
    this.router.navigate(['/subject']);
  }

  onSubmit(){
    console.log(this.subject);
    this.saveSubject();
  }

}
