import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';
import { SlideInterface } from '../model/slide.interface';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {

  slides: SlideInterface[] = [
    { url: '/assets/300spartan.jpg', title: '300' },
    { url: '/assets/joker.jpg', title: 'joker' },
    { url: '/assets/vikram.jpg', title: 'vikram' },
    { url: '/assets/avatar-2.jpg', title: 'avatar' },
    { url: '/assets/ok kanmani.jpg', title: 'ok kanmani' }
    // { url: '/assets/image-4.jpeg', title: 'city' },
    // { url: '/assets/image-5.jpeg', title: 'italy' },
  ]
}
