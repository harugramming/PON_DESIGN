//画像の切り替え

var count=1;

document.getElementById("works_img_before").onclick = function() {
  //現在表示されている画像を非表示にする
  document.getElementById("img" + count).classList.remove("display_block");
  //ドット
  document.getElementById("circle" + count).classList.remove("circle_checked");
  if(count == 1){
    count = 3;
  }else if(count == 2){
    count = 1;
  }else if(count == 3){
    count = 2;
  }
  //一つ前の画像を表示する
  document.getElementById("img" + count).classList.add("display_block");
      //ドット
      document.getElementById("circle" + count).classList.add("circle_checked");
};
document.getElementById("works_img_after").onclick = function() {  
  //現在表示されている画像を非表示にする
  document.getElementById("img" + count).classList.remove("display_block");

  //ドット
  document.getElementById("circle" + count).classList.remove("circle_checked");

  if(count == 1){
    count = 2;
  }else if(count == 2){
    count = 3;
  }else if(count == 3){
    count = 1;
  }
    //一つ前の画像を表示する
    document.getElementById("img" + count).classList.add("display_block");

    //ドット
    document.getElementById("circle" + count).classList.add("circle_checked");
};

//header をスクロール時に固定表示


window.onscroll = function() {
  var posY = window.scrollY;
  if(posY > 1){
    document.getElementById("header_wrap").classList.add("header_scroll");
  }else if(posY == 0){
    document.getElementById("header_wrap").classList.remove("header_scroll");
  }
  
};

//矢印ボタン

window.onscroll = function() {
  var posY = window.scrollY;
  if(posY > 150){
    document.getElementById("arrow").classList.remove("display_none");
    document.getElementById("arrow").classList.add("display_block");
  }else if(posY < 150){
    document.getElementById("arrow").classList.remove("display_block");
    document.getElementById("arrow").classList.add("display_none");
    
  }
}

document.getElementById("arrow").onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}