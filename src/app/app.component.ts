import { Component } from '@angular/core';
import { AuthService } from './modules/loymax/servies/auth/auth.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'firebase-app';

  constructor(private readonly loymaxAuth: AuthService) {
    const clientId = 'KSO-CM63-2(606302)';
    const test = this.loymaxAuth
      .getMerchantToken(clientId)
      .pipe(
        switchMap((token) =>
          this.loymaxAuth.getClientCode(clientId, token, '79645434100')
        )
      );

    test.subscribe((res) => {
      console.log(res);
    });
  }
}
