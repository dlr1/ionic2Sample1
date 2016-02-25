import {Page, NavParams} from 'ionic-framework/ionic';

import {DataService} from '../../services/dataService';

@Page({
  templateUrl: 'build/pages/driver/driver.html'  
})

export class DriverPage {
  driver = {}; 
  
  constructor(private _dataService:DataService, private _navParams:NavParams) {
         this._dataService.getDriverDetails(_navParams.get('driverId')).subscribe(
          (data)=>{ 
              this.driver = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver;
              console.log(this.driver);               
            });
  }
  
  
}
