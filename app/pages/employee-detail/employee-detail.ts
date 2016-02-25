import {Page, Nav, NavParams} from 'ionic-framework/ionic';
import {DataService} from '../../services/dataService';
import {EmployeeIndexPage} from '../employeeindex/employeeindex';

@Page({
     templateUrl: 'build/pages/employee-detail/employee-detail.html'
})

export class EmployeeDetailPage{
    empDetail = null;
    constructor(private dataservice:DataService, private _nav:Nav, private navParams:NavParams){
        var empId = navParams.get('id');
        this.empDetail = dataservice.findById(empId);
    }
    viewManager(){
        this._nav.push(EmployeeDetailPage,{id:this.empDetail.managerId});
    }
    
    viewReports(){
        this._nav.push(EmployeeIndexPage,{id:this.empDetail.id});
    }
}