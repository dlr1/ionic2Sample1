import {Page, Nav, Platform} from 'ionic-framework/ionic';
import {DriverPage} from './driver';
import {DataService} from '../../services/dataService';

@Page({
  templateUrl: 'build/pages/driver/driverlist.html'
})

export class DriverListPage {
  
  items = [];
  filteredItems = [];
  searchVisible: boolean = false;
  searchValue: string = null;
  constructor(private _dataService:DataService, private _nav:Nav, private _platform: Platform) {

  }
  itemSelected(driver){
      this._nav.push(DriverPage,{driverId:driver.Driver.driverId});      
  }
  
  toggleSearch(){    
     this.searchVisible = !this.searchVisible;      
  }
  doFilter(){
      this.filteredItems = this.items.filter(
          (item)=>item.Driver.givenName.startsWith(this.searchValue)
          );
  }
  
  ngOnInit(){
      this._dataService.getDrivers().subscribe(
          (data)=>{ 
              this.items = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
              this.filteredItems = this.items;              
            });
  }
}
