import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portifolio';

  showScrollToTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollToTop = window.scrollY > 100;
  }

  scrollToTop() {
    this.scrollTo(0, 300); // Chama a função de rolagem suave
  }

  // Função de rolagem suave personalizada
  scrollTo(target: number, duration: number) {
    const start = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (timestamp: number) => {
      const currentTime = timestamp - startTime;
      const progress = Math.min(currentTime / duration, 1);

      window.scrollTo(0, start + (target - start) * progress);

      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }
}
