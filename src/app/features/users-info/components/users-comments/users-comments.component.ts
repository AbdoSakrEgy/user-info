import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-users-comments',
  templateUrl: './users-comments.component.html',
  styleUrls: ['./users-comments.component.css'],
})
export class UsersCommentsComponent implements OnChanges, OnInit {
  innerWidth: any = screen.width;
  date: string = '';
  modifiedDate: string = 'اختر الموعد';
  currentWeekData = [
    {
      name: 'الجمعة',
      number: 30,
      extraOptions: { first: false, second: false, third: false },
      selectedDay: false,
    },
    {
      name: 'الخميس',
      number: 29,
      extraOptions: { first: true, second: true, third: true },
      selectedDay: false,
    },
    {
      name: 'الأربعاء',
      number: 28,
      extraOptions: { first: true, second: false, third: true },
      selectedDay: false,
    },
    {
      name: 'الثلاثاء',
      number: 27,
      extraOptions: { first: true, second: true, third: false },
      selectedDay: false,
    },
    {
      name: 'الاثنين',
      number: 26,
      extraOptions: { first: false, second: false, third: true },
      selectedDay: false,
    },
    {
      name: 'الأحد',
      number: 25,
      extraOptions: { first: true, second: true, third: false },
      selectedDay: true,
    },
    {
      name: 'السبت',
      number: 24,
      extraOptions: { first: true, second: false, third: true },
      selectedDay: false,
    },
  ];
  comments = [
    {
      title: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي',
      date: '06:00 - 05:00 م',
      img: 'assets/shapes/Image-79.png',
      userName: 'محمود أحمد',
      bgColor: '#F2F5F1',
    },
    {
      title: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي',
      date: '06:00 - 05:00 م',
      img: 'assets/shapes/Image-79.png',
      userName: 'محمود أحمد',
      bgColor: '#F1ECFE',
    },
    {
      title: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي',
      date: '06:00 - 05:00 م',
      img: 'assets/shapes/Image-79.png',
      userName: 'محمود أحمد',
      bgColor: '#FFF6E3',
    },
    {
      title: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي',
      date: '06:00 - 05:00 م',
      img: 'assets/shapes/Image-79.png',
      userName: 'محمود أحمد',
      bgColor: '#F2F5F1',
    },
    {
      title: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي',
      date: '06:00 - 05:00 م',
      img: 'assets/shapes/Image-79.png',
      userName: 'محمود أحمد',
      bgColor: '#F1ECFE',
    },
    {
      title: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي',
      date: '06:00 - 05:00 م',
      img: 'assets/shapes/Image-79.png',
      userName: 'محمود أحمد',
      bgColor: '#FFF6E3',
    },
    {
      title: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي',
      date: '06:00 - 05:00 م',
      img: 'assets/shapes/Image-79.png',
      userName: 'محمود أحمد',
      bgColor: '#FFF6E3',
    },
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.modifiedDate);
  }
  ngOnInit(): void {}
  setModifiedDate() {
    if (this.date) {
      this.modifiedDate = getYear(this.date) + getMonthName(this.date);
    }
  }
}

// Helpful functions
function getYear(date: string) {
  return date.slice(0, 4);
}

function getMonthName(date: string) {
  switch (date.slice(5, 7)) {
    case '01':
      return 'يناير';
    case '02':
      return 'فبراير';
    case '03':
      return 'مارس';
    case '04':
      return 'أبريل';
    case '05':
      return 'مايو';
    case '06':
      return 'يونيو';
    case '07':
      return 'يوليو';
    case '08':
      return 'أغسطس';
    case '09':
      return 'سبتمبر';
    case '10':
      return 'أكتوبر';
    case '11':
      return 'نوفمبر';
    case '12':
      return 'ديسمبر';
    default:
      return '';
  }
}
