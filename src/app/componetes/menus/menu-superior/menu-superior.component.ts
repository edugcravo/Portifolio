import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ContatoComponent } from '../../contato/contato.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {

  constructor(private elementRef: ElementRef, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ContatoComponent, {
      //mudar cor do dialog
      panelClass: 'custom-dialog-container'
    });
    }
      
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      section.style.animation = 'scrollAnimation 1s ease'; // Ajuste a duração da animação conforme desejado
      // Remover a animação após a conclusão para que ela possa ser aplicada novamente se clicar novamente
      section.addEventListener('animationend', () => {
        section.style.animation = '';
      });
    }
  }

}
