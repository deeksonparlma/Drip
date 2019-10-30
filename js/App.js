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
    // $("#watches").hide();
    alert("Coming soon");
  });

  // alert("work");
  $("#shoeszz").submit(function(event){
    event.preventDefault();
    var l = document.getElementById("location");
    var location = l.options[l.selectedIndex].value;

    // var _1=$("input[name=shoe1]:checked").val();
    // var _2=$("input[name=shoe2]:checked").val();
    // var _3=$("input[name=shoe3]:checked").val();
    // var _4=$("input[name=shoe4]:checked").val();
    // var _5=$("input[name=shoe5]:checked").val();
    // var _6=$("input[name=shoe6]:checked").val();
    // var _7=$("input[name=shoe7]:checked").val();
    // var _8=$("input[name=shoe8]:checked").val();
    // var _9=$("input[name=shoe9]:checked").val();
    // var _10=$("input[name=shoe10]:checked").val();
    // var _11=$("input[name=shoe11]:checked").val();
    // var _12=$("input[name=shoe12]:checked").val();
    var watch_1=$("input[name=watch1]:checked").val();
    var watch_2=$("input[name=watch2]:checked").val();
    var watch_3=$("input[name=watch3]:checked").val();
    var watch_4=$("input[name=watch4]:checked").val();
    var watch_5=$("input[name=watch5]:checked").val();
    var watch_6=$("input[name=watch6]:checked").val();
    var watch_7=$("input[name=watch7]:checked").val();
    var watch_8=$("input[name=watch8]:checked").val();
    var watch_9=$("input[name=watch9]:checked").val();
    var watch_10=$("input[name=watch10]:checked").val();
    var watch_11=$("input[name=watch11]:checked").val();
    var watch_12=$("input[name=watch12]:checked").val();
    var watch_13=$("input[name=watch13]:checked").val();
    var watch_14=$("input[name=watch14]:checked").val();
    var watch_15=$("input[name=watch15]:checked").val();
    var watch_16=$("input[name=watch16]:checked").val();
    var watch_17=$("input[name=watch17]:checked").val();
    var watch_18=$("input[name=watch18]:checked").val();
    var watch_19=$("input[name=watch19]:checked").val();
    var watch_20=$("input[name=watch20]:checked").val();

    // var q1 =document.getElementById('quantity1').value;
    // var q2 =document.getElementById('quantity2').value;
    // var q3 =document.getElementById('quantity3').value;
    // var q4 =document.getElementById('quantity4').value;
    // var q5 =document.getElementById('quantity5').value;
    // var q6 =document.getElementById('quantity6').value;
    // var q7 =document.getElementById('quantity7').value;
    // var q8 =document.getElementById('quantity8').value;
    // var q9 =document.getElementById('quantity9').value;
    // var q10 =document.getElementById('quantity10').value;
    // var q11 =document.getElementById('quantity11').value;
    // var q12 =document.getElementById('quantity12').value;

    var q13 =document.getElementById('quantity13').value;
    var q14 =document.getElementById('quantity14').value;
    var q15 =document.getElementById('quantity15').value;
    var q16 =document.getElementById('quantity16').value;
    var q17 =document.getElementById('quantity17').value;
    var q18 =document.getElementById('quantity18').value;
    var q19 =document.getElementById('quantity19').value;
    var q20=document.getElementById('quantity20').value;
    var q21=document.getElementById('quantity21').value;
    var q22=document.getElementById('quantity22').value;
    var q23=document.getElementById('quantity23').value;
    var q24=document.getElementById('quantity24').value;
    var q25=document.getElementById('quantity25').value;
    var q26=document.getElementById('quantity26').value;
    var q27=document.getElementById('quantity27').value;
    var q28=document.getElementById('quantity28').value;
    var q29=document.getElementById('quantity29').value;
    var q30=document.getElementById('quantity30').value;
    var q31=document.getElementById('quantity31').value;
    var q32=document.getElementById('quantity32').value;


    //shoes/
    items=[watch_1,watch_2,watch_3,watch_4,watch_5,watch_6,watch_7,watch_8,watch_9,watch_10,watch_11,watch_12,watch_13,watch_14,watch_15,watch_16,watch_17,watch_18,watch_19,watch_20];
    quantity=[q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32];
    values =[300,300,300,300,300,300,300,300,1200,1200,1200,1200,1200,1200,1200,1200,1200,1200,1200,1200];
    type=["Ongine black","Gucci golden face","Gucci mate black","Red wrist watch","Blue wrist watch","Mateblack-hectagon-face wrist watch","Purple-hectagon-face wrist watch","Cream-white-hectagon-face wrist watch","Black Rolex","Golden-face-ring patek Philipe","Silver-face-ring patek Philipe","Golden face-ring patek Philipe with brown stripes","Golden face-Rolex","Gucci-face watch","Golden face-Rolex starred","Rolex 24K golf-face","Omega","Silver-face patek philipe","Rolex-white face-brown laces","Rolex-white face-black laces"];
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
        window.location.href ='mailto: javanmega0@gmail.com,ck.caleb17@gmail.com,kuraoian@gmail.com,dickson.nyaigoti@gmail.com ?subject=DripSchool Order &body=I have purchased '+ message;
        price = 0;
        orderType.length= 0;
        increment = 0;
      }
  });
});
