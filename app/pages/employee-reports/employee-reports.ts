import {Page, NavParams} from 'ionic-framework/ionic';
import {DataService} from '../../services/dataService';

@Page({
     templateUrl: 'build/pages/employee-reports/employee-reports.html'
})

export class EmployeeReportsPage{
    empDetail = null;
    constructor(private dataservice:DataService,  private navParams:NavParams){
        var empId = navParams.get('id');
        this.empDetail = dataservice.findById(empId);
    }
}