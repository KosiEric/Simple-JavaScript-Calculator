var Calculator = function () {
    //Declare  screen variables
    var firstScreen = document.getElementById('first-calc-screen');
    var secondScreen = document.getElementById('second-calc-screen');
    // Declare Button variables

    //first row buttons
    var on = document.getElementById('on');
    var off = document.getElementById('off');

    //second row buttons
    var ce = document.getElementById('ce');
    var c = document.getElementById('c');
    var square = document.getElementById('square');
    var root = document.getElementById('root');
    // Third row buttons
    var seven = document.getElementById('seven');
    var eight = document.getElementById('eight');
    var nine = document.getElementById('nine');
    var divide = document.getElementById('divide');
    var modulus = document.getElementById('modulus');
    var seven = document.getElementById('seven');
    // fourth row butons

    var four = document.getElementById('four');

    var five = document.getElementById('five');

    var six = document.getElementById('six');

    var times = document.getElementById('times');

    var four = document.getElementById('four');

    var inverse = document.getElementById('inverse');

    // Fifth row buttons

    var one = document.getElementById('one');
    var two = document.getElementById('two');

    var three = document.getElementById('three');
    var minus = document.getElementById('minus');
    var equals = document.getElementById('equals');

    // Sixth row


    var zero = document.getElementById('zero');
    var dot = document.getElementById('dot');
    var plus = document.getElementById('plus');


    // Off function
    off.addEventListener('click', function () {

        var screens = document.getElementsByClassName('calc-screens');

        for (var i = 0; i < screens.length; ++i) {

            screens[i].value = '';

        }
    });

    // On function
    on.addEventListener('click', function () {
        firstScreen.value = '';
        secondScreen.value = '0';
    });

    // Del function
    var del = document.getElementById('del');

    del.addEventListener('click', function () {

        var chars = firstScreen.value.toString();

        var SlicedChar = chars.substring(0, chars.length - 1);

        firstScreen.value = SlicedChar;




    });

    // C function


    c.addEventListener('click', function () {
        if (secondScreen.value != '') {
            firstScreen.value = '';
            secondScreen.value = '0';
        }

        else {
            return null;
        }
    });

    // CE function 

    ce.addEventListener('click', function () {
        if (secondScreen.value != '') {
            firstScreen.value = '';
            secondScreen.value = '0';
        }

        else {
            return null;
        }
    });

    // 7 function

    seven.addEventListener('click', function () {

        if (secondScreen.value == '' && firstScreen.value == '') {

            return null;
        }

        else {

            firstScreen.value += '7';
        }

    });

    // 8 function
    eight.addEventListener('click', function () {

        if (secondScreen.value == '' && firstScreen.value == '') {

            return null;
        }

        else {

            firstScreen.value += '8';
        }

    });


    // 9 function
    nine.addEventListener('click', function () {

        if (secondScreen.value == '' && firstScreen.value == '') {

            return null;
        }

        else {

            firstScreen.value += '9';
        }

    });

    // / function
    divide.addEventListener('click', function () {

        if (secondScreen.value == '' && firstScreen.value == '') {

            return null;
        }

        else {
            try {
                secondScreen.value = eval(firstScreen.value);
                firstScreen.value += ' / ';
            }

            catch (e) {

                secondScreen.value = e.Message;
            }
        }

    });
    // % function
    modulus.addEventListener('click', function () {

        if (secondScreen.value == '' && firstScreen.value == '') {

            return null;
        }

        else {

            firstScreen.value += ' % ';
        }

    });

    // 4 function
    four.addEventListener('click', function () {

        if (secondScreen.value == '' && firstScreen.value == '') {

            return null;
        }

        else {

            firstScreen.value += '4';
        }

    });


    //5 function 

    five.addEventListener('click', function () {

        if (secondScreen.value == '' && firstScreen.value == '') {

            return null;
        }

        else {

            firstScreen.value += '7';
        }

    });

    // 6 function

    six.addEventListener('click', function () {

        if (secondScreen.value == '' && firstScreen.value == '') {

            return null;
        }

        else {

            firstScreen.value += '6';
        }

    });


    // X function

    times.addEventListener('click', function () {
        if (secondScreen.value == '' && firstScreen.value == '') {

            return null;
        }

        else {
            try {
                secondScreen.value = eval(firstScreen.value);
                firstScreen.value += ' * ';
            }

            catch (e) {

                secondScreen.value = e.Message;
            }
        }

    });

    // 1 function 

    one.addEventListener('click', function () {

        if (secondScreen.value == '' && firstScreen.value == '') {

            return null;
        }

        else {

            firstScreen.value += '1';
        }

    });

    // 2 function

    two.addEventListener('click', function () {

        if (secondScreen.value == '' && firstScreen.value == '') {

            return null;
        }

        else {

            firstScreen.value += '2';
        }

    });

    // 3 function
    three.addEventListener('click', function () {

        if (secondScreen.value == '' && firstScreen.value == '') {

            return null;
        }

        else {

            firstScreen.value += '3';
        }

    });



    // - function 
    minus.addEventListener('click', function () {

        if (secondScreen.value == '' && firstScreen.value == '') {

            return null;
        }

        else {
            try {
                secondScreen.value = eval(firstScreen.value);
                firstScreen.value += ' - ';
            }

            catch (e) {

                secondScreen.value = e.Message;
            }
        }

    });



    // 0 function
    zero.addEventListener('click', function () {

        if (secondScreen.value == '' && firstScreen.value == '') {

            return null;
        }

        else {

            firstScreen.value += '0';
        }

    });

    // . function 

    dot.addEventListener('click', function () {

        if (secondScreen.value == '' && firstScreen.value == '') {

            return null;
        }

        else {

            firstScreen.value += '.';
        }

    });


    // + function

    plus.addEventListener('click', function () {

        if (secondScreen.value == '' && firstScreen.value == '') {

            return null;
        }

        else {
            try {
                secondScreen.value = eval(firstScreen.value);
                firstScreen.value += ' + ';
            }

            catch (e) {

                secondScreen.value = e.Message;
            }
        }


    });

    // = function 



    equals.addEventListener('click', function () {

        if (secondScreen.value == '' && firstScreen.value == '') {

            return null;
        }

        else {
            try {
                secondScreen.value = eval(firstScreen.value);
                firstScreen.value = '';
            }

            catch (e) {

                secondScreen.value = e.Message;
            }
        }


    });
     function sqrt(val) {

        return Math.sqrt(val);
    }

    root.addEventListener('click', function () {
        if (firstScreen.value == '' || secondScreen.value == '') {

            return null;
        }

        else {

            try {
                originalvalue = firstScreen.value;
                tryRoot = eval(Math.sqrt(firstScreen.value));
                secondScreen.value = tryRoot;
                firstScreen.value = "sqrt(" + originalvalue + ")";


            }

            catch (e) {

               // secondScreen.value = e.ToString();
            }
        }

    });

    function pow(val) {

        return Math.pow(val, 2);

    }
   
    square.addEventListener('click', function () {
        if (firstScreen.value == '' || secondScreen.value == '') {

            return null;
        }

        else {

            try {
                originalvalue = firstScreen.value;
                trySquare = eval(Math.pow(firstScreen.value, 2));
                secondScreen.value = trySquare;
                firstScreen.value = "pow(" + originalvalue + ")";

            }

            catch (e) {

                //secondScreen.value = e.ToString();
            }
        }


    });

    function negative (val){
        
        return Math.pow(val , -1);
    }

     inverse.addEventListener('click', function () {
        if (firstScreen.value == '' || secondScreen.value == '') {

            return null;
        }

        else {

            try {
                originalvalue = firstScreen.value;
                tryInverse = eval(Math.pow(firstScreen.value, -1));
                secondScreen.value = tryInverse;
                firstScreen.value = "negative(" + originalvalue + ")";

            }

            catch (e) {

                //secondScreen.value = e.ToString();
            }
        }


    });

    // inverse function

}

window.addEventListener('load', Calculator);