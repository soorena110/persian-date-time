import PersianDate from "../PersianDate";

const p1 = new PersianDate('2019-05-28T04:18:38.699+0000');
console.log(p1);

const p2 = PersianDate.Now;
console.log(p2.getPersianDateObject());


const p3 = new PersianDate(1559110235495);
console.log(p3.getPersianDateObject());

