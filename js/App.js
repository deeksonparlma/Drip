$(document).ready(function(){
  var order=[];
  var price=0;
  var increment = 0;
  var orderType=[];


  $("#watchDisplay").click(function(){
    $(".4").hide();
    $("#watches").show();
  });

  $("#shoesDisplay").click(function(){
    $(".4").show();
    $("#watches").hide();
  });

  // alert("work");
  $("#shoeszz").submit(function(event){
    event.preventDefault();
    var l = document.getElementById("location");
    var location = l.options[l.selectedIndex].value;

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
    var watch_1=$("input[name=watch1]:checked").val();
    var watch_2=$("input[name=watch2]:checked").val();
    var watch_3=$("input[name=watch3]:checked").val();
    var watch_4=$("input[name=watch4]:checked").val();
    var watch_5=$("input[name=watch5]:checked").val();
    var watch_6=$("input[name=watch6]:checked").val();
    var watch_7=$("input[name=watch7]:checked").val();
    var watch_8=$("input[name=watch8]:checked").val();

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

    var q13 =document.getElementById('quantity13').value;
    var q14 =document.getElementById('quantity14').value;
    var q15 =document.getElementById('quantity15').value;
    var q16 =document.getElementById('quantity16').value;
    var q17 =document.getElementById('quantity17').value;
    var q18 =document.getElementById('quantity18').value;
    var q19 =document.getElementById('quantity19').value;
    var q20=document.getElementById('quantity20').value;

    //shoes/
    items=[_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,watch_1,watch_2,watch_3,watch_4,watch_5,watch_6,watch_7,watch_8,];
    quantity=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20];
    values =[2500,3500,2500,3000,2500,4500,4500,4500,3500,3500,2500,4500,350,350,350,350,350,350,350,350];
    type=["green Air Max","Green-700s","Green-White Airmax 3","Black Nike","Yellow-Blue Airmax","Red Spring blades","Yellow FIla","White FIla","Blue Sneakers","Black Spring Blades","Brown official","Yellow Fila", "Ongine black","Gucci golden face","Gucci mate black","Red wrist watch","Blue wrist watch","Mateblack-hectagon-face wrist watch","Purple-hectagon-face wrist watch","Cream-white-hectagon-face wrist watch"];
    totalValues=[];
    totalValues.length=0;
    //

    //watches//

      for (var n = 0; n < items.length; n++) {
        if (items[n] == values[n]) {
          increment +=1;
          document.getElementById("cartNo").innerHTML=increment;
          r=orderType.push(quantity[n]+ " -"+type[n]);
          t= totalValues.push(parseInt(values));
          z=order.push(parseInt(values));
        }
      }

      for (var j = 0; j <= 19; j++) {
        if (values[j] == items[j]) {
          price += parseInt(values[j]*quantity[j]);
          order.push("sh" + price);
        }
      }
      if (location == 'null') {
        alert("Please enter delivery location");
      }
      else if (increment != 0 && location != 'null') {
        var message = orderType.toString() +" "+"worth "+ " "+"Ksh"+". "+price +" "+ "to be delivered at"+" " +location;
        console.log(message);
        // alert(message);
        window.location.href ='mailto: javanmega0@gmail.com,dickson.nyaigoti@gmail.com ?subject=DripSchool Order &body=I have purchased '+ message;
        price = 0;
        orderType.length= 0;
        increment = 0;
      }
  });
});
