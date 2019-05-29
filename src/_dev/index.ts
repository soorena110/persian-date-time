import PersianDate from "../PersianDate";
import {gregorianToJalali} from "../Convert/gerigorianToJalali";

const p1 = new PersianDate('2019-05-28T04:18:38.699+0000');
console.log(p1.getPersianDateObject());


const p2 = new PersianDate('2019-05-28T04:18:38.699+0000');
console.log(p2.getPersianDateObject());


const p3 = new PersianDate(1559110235495);
console.log(p3.getPersianDateObject());

(window as any).PersianDate = PersianDate;

console.log(gregorianToJalali)