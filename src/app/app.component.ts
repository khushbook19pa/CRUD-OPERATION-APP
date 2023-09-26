import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'khusbhboo';
  menu = [
    {
      title: 'Tab 1',
      url: '/',
      active: true, // default active tab
    },
    {
      title: 'Tab 2',
      url: '/data',
      active: false,
    },
    {
      title: 'Tab 3',
      url: '/table',
      active: false,
    },
  ];
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.onPageLoad()
  }
  onPageLoad() {
    this.menu.forEach(m => m.active = false)
    let _selected_menu = this.menu?.find(x => x.url.includes(this.router.url))

    if (_selected_menu) {
      _selected_menu.active = true
    }
  }
  tabSelected(url: string) {
    this.router.navigateByUrl(url)
  }
}
