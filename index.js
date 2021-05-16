var keylist = "abcdefghijklmnopqrstuvwxyz";
var tmp2 = "";
function generatepassword2(plength) {
  tmp2 = "";
  for (i = 0; i < plength; i++) {
    tmp2 += keylist.charAt(Math.floor(Math.random()*keylist.length));
  }
return tmp2

}

function populateform2(enterlength){
    document.passGen2.output2.value= generatepassword2(enterlength)
}



var keylist2 = "1234567890";
var tmp = "";
function generatepassword(plength) {
  tmp = "";
  for (i = 0; i < plength; i++) {
    tmp += keylist2.charAt(Math.floor(Math.random()*keylist2.length));
  }
return tmp

}

function populateform(enterlength){
    document.passGen.output.value= generatepassword(enterlength)
}



var keylist3 = "!@#$%^&*_-.,";
var tmp3 = "";
function generatepassword3(plength) {
  tmp3 = "";
  for (i = 0; i < plength; i++) {
    tmp3 += keylist3.charAt(Math.floor(Math.random()*keylist3.length));
  }
return tmp3

}

function populateform3(enterlength){
    document.passGen3.output3.value= generatepassword3(enterlength)
}



var keylist4 = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*_-.,";
var tmp4 = "";
function generatepassword4(plength) {
  tmp4 = "";
  for (i = 0; i < plength; i++) {
    tmp4 += keylist4.charAt(Math.floor(Math.random()*keylist4.length));
  }
return tmp4

}

function populateform4(enterlength){
    document.passGen4.output4.value= generatepassword4(enterlength)
}

