import daysOfTheWeek from './daysOfTheWeek';

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

  static getDate() {
    const today = new Date();
    const fullDate = new Date(today).toJSON();
    const date = this.getJustDate(fullDate);
    return date;
  }

  static getDateAndWeekdays() {
    return this.getSubsequentDays().map(dayIndex => ({
      dayIndex,
      date: this.getDate(),
      weekday: daysOfTheWeek[dayIndex],
    }));
  }
}

export default DateUtil;
