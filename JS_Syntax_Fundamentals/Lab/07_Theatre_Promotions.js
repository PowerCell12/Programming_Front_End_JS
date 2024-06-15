 function theather(type, years_old){

    if (years_old > 122 || years_old < 0){
        return 'Error!'
    }


    if (0 <= years_old && years_old <= 18) {
        switch (type) {
            case 'Weekday':
                console.log('12$');
                break;
            case 'Weekend':
                console.log('15$');
                break;
            case 'Holiday':
                console.log('5$');
                break;
        }
    } else if (18 < years_old && years_old <= 64) {
        switch (type) {
            case 'Weekday':
                console.log('18$');
                break;
            case 'Weekend':
                console.log('20$');
                break;
            case 'Holiday':
                console.log('12$');
                break;
        }
    } else if (64 < years_old && years_old <= 122) {
        switch (type) {
            case 'Weekday':
                console.log('12$');
                break;
            case 'Weekend':
                console.log('15$');
                break;
            case 'Holiday':
                console.log('10$');
                break;
        }
    }
}

