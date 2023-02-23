import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() closeMenu: EventEmitter<any> = new EventEmitter<any>();

  public userId: string;


  constructor(
    public auth: AuthService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeMenu.emit();
      }
    });

  }


  ngOnInit(): void {
    this.userId = this.auth.userId;
  }

}
