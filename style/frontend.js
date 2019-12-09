$(function(){
$(".collapse1").click(function(){
    $(".collapse2").css({
        "opacity":"1"
        
    });

});

/* women file */
 for(let i = 0 ; i < AllWomens.length ; i++){
    $(".itemsW .items #All .row").append('<div class="col-md-4 col-sm-12 "><div class="img"><img src="'+ AllWomens[i].src +'">  <button class="btn text-success">Buy</button></div><div class="text pt-3"><div class="dec"><h4> pantes , shoes , T-shirt </h4><h5 class="text-success"> $400.0  </h5></div></div</div><br/>');
}
for(let i = 0 ; i < ShirtWomens.length ; i++){
    $(".itemsW .items #Shirt .row").append('<div class="col-md-4 col-sm-12 "><div class="img"><img src="'+ ShirtWomens[i].src +'">  <button class="btn text-success">Buy</button></div><div class="text pt-3"><div class="dec"><h4> pantes , shoes , T-shirt </h4><h5 class="text-success"> $400.0  </h5></div></div</div><br/>');
}
for(let i = 0 ; i < TWomens.length ; i++){
    $(".itemsW .items #Tshirt .row").append('<div class="col-md-4 col-sm-12 "><div class="img"><img src="'+ TWomens[i].src +'">  <button class="btn text-success">Buy</button></div><div class="text pt-3"><div class="dec"><h4> pantes , shoes , T-shirt </h4><h5 class="text-success"> $400.0  </h5></div></div</div><br/>');
}
for(let i = 0 ; i < PWomens.length ; i++){
    $(".itemsW .items #Pants .row").append('<div class="col-md-4 col-sm-12 "><div class="img"><img src="'+ PWomens[i].src +'">  <button class="btn text-success">Buy</button></div><div class="text pt-3"><div class="dec"><h4> pantes , shoes , T-shirt </h4><h5 class="text-success"> $400.0  </h5></div></div</div><br/>');
}
for(let i = 0 ; i < ShoesWomens.length ; i++){
    $(".itemsW .items #Shoes .row").append('<div class="col-md-4 col-sm-12 "><div class="img"><img src="'+ ShoesWomens[i].src +'">  <button class="btn text-success">Buy</button></div><div class="text pt-3"><div class="dec"><h4> pantes , shoes , T-shirt </h4><h5 class="text-success"> $400.0  </h5></div></div</div><br/>');
}


var section2=["#All","#Shirt","#Tshirt","#Pants","#Shoes"];
  

for (let i = 0; i < section2.length; i++) {
  $(".itemsW "+section2[i]).click(function(){
    $(this).addClass("action");
    $(".itemsW button").not($(this)).removeClass("action");
    var target = $(this).attr("id");
    console.log("#"+target)
    $(".items #"+target).addClass("active animated fadeInDown").show();
    $(".items .item").not($(".items #"+target)).removeClass("active animated fadeInDown").hide();

  })
}

/* women file */

/* men file */

for(let i = 0 ; i < AllMens.length ; i++){
    $(".itemsm .items #All .row").append('<div class="col-md-4 col-sm-12 "><div class="img"><img src="'+ AllMens[i].src +'">  <button class="btn text-success">Buy</button></div><div class="text pt-3"><div class="dec"><h4> pantes , shoes , T-shirt </h4><h5 class="text-success"> $400.0  </h5></div></div</div><br/>');
}
for(let i = 0 ; i < ShirtMens.length ; i++){
    $(".itemsm .items #Shirt .row").append('<div class="col-md-4 col-sm-12"><div class="img"><img src="'+ ShirtMens[i].src +'">  <button class="btn text-success">Buy</button></div><div class="text pt-3"><div class="dec"><h4> pantes , shoes , T-shirt </h4><h5 class="text-success"> $400.0  </h5></div></div</div><br/>');
}
for(let i = 0 ; i < TMens.length ; i++){
    $(".itemsm .items #Tshirt .row").append('<div class="col-md-4 col-sm-12 "><div class="img"><img src="'+ TMens[i].src +'">  <button class="btn text-success">Buy</button></div><div class="text pt-3"><div class="dec"><h4> pantes , shoes , T-shirt </h4><h5 class="text-success"> $400.0  </h5></div></div</div><br/>');
}
for(let i = 0 ; i < PMens.length ; i++){
    $(".itemsm .items #Pants .row").append('<div class="col-md-4 col-sm-12 "><div class="img"><img src="'+ PMens[i].src +'">  <button class="btn text-success">Buy</button></div><div class="text pt-3"><div class="dec"><h4> pantes , shoes , T-shirt </h4><h5 class="text-success"> $400.0  </h5></div></div</div><br/>');
}
for(let i = 0 ; i < ShoesMens.length ; i++){
    $(".itemsm .items #Shoes .row").append('<div class="col-md-4 col-sm-12 "><div class="img"><img src="'+ ShoesMens[i].src +'">  <button class="btn text-success">Buy</button></div><div class="text pt-3"><div class="dec"><h4> pantes , shoes , T-shirt </h4><h5 class="text-success"> $400.0  </h5></div></div</div><br/>');
}


var section2=["#All","#Shirt","#Tshirt","#Pants","#Shoes"];
  

for (let i = 0; i < section2.length; i++) {
  $(".itemsm "+section2[i]).click(function(){
    $(this).addClass("action");
    $(".itemsm button").not($(this)).removeClass("action");
    var target = $(this).attr("id");
    console.log("#"+target)
    $(".items #"+target).addClass("active animated fadeInDown").show();
    $(".items .item").not($(".items #"+target)).removeClass("active animated fadeInDown").hide();

  })
}

/* / men file */

})

$(function(){
    AOS.init();
})