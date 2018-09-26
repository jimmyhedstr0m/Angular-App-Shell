import { TestBed } from '@angular/core/testing';

import { Month } from './month';
import { Day } from './day';
import { DatepickerService } from './datepicker.service';

fdescribe('DatepickerService', () => {
  let service: DatepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatepickerService]
    });

    service = TestBed.get(DatepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return days of month', () => {
    expect(service.getDaysInMonth(new Date(2018, Month.January))).toBe(31);
    expect(service.getDaysInMonth(new Date(2018, Month.February))).toBe(28);
    expect(service.getDaysInMonth(new Date(2018, Month.Mars))).toBe(31);
    expect(service.getDaysInMonth(new Date(2018, Month.April))).toBe(30);
    expect(service.getDaysInMonth(new Date(2018, Month.May))).toBe(31);
    expect(service.getDaysInMonth(new Date(2018, Month.June))).toBe(30);
    expect(service.getDaysInMonth(new Date(2018, Month.July))).toBe(31);
    expect(service.getDaysInMonth(new Date(2018, Month.August))).toBe(31);
    expect(service.getDaysInMonth(new Date(2018, Month.September))).toBe(30);
    expect(service.getDaysInMonth(new Date(2018, Month.October))).toBe(31);
    expect(service.getDaysInMonth(new Date(2018, Month.November))).toBe(30);
    expect(service.getDaysInMonth(new Date(2018, Month.December))).toBe(31);

    expect(service.getDaysInMonth(new Date(2016, Month.February))).toBe(29);
    expect(service.getDaysInMonth(new Date(2020, Month.February))).toBe(29);
    expect(service.getDaysInMonth(new Date(2024, Month.February))).toBe(29);
  });

  it('should get previous month date', () => {
    expect(service.getPreviousMonthDate(new Date(2018, Month.January))).toEqual(new Date(2017, Month.December));
    expect(service.getPreviousMonthDate(new Date(2018, Month.February))).toEqual(new Date(2018, Month.January));
    expect(service.getPreviousMonthDate(new Date(2018, Month.Mars))).toEqual(new Date(2018, Month.February));
    expect(service.getPreviousMonthDate(new Date(2018, Month.April))).toEqual(new Date(2018, Month.Mars));
    expect(service.getPreviousMonthDate(new Date(2018, Month.May))).toEqual(new Date(2018, Month.April));
    expect(service.getPreviousMonthDate(new Date(2018, Month.June))).toEqual(new Date(2018, Month.May));
    expect(service.getPreviousMonthDate(new Date(2018, Month.July))).toEqual(new Date(2018, Month.June));
    expect(service.getPreviousMonthDate(new Date(2018, Month.August))).toEqual(new Date(2018, Month.July));
    expect(service.getPreviousMonthDate(new Date(2018, Month.September))).toEqual(new Date(2018, Month.August));
    expect(service.getPreviousMonthDate(new Date(2018, Month.October))).toEqual(new Date(2018, Month.September));
    expect(service.getPreviousMonthDate(new Date(2018, Month.November))).toEqual(new Date(2018, Month.October));
    expect(service.getPreviousMonthDate(new Date(2018, Month.December))).toEqual(new Date(2018, Month.November));
    expect(service.getPreviousMonthDate(new Date(2019, Month.January))).toEqual(new Date(2018, Month.December));
  });

  it('should get next month date', () => {
    expect(service.getNextMonthDate(new Date(2017, Month.December))).toEqual(new Date(2018, Month.January));
    expect(service.getNextMonthDate(new Date(2018, Month.January))).toEqual(new Date(2018, Month.February));
    expect(service.getNextMonthDate(new Date(2018, Month.February))).toEqual(new Date(2018, Month.Mars));
    expect(service.getNextMonthDate(new Date(2018, Month.Mars))).toEqual(new Date(2018, Month.April));
    expect(service.getNextMonthDate(new Date(2018, Month.April))).toEqual(new Date(2018, Month.May));
    expect(service.getNextMonthDate(new Date(2018, Month.May))).toEqual(new Date(2018, Month.June));
    expect(service.getNextMonthDate(new Date(2018, Month.June))).toEqual(new Date(2018, Month.July));
    expect(service.getNextMonthDate(new Date(2018, Month.July))).toEqual(new Date(2018, Month.August));
    expect(service.getNextMonthDate(new Date(2018, Month.August))).toEqual(new Date(2018, Month.September));
    expect(service.getNextMonthDate(new Date(2018, Month.September))).toEqual(new Date(2018, Month.October));
    expect(service.getNextMonthDate(new Date(2018, Month.October))).toEqual(new Date(2018, Month.November));
    expect(service.getNextMonthDate(new Date(2018, Month.November))).toEqual(new Date(2018, Month.December));
    expect(service.getNextMonthDate(new Date(2018, Month.December))).toEqual(new Date(2019, Month.January));
  });

  it('should return first day of month', () => {
    expect(service.getFirstDayInMonth(new Date(2018, Month.January))).toBe(Day.Monday);
    expect(service.getFirstDayInMonth(new Date(2018, Month.February))).toBe(Day.Thursday);
    expect(service.getFirstDayInMonth(new Date(2018, Month.Mars))).toBe(Day.Thursday);
    expect(service.getFirstDayInMonth(new Date(2018, Month.April))).toBe(Day.Sunday);
    expect(service.getFirstDayInMonth(new Date(2018, Month.May))).toBe(Day.Tuesday);
    expect(service.getFirstDayInMonth(new Date(2018, Month.June))).toBe(Day.Friday);
    expect(service.getFirstDayInMonth(new Date(2018, Month.July))).toBe(Day.Sunday);
    expect(service.getFirstDayInMonth(new Date(2018, Month.August))).toBe(Day.Wednesday);
    expect(service.getFirstDayInMonth(new Date(2018, Month.September))).toBe(Day.Saturday);
    expect(service.getFirstDayInMonth(new Date(2018, Month.October))).toBe(Day.Monday);
    expect(service.getFirstDayInMonth(new Date(2018, Month.November))).toBe(Day.Thursday);
    expect(service.getFirstDayInMonth(new Date(2018, Month.December))).toBe(Day.Saturday);
  });

  it('should return correct week number', () => {
    expect(service.getWeekNumber(new Date(2018, Month.January, 1))).toBe(1);
    expect(service.getWeekNumber(new Date(2018, Month.January, 7))).toBe(1);
    expect(service.getWeekNumber(new Date(2018, Month.January, 8))).toBe(2);
    expect(service.getWeekNumber(new Date(2018, Month.January, 29))).toBe(5);
    expect(service.getWeekNumber(new Date(2018, Month.February, 1))).toBe(5);
    expect(service.getWeekNumber(new Date(2018, Month.February, 4))).toBe(5);
    expect(service.getWeekNumber(new Date(2018, Month.December, 23))).toBe(51);
    expect(service.getWeekNumber(new Date(2018, Month.December, 24))).toBe(52);
    expect(service.getWeekNumber(new Date(2018, Month.December, 30))).toBe(52);
    expect(service.getWeekNumber(new Date(2018, Month.December, 31))).toBe(1);
    expect(service.getWeekNumber(new Date(2019, Month.January, 1))).toBe(1);
    expect(service.getWeekNumber(new Date(2019, Month.January, 6))).toBe(1);
    expect(service.getWeekNumber(new Date(2019, Month.January, 7))).toBe(2);
  });
});
