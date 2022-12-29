import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "angular-translate-app";
  public browserLang: any;
  public currentLang: string = '';

  constructor(
    public translate: TranslateService
  ) {
    
    translate.addLangs(['en', 'nl','hi','mr','es']);
    translate.setDefaultLang('en');
    this.browserLang = translate.getBrowserLang();
    console.log(this.browserLang,":::browser");
    translate.use(this.browserLang.match(/nl|hi|mr|es/) ? this.browserLang : 'en');
    this.currentLang = this.translate.currentLang;
  }

ngOnInit(): void {
}

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}

