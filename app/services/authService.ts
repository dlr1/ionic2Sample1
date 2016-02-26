import {Storage, LocalStorage} from 'ionic-framework/ionic';
export class AuthService{
    
    local: Storage = new Storage(LocalStorage);
    login(credentials){        
        if (credentials.username == credentials.password)
            return {id_token:credentials.username + '123'};
        else
            return null; 
            
    }
    logout(){
        
    }
    authenticated(){
        let token = this.local.get('id_token')._result;
        return token != null;
    }
}