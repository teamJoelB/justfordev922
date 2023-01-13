import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  user: any;
  msg: any;
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
  }

  connexion(value: any) {
    this.http.post('http://localhost:8289/login', value).subscribe({
      next: (data)=> {this.user = data; 
        if(this.user != null) {
          sessionStorage.setItem('userConnected', JSON.stringify(this.user));
          this.route.navigateByUrl('my-memo');
        }else{
          this.msg = 'identifiant ou mdp inccorect';
        }
      },
      error: (err) => { console.log(err) }
    });
  }
}
