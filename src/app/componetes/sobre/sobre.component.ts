import { Component, AfterViewInit } from '@angular/core';
import { ContatoComponent } from '../contato/contato.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements AfterViewInit {
  line1Width = '0';
  line2Width = '0';

  constructor(private dialog: MatDialog){

  }

  ngAfterViewInit() {
    this.typeNextLine();
  }

  typeNextLine() {
    setTimeout(() => {
      this.line1Width = '100%';
      setTimeout(() => {
        this.line2Width = '100%';
      }, 1500); // Ajuste o tempo entre a primeira e a segunda linha
    }, 500); // Ajuste o tempo de pausa antes de começar a segunda linha
  }

  openDialog() {
    this.dialog.open(ContatoComponent, {
      //mudar cor do dialog
      panelClass: 'custom-dialog-container'
    });
    }
}
