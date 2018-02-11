function operate(){
  if (operation == "+"){
    numc = Number(numa) + Number(numb);
    $("#screenText").html(numc);
  }
  else if (operation == "-"){
    numc = Number(numa) - Number(numb);
    $("#screenText").html(numc);
  }
  else if (operation == "*"){
    numc = Number(numa) * Number(numb);
    $("#screenText").html(numc);
  }
  else if (operation == "/"){
    numc = Number(numa) / Number(numb);
    $("#screenText").html(numc);
  }
  stage = 0;
}

var stage = '1';
var digit;
var numa;
var numb
var numc;
var operation;



$(".num").click(function(){

    if (stage == 1 || stage == 3 ){
      if ($("#screenText").html() == '0'){
        $("#screenText").html(this.id);
      }
      else {
        $("#screenText").html($("#screenText").html() + this.id);
      }
    }
    else if (stage == 0){
      $("#screenText").html(this.id);
      stage = 1;
    }
    else if (stage == 2){
      stage = 3;
      $("#screenText").html(this.id);
    }



    console.log(stage);
});

$(".op").click(function(){

    if (stage == 2){
      operation = this.id;
    }
    else if (stage == 1 || stage == 0) {
      numa = $("#screenText").html();
      $("#screenText").html("0");
      stage = 2;
      operation = this.id;
    }
    else if (stage == 3) {
      numb = $("#screenText").html();
      operate();
      numa = numc;
      operation = this.id;
      stage = 2;
    }

  console.log(stage);
});

$(".equals").click(function(){
  if (stage == 3){
    numb = $("#screenText").html();
    operate();
    stage = 0;
    numa = numc;
  }
  else if (stage == 0){
    operate();
    numa = numc;
  }
                              console.log(stage);
});




$(".clear").click(function(){
  stage = 1;
  numa = 0;
  numb = 0;
  operation = '';
  numc = 0;
  $("#screenText").html("0")
})

$(".clearEntry").click(function(){
  $("#screenText").html("0")
})

$(".back").click(function(){
  if (stage == 1 || stage == 3 ){
    sub = $("#screenText").html();
    $("#screenText").html(sub.substring(0, sub.length - 1));
  }
})
