import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatBadgeModule, MatButtonModule, MatCheckboxModule, 
  MatCurrencyModule, MatDataSource, MatExpansionModule, 
  MatFormFieldModule, MatGridModule, MatIconsModule, MatRadioModule, 
  MatSelectModule, 
  MatStepperModule} from 'sunny-material';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  host: {ngSkipHydration: 'true'},
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatCurrencyModule,
    MatIconsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridModule,
    MatExpansionModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  control = new FormControl(0, Validators.required)
  isChecked = new FormControl(true);

  tableColumnsExample = ['id', 'name'];

  radioExample = new FormControl("1");
  selectExample = new FormControl("Teste 1");

  dataSourceExample = new MatDataSource([
    {
      id: 1, 
      name: "Exemplo 1"
    }, 
    {
      id: 2, 
      name: "Exemplo 2"
    }, 
    {
      id: 3, 
      name: "Exemplo 3"
    }
  ]);

  onClickRow(row: any) {
    console.log(row);
  }
}
