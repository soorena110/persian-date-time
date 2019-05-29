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
    valueOf = () => this._date.valueOf();

    toString(format = 'yyyy/mm/dd') {
        const date = this.getPersianDateObject();

        const x = format.replace('yyyy', date.year.toString()).replace('yy', (date.year % 100).toString())
            .replace(/(mm)|(MM)/, (date.month < 10 ? '0' : '') + date.month).replace(/[mM]/, date.month.toString())
            .replace('dd', (date.day < 10 ? '0' : '') + date.day).replace('d', date.day.toString())
        return x;
    }

    static Now: PersianDate;
}


Object.defineProperty(PersianDate, 'Now', {get: () => new PersianDate(new Date())});