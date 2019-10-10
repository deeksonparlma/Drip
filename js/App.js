$(document).ready(function(){
  var order=[];
  var price=0;
  var increment = 0;
  var shoetype=[];


  // alert("work");
  $("#shoesz").submit(function(event){
    event.preventDefault();
    var _1=$("input[name=shoe1]:checked").val();
    var _2=$("input[name=shoe2]:checked").val();
    var _3=$("input[name=shoe3]:checked").val();
    var _4=$("input[name=shoe4]:checked").val();
    var _5=$("input[name=shoe5]:checked").val();
    var _6=$("input[name=shoe6]:checked").val();
    var _7=$("input[name=shoe7]:checked").val();
    var _8=$("input[name=shoe8]:checked").val();
    var _9=$("input[name=shoe9]:checked").val();
    var _10=$("input[name=shoe10]:checked").val();
    var _11=$("input[name=shoe11]:checked").val();
    var _12=$("input[name=shoe12]:checked").val();

    var q1 =document.getElementById('quantity1').value;
    var q2 =document.getElementById('quantity2').value;
    var q3 =document.getElementById('quantity3').value;
    var q4 =document.getElementById('quantity4').value;
    var q5 =document.getElementById('quantity5').value;
    var q6 =document.getElementById('quantity6').value;
    var q7 =document.getElementById('quantity7').value;
    var q8 =document.getElementById('quantity8').value;
    var q9 =document.getElementById('quantity9').value;
    var q10 =document.getElementById('quantity10').value;
    var q11 =document.getElementById('quantity11').value;
    var q12 =document.getElementById('quantity12').value;

    items=[_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12];
    quanity=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12];
    values =[2500,3500,2500,3000,2500,4500,4500,4500,3500,3500,2500,4500];
    type=["green Air Max","Green 200","Green-White Airmax 3","Black Nike","Yellow-Blue Airmax","Red Spring blades","Yellow FIla","White FIla","Blue Sneakers","Black Spring Blades","Brown official","Yellow Fila"];
    totalValues=[];
    totalValues.length=0;

      for (var i = 0; i < items.length; i++) {
        if (items[i] == values[i]) {
          increment +=1;
          document.getElementById("cartNo").innerHTML=increment;
          // items[i]
          r=shoetype.push(quanity[i]+ " - "+type [i]);
          t= totalValues.push(parseInt(values));
          z=order.push(parseInt(values));
        }
      }



      for (var j = 0; j <= 11; j++) {
        if (values[j]== items[j]) {
          price += parseInt(values[j]*quanity[j]);
          order.push("sh" + price);
        }
      }
      if (increment != 0) {
        window.location.href ="mailto : dickson.nyaigoti@gmail.com ?subject=DripSchool Shoe Order & body = I have purchased" + shoetype.toString() +' '+'shoes worth ' +' '+'Ksh'+'.'+(price)";
        price = 0;
      }
  });
});
