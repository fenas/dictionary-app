import { MainHttpService } from './../../main-http.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Form = new FormGroup({
    word: new FormControl('', Validators.required),
  });

  constructor(private httpService: MainHttpService) { }

  ngOnInit() {
    console.log(this.Form);
  }

  search() {
    console.log(this.word.value);
    this.httpService.getDetails();
  }

  get word() {
    return this.Form.get('word');
  }

}
