
import * as moment from 'moment';

class Utility {

    static toTick(start , current){

        let then = moment(start,"YYYY/MM/DD HH:mm:ss");
        let now = moment(current,"YYYY/MM/DD HH:mm:ss");
        let tick = moment.utc(moment(now,"DD/MM/YYYY HH:mm:ss").diff(then)).format("HH:mm:ss");

            return tick;
    }

    static toTickMs(start , current){

        let then = moment(start,"YYYY/MM/DD HH:mm:ss");
        let now = moment(current,"YYYY/MM/DD HH:mm:ss");
        let tick = moment.utc((moment(now,"DD/MM/YYYY HH:mm:ss").diff(then)))/1000;

            return tick;
        }


    static isBetween( x,lower, upper) {

            return lower <= x && x <= upper;
  }

  static toPrice(start , current){

        let price = undefined;
        let tick =  Utility.toTickMs(start , current);


        if(Utility.isBetween(tick, 0, 3600)) {
        price = 5;
        } 
        else if (Utility.isBetween(tick, 3600, 5400 )) {
        price = 7.5;
        } 
        else if (Utility.isBetween(tick, 5400, 7200)) {
        price = 10;
        } 
        else if (Utility.isBetween(tick, 7200, 9000)) {
        price = 12.5;
        } 
        else if (Utility.isBetween(tick, 9000, 10800)) {
        price = 15;
        }
        else if (Utility.isBetween(tick, 10800, 12600)) {
        price = 17.5;
        } 
        else if (Utility.isBetween(tick, 12600, 14400)) {
        price = 20;
        } 
        else if (Utility.isBetween(tick, 14400, 15200)) {
        price = 22.5;
        } 
        else if (Utility.isBetween(tick, 15200, 45000)) {
            price = 24;
        } 
     
            return price;
    }
  
}

export default Utility;