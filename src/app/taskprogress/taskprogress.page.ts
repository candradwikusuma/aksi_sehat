import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskprogress',
  templateUrl: './taskprogress.page.html',
  styleUrls: ['./taskprogress.page.scss'],
})
export class TaskprogressPage implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }
  Tasklist = [
    { name: 'Membersihkan Tempat Tidur', point: 100, isChecked: false },
    { name: 'Task 2', point: 100, isChecked: true },
    { name: 'Task 3', point: 100, isChecked: false },
    { name: 'Task 4', point: 100, isChecked: true },
    { name: 'Task 5', isChecked: true },
    { name: 'Task 6', isChecked: true },
    { name: 'Task 7', isChecked: true },
    { name: 'Task 8', isChecked: true },
    { name: 'Task 9', isChecked: true },
    { name: 'Task 10', isChecked: false },
  ]
  back() {
    // this.router.navigate(['home']);
    this.router.navigateByUrl('/task');
  }
}
