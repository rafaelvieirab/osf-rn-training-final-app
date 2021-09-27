import daysOfTheWeek from './daysOfTheWeek';

export type DateAndWeekdays = {
  dayIndex: number;
  date: string;
  weekday: string;
};

const dayInMilliseconds = 86400000;

class DateUtil {
  static getSubsequentDays() {
    let dayIndex = new Date().getDay();
    const fourSubsequentDays = [];
    let j = 0;

    while (j < 4) {
      fourSubsequentDays.push(dayIndex);
      dayIndex = (dayIndex + 1) % 7;
      j++;
    }

    return fourSubsequentDays;
  }

  static getDayIndexByWeekday(weekday: string) {
    switch (weekday) {
      case 'Domingo':
        return 0;
      case 'Segunda-feira':
        return 1;
      case 'Terça-feira':
        return 2;
      case 'Quarta-feira':
        return 3;
      case 'Quinta-feira':
        return 4;
      case 'Sexta-feira':
        return 5;
      case 'Sábado-feira':
        return 6;
      default:
        return 0;
    }
  }

  static getJustDate(date: string) {
    return date.substring(0, 10);
  }

  static toDateStringFormatRFC(date: Date) {
    return date.toDateString().substring(4);
  }

  static getDate(daysLaterNumber: number) {
    const daysLater = dayInMilliseconds * daysLaterNumber;
    const today = this.toDateStringFormatRFC(new Date());
    const todayInMilliseconds = Date.parse(today);

    const fullDate = new Date(todayInMilliseconds + daysLater).toJSON();
    const date = this.getJustDate(fullDate);
    return date;
  }

  static getDateAndWeekdays() {
    const dateAndWeekdays: DateAndWeekdays[] = [];

    this.getSubsequentDays().forEach((subsequentDay, index) => {
      dateAndWeekdays.push({
        dayIndex: subsequentDay,
        date: this.getDate(index + 1),
        weekday: daysOfTheWeek[subsequentDay],
      });
    });
    return dateAndWeekdays;

    // return this.getSubsequentDays().map(dayIndex => ({
    //   dayIndex,
    //   date: this.getDate(),
    //   weekday: daysOfTheWeek[dayIndex],
    // }));
  }
}

export default DateUtil;
