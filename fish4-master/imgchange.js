var mapcnt = new Array(2,2,2,2);
var map_arr = new Array("경기,강원도, ","충청도 ","경상도, ","전라,제주도 ");


// 지도 필터
function changemap(id) {

  var c, x;
  c = document.getElementById(id);
  x = document.getElementsByClassName("filterDiv");

  for (var j = 0; mapcnt.length > j; j++)
  {
    if (mapcnt[j]%2==0 && id.endsWith(j+2)){
      c.style.display ="inline";
      mapcnt[j]++;
    }else if (mapcnt[j]%2 !=0 && id.endsWith(j+2)) {
      c.style.display ="none";
      mapcnt[j]++;
    }

    }

//Add out은 안보이게, Remove out은 보이게
    if(state == 0 ){
      for (var i = 0; i < x.length; i++) {
        w3AddClass(x[i], "out");
      }
    }
    stater(id);


    for (j = 0; j < mapcnt.length; j++){
      for (var i = 0; i < x.length; i++) {
        if (c.style.display=="inline" && x[i].className.indexOf(id) >-1){
          w3RemoveClass(x[i],"out");
          }else if (c.style.display=="none" && x[i].className.indexOf(id) > -1){
            w3AddClass(x[i],"out");

        }
      }
    }

    if(state == 0){
        for (var i = 0; i < x.length; i++) {
          w3RemoveClass(x[i], "out");
        }
    }




  }


// 지도 필터 (수정)
var state = 0;
function stater(id) {
  var x, c;
    c = document.getElementById(id);
    x = document.getElementsByClassName("filterDiv");

      if (c.style.display == "inline"){
        state++;
      }else{
        state--;
      }

  }



var allinfo = "전체 낚시 정보";
var riverinfo = "민물낚시 정보";
var shipinfo = "배낚시 정보";
//필터 창
function changep1(a){

  var p;
  var str="";
  p = document.getElementById('p1');
  for (var i = 0; mapcnt.length > i; i++)
  {
    if (mapcnt[i]%2!=0 ){
      str += map_arr[i];
    }
  }

  if (a == "all" || a == ""){
    p.innerHTML = str + "지역 " + allinfo;
  }else if (a == "river") {
    p.innerHTML = str + "지역 " + riverinfo;
  }else if (a == "ship") {
    p.innerHTML = str + "지역 " + shipinfo;
  }

}
