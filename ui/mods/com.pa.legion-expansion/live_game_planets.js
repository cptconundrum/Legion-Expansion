loadCSS("coui://ui/mods/com.pa.legion-expansion/css/legion_planets.css");

handlers.legionui = function(payload){
  console.log("SET UI : " + payload);
  if(payload === "legion"){
    $('.body_panel').addClass("legionui");
  }
  if(payload === "mixed"){
    $('.body_panel').addClass("mixedui");
  }
}

console.log("planets legion");