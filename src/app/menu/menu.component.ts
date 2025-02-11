import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @ViewChild('menu') menu: ElementRef;
  isOpen = false; // Sidebar đóng mặc định

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.listen(this.menu.nativeElement, 'mouseenter', () => {
      this.isOpen = true; // Mở menu khi hover vào
    });

    this.renderer.listen(this.menu.nativeElement, 'mouseleave', () => {
      this.isOpen = false; // Ẩn menu khi rời chuột
    });
  }
}
