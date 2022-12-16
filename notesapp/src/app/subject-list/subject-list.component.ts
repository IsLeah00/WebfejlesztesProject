import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject'
import { SubjectService } from '../subject.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  subjects: Subject[];

  constructor(private subjectService: SubjectService, private router: Router) { }
  ngOnInit(): void {
    this.getSubjects();
  }

  private getSubjects(){
    this.subjectService.getSubjectsList().subscribe(data => {
      this.subjects = data;
    });
  }

  updateSubject(id: number){
    this.router.navigate(['update-subject', id]);
  }

  deleteSubject(id: number){
    this.subjectService.deleteSubject(id).subscribe( data => {
      console.log(data);
      this.getSubjects();
    })
  }

}
