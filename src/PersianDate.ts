import {gregorianToJalali} from "./Convert/gerigorianToJalali";

interface PersianDateInfo {
    year: number;
    month: number;
    day: number;
}

export default class PersianDate {
    private _date: Date;


    static monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    static weekNames = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];
    static shortWeekNames = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

    static gregorianToJalali = gregorianToJalali;

    /**
     * @param {string | number | Date} date
     */
    constructor(date: string | number | Date) {

        switch (typeof date) {
            case 'object':
                this._date = date;
                break;
            case 'number' :
            case 'string' :
                this._date = new Date(date);
                break;
            default :
                throw 'PersianDate constructor has an argument in type of string, unix time (number) or Date';
        }
    }

    getPersianDateObject = () => PersianDate.gregorianToJalali(this._date.getFullYear(), this._date.getMonth() + 1, this._date.getDate());

    getYear = () => this.getPersianDateObject().year;
    getMonth = () => this.getPersianDateObject().month;
    getDay = () => this.getPersianDateObject().day;

    valueOf() {
        return this._date.valueOf();
    }
}

Object.defineProperty(PersianDate, 'Now', {get: () => new PersianDate(new Date())});