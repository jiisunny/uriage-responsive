// menu.js

$(function(){
  $("#main_nav > li > h3").click(function(){
    if($(this).parent("li").attr("class")=="active"){
      $(this).parent("li").removeClass("active");
    }else{
      $("#main_nav > li").removeClass("active");
      $(this).parent("li").addClass("active");
    }
  });
  $("label.toggle_menu").click(function(){
    $("#main_nav > li").removeClass("active");
  });
});