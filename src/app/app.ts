import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
import { ValidationCallbackData } from 'devextreme/common';

@Component({
  selector: 'app-root',
  imports: [DxTextBoxModule, DxValidatorModule, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bug');

  email: string = 'test@test.test';

  //WORKED YEARS NOW (still deployed) IN PROJECT BEFORE - BUT NOW COMPILATION ERROR => AND RUNTIME ERROR SAYS: validationCallback of an asynchronous rule should return a jQuery or a native promise
  async emailValidation(params: ValidationCallbackData): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => { resolve(true); }, 2000);
    });
  }



}
