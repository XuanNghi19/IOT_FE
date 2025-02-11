import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import {ButtonModule } from 'primeng/button';

interface Profile {
  name: string;
  masv: string;
  passs: string;
}

@Component({
  selector: 'app-profile',
  imports: [MenuComponent, ButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profile: Profile = {
    name: 'Phạm Xuân Nghị',
    masv: 'B21DCPT168',
    passs: '123456'
  };
}
