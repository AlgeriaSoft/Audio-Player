import Validator from 'API/Validator';

export default class TimeDate {

    static getTime() {
        let time = {
                h: '',
                m: '',
                s: ''
            },
            t = new Date();
        time.h = TimeDate.prettyTime(t.getHours());
        time.m = TimeDate.prettyTime(t.getMinutes());
        time.s = TimeDate.prettyTime(t.getSeconds());
        return time;
    }

    static getDate() {
        let date = {
                d: '',
                m: '',
                y: ''
            },
            d = new Date();
        date.d = TimeDate.prettyTime(d.getDate());
        date.m = TimeDate.prettyTime(d.getMonth() + 1);
        date.y = d.getFullYear();
        return date;
    }

    static getFullDate() {
        let date = new Date(),
            day_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            month_names = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
        return `${day_names[date.getDay()]},  ${TimeDate.prettyTime(month_names[date.getMonth()])} ${TimeDate.prettyTime(date.getDate())}, ${date.getFullYear()}`;
    }

    static getTimeStamp(t) {
        if (Validator.checkValueType(t, 'STRING', 'Time value')) {
            t = t.split(':');
            if (t.length === 3) return Number(t[0]) * 3600 + Number(t[1]) * 60 + Number(t[2]);
            else return Number(t[0]) * 60 + Number(t[1]);
        }
    }

    static buildTimer1(t) {
        if (Validator.checkValueType(t, 'NUMBER', 'Time value')) {
            let r, h, m, s;
            h = TimeDate.prettyTime(Math.floor(t / 3600));
            r = t % 3600;
            m = TimeDate.prettyTime(Math.floor(r / 60));
            r = r % 60;
            s = TimeDate.prettyTime(Math.floor(r));
            if (h === '00') return `${m}:${s}`;
            else return `${h}:${m}:${s}`;
        }
    }

    static buildTimer2(t, h, m, s) {
        if (Validator.checkValueType(t, 'FLOAT', 'Time value') && Validator.checkValueType(h[0], 'HTMLELEMENT', 'Hours div element') && Validator.checkValueType(m[0], 'HTMLELEMENT', 'Mnutes div element') && Validator.checkValueType(s[0], 'HTMLELEMENT', 'Seconds div element')) {
            let r;
            h.text(TimeDate.prettyTime(Math.floor(t / 3600)));
            r = t % 3600;
            m.text(TimeDate.prettyTime(Math.floor(r / 60)));
            r = r % 60;
            s.text(TimeDate.prettyTime(Math.floor(r)));
        }
    }



    static prettyTime(time) {
        return (time < 10) ? `0${time}` : `${time}`;
    }
}
