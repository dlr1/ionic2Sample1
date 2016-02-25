import {App, IonicApp, Platform, MenuController} from 'ionic-framework/ionic';
import {DriverListPage} from './pages/driver/driverlist';
import {EmployeeIndexPage} from './pages/employeeindex/employeeindex';
import {DataService} from './services/dataService';
import {Jsonp, JSONP_PROVIDERS} from 'angular2/http';

// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';


@App({
  templateUrl: 'build/app.html',
  config: {},
  providers:[JSONP_PROVIDERS, DataService] // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  
  pages = [
      {title:"Drivers", component:DriverListPage}
      ,{title:"Employees", component:EmployeeIndexPage}
  ]
  rootPage: Type = EmployeeIndexPage;
  
  openPage(page){
        this.menu.close();
        let nav = this.app.getComponent('nav');
        nav.push(page.component);
        
  }

  constructor(platform: Platform, private menu:MenuController, private app:IonicApp) {
      
    platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }
}
 