// month value;
var month_ar = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


// select this value
var select_month = document.querySelectorAll(".select_month");
Array.from(select_month).forEach((elm) => {
    elm.addEventListener("change", (e) => {
        var row;
        for (let index = 1; index <= month_ar[elm.value]; index++) {
            row += `
            <option value="${index}">${index}</option>
        `;
            birth_day.innerHTML = row;
        }
        e.path[2].childNodes[5].childNodes[1].innerHTML = row;
    })
})



// this year leap or not function;
function find_year(d) {
    if ((d % 4 == 0) && (d % 100 != 0) || (d % 400 == 0)) {
        month_ar[1] += 1;
    } else {
        month_ar[1] = month_ar[1];
    }
}


// loading bar;
var p_bar = document.getElementsByClassName('progeress_bar')[0];
document.body.style.overflow = 'hidden';

function loaded() {
    p_bar.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// default set value
function default_value() {
    var date = new Date();
    document.getElementById('to_day').value = date.getDate();
    document.getElementById('to_month').value = date.getMonth() + 1;
    document.getElementById('to_year').value = date.getFullYear();
    document.getElementById('birth_day').value = 13;
    document.getElementById('birth_month').value = 3;
    document.getElementById('birth_year').value = 2004;
}





// finally calculate age;
function cal() {
    var birth_day = document.getElementById('birth_day').value;
    var birth_month = document.getElementById('birth_month').value;
    var birth_year = document.getElementById('birth_year').value;
    var to_day = document.getElementById('to_day').value;
    var to_month = document.getElementById('to_month').value;
    var to_year = document.getElementById('to_year').value;

    // calculate age 
    if (to_year < birth_year) {
        alert(`year Must be Lessthen ${new Date().getFullYear()}`);
        return false;
    } else {
        // calculate month this age;
        var f_m_r;
        if (eval(birth_day > to_day)) {
            to_day += month_ar[to_month];
            to_month = to_month - 1;
            f_m_r = to_month - birth_month;
        } else {
            f_m_r = to_month - birth_month;
        }

        // calculate year this age
        var f_y_r = to_year - birth_year;
        // calculate time, mnts, year

        // calculate day;
        var f_d_r = to_day - birth_day;


        // get month
        m1 = f_y_r * 12;
        var get_month = m1 + f_m_r;

        // get week
        v1 = 365 * f_y_r;
        v2 = 0;
        for (i = 0; i <= f_m_r; i++) {
            v2 = v2 + month_ar[i];
        };
        v3 = v1 + v2;
        var get_week = v3 / 7;

        // get days
        var get_days = v3;

        // get hours
        var get_hour = v3 * 24;

        // get minutes
        var get_mnts = get_hour * 60;

        // get scnd
        var get_scnd = get_mnts * 60;

        // get miliscnd
        var get_mlscnd = get_scnd * 100;

        var result = document.querySelectorAll(".result_text");
        result[0].innerHTML = `${f_y_r} year , ${f_m_r} month or ${f_d_r} days.`;
        result[1].innerHTML = `or ${get_month} months ${get_days} days`;
        result[2].innerHTML = `or ${get_week} weeks`;
        result[3].innerHTML = `or ${get_days} days`;
        result[4].innerHTML = `or ${get_hour} hours`;
        result[5].innerHTML = `or ${get_mnts} minutes`;
        result[6].innerHTML = `or ${get_scnd} secounds`;
        result[7].innerHTML = `or ${get_mlscnd} millisecounds`;

    }

}