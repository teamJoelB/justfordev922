import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {
  memos: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let u: any = sessionStorage.getItem('userConnected');
    let user = JSON.parse(u);
    console.log('user ' , user);
    this.http.get('http://localhost:8289/memo/user/' + user.id).subscribe({
      next: (data) => { this.memos = data },
      error: (err) => { console.log(err) }
    });
  }

}
