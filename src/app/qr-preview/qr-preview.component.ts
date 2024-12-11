import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-qr-preview',
  imports: [CardComponent],
  template: `
    <div class="w-screen h-screen flex justify-center items-center">
      <qr-preview-card class="justify-items-center" />
    </div>
  `,
  styles: [],
})
export default class QrPreviewComponent {}
