function tinh() {

    let leapYeaer = document.getElementById('leapYear').value;
    let a= leapYeaer%4;
    let b=leapYeaer%100;
    let c=leapYeaer%400;
    if (a===0 && b!==0){
        alert(leapYeaer+ ' la nam nhuan');

    }else if (a===0 && c===0){
        alert(leapYeaer+ ' la nam nhuan');
    }else{
        alert(leapYeaer+ ' khong la nam nhuan');
    }

}