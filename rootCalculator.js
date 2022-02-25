'use strict';

/////////Roots calculator/////
///////Author Eugene Fenez/////
/////This program takes user input for a,b,and and gives a solution for x///////






function calculateRoot(root1, root2) {

    const a = document.getElementById("a-int").value;
    const b = document.getElementById("b-int").value;
    const c = document.getElementById("c-int").value;

    root1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    root2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

    let result1 = root1.toFixed(3);
    let result2 = root2.toFixed(3);


    let message = '';
    let count = 0;


    if (a == 0 || a == false) {
        message += "Invalid entry for a.  Must be a non-zero integer between -99 and +99.\n";
        count++;
    }

    if (b == false) {
        message += "Invalid entry for b.  Must be an integer between -99 and +99.\n";
        count++;

    }
    if (c == false) {
        message += "Invalid entry for c.  Must be an integer between -99 and +99.\n";
        count++;
    }

    if (count > 0) {
        alert(message);
    }


    else if ((b ** 2) < (4 * a * c)) {
        document.getElementById("result").innerHTML =
            "Solution: <i>x<i>'s roots are imaginary";
    }

    else if ((b ** 2) == (4 * a * c)) {
        document.getElementById("result").innerHTML =
            `Solution: <i>x<i> =  ${result1}`;
    }

    else if ((b ** 2) > (4 * a * c)) {

        document.getElementById("result").innerHTML =
            `Solution: <i>x<i> = ${result1}, <i>x<i> =  ${result2}`;
    }




}

