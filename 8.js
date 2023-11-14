//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'تتلو ',
     'quote':'بی کاری بی هدفی بدرد بخور نبودن باعث میشه زندگیت بورینگ شه زندگیت که بورینگ شد خودتم ادم بورینگی میشی ادم برینگو بالا خره ازش خسته میشن باید یه مهارتی خاسیتی چیزی داشته باشی والا فرقی با حیوون نداری تازی همون حیوونا بعضا بدرد بخورن باید خارجی ها بهش میگن یوز فول باید یوز فول باشی '
    },
    {'author': 'تتلو ',
     'quote': 'انتظار از عشق قوی تره'
    },
    {'author': 'تتلو',
    'quote':'بی کاری بی هدفی بدرد بخور نبودن باعث میشه زندگیت بورینگ شه زندگیت که بورینگ شد خودتم ادم بورینگی میشی ادم برینگو بالا خره ازش خسته میشن باید یه مهارتی خاسیتی چیزی داشته باشی والا فرقی با حیوون نداری تازی همون حیوونا بعضا بدرد بخورن باید خارجی ها بهش میگن یوز فول باید یوز فول باشی '
},
    {'author': 'تتلو',
     'quote': 'گاهی باید رفت باید برید باید شکستو باید خطر کرد باید پرید برو بپر ببر نترس در واقع داری با رفتنت ازادیتو جشن میگیری درد مجازات نیست دوری مجازات نیست زخم هایو سختی ها حتی تعلیم های ما پایه های موفقیت و تکامل هستن مرگ مجازات نیست '
    },
    {'author': 'تتلو ',
     'quote': 'چراغی که به خانه رواست به مسجد حرامست و اولین و اخرین  واقعی ترین خونه ای که داری بدنته خودتی پس چراغی که به من رواست به مسجد حرامست'
    },
    {'author': ' تتلو',
     'quote': ' همیشه بزرگ ترین ضربه هارو عزیز ترین کسا بهت میزنن پس جوری رفتار کن که برات عزیزی باقی نمونه '
    },
    {'author': ' تتلو',
    'quote': 'از این سیاه تر هم ممکنه باز تیره ترم'
   },
   {'author': ' تتلو',
   'quote': 'دیشب به این فکر کردم که...... دیشب به این فکر کردم چقدر میتونیم هم دیگرو خورد کنیم چقد چقدر کوچیک'
   },

   {'author': ' تتلو',
    'quote': 'بعضی وقتا طبیعت بازیت میده و تو اگه برنده نشی این بازی هی تکرار میشه او تکرار و گرنه این زندگی یک لوپ نبوده و نیست این تویی که بازنده ای'
    },

    {'author': ' تتلو',
    'quote': 'اری خشم تاریخ ازان ماست زیرا.که ما بی مهابا خریدیمو بیمیل بریدیمو دوختیمو این سیل حال حق ماست که برای باران شکر گذار نبودیمو حتی به دریا حمله ور شدیمو ماهی ها به کشتن دادیم برای تنها یک افسون ساده '
    },
    {'author': ' تتلو',
    'quote': 'گاهی شیطان خودش را در درون من پیدا میکند ......باکی نیست برای بالا تر از خدا بودن باید شیطان را بخشید زیرا ان که بخشنده ترین کاری جز بخشیدن  '
    },

    {'author': ' تتلو',
    'quote': '  '
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `"${arrayOfQuotes[random].quote}"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;

}
