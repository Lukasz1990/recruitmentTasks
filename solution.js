/**
 * Created by ppp on 2017-07-29.
 */
function myFunction (s) {
    var toarrayconvert = s.split("");
    console.log(toarrayconvert)
    var reversearray = toarrayconvert.reverse();
    console.log(reversearray)
    var jointostring = reversearray.join("")
    return jointostring;
    console.log(this)

}

function reverse(s) {

    var reversestring = '';


    for (var i = s.length - 1; i >= 0; i--)


        reversestring = reversestring + s[i];


    return reversestring;
    console.log(this)
}
