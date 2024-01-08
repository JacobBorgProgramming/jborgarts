

var templates_g = Array('./tiles/1.svg','./tiles/2.svg','./tiles/3.svg','./tiles/4.svg');
var templates_c = Array('./tiles/c1.svg');

var svg1 = './tiles/1.svg'
var svg2 = './tiles/2.svg'

var selector = Array('a','b','c');

var tiles = Array(1,2,3);
var tile = tiles[Math.floor(Math.random()*tiles.length)];

document.getElementById("watermark").src = './adamwatermark.png'


function bingo(){
  var tile_selection = tiles[Math.floor(Math.random()*tiles.length)];
  var template_g = templates_g[Math.floor(Math.random()*templates_g.length)];
  var template_c = templates_c[Math.floor(Math.random()*templates_c.length)];
  var selected = selector[Math.floor(Math.random()*selector.length)];

  console.log(selected)

  if (selected == 'a') {
    var elt = Array('4','1','2','3','1','2','3','1','2','3','1','2','3','1','2','3','1','2','3','1','2','3','1','2','3','1','2','3','1','2','3','1','2','3','1','2','3','1','2','3','1','2','3','1','2','3');
    var elt_ = elt[Math.floor(Math.random()*elt.length)];

    if (elt_ == '1'){
      document.getElementById("memebg").src = './tiles/1.svg'
      document.getElementById("memebg2").src = './tiles/2.svg'
      document.getElementById("memebg3").src = './tiles/c1.svg'
      document.getElementById("memebg4").src = './tiles/3.svg'
      document.getElementById("memebg5").src = './tiles/4.svg'
    }

    if (elt_ == '2'){
      document.getElementById("memebg").src = './tiles/2.svg'
      document.getElementById("memebg2").src = './tiles/1.svg'
      document.getElementById("memebg3").src = './tiles/c1.svg'
      document.getElementById("memebg4").src = './tiles/4.svg'
      document.getElementById("memebg5").src = './tiles/3.svg'
    }

    if (elt_ == '3'){
      document.getElementById("memebg").src = './tiles/4.svg'
      document.getElementById("memebg2").src = './tiles/3.svg'
      document.getElementById("memebg3").src = './tiles/c1.svg'
      document.getElementById("memebg4").src = './tiles/2.svg'
      document.getElementById("memebg5").src = './tiles/1.svg'
    }
    if (elt_ == '4'){
      document.getElementById("memebg").src = './tiles/gr.svg'
      document.getElementById("memebg2").src = './tiles/2.svg'
      document.getElementById("memebg3").src = './tiles/c1.svg'
      document.getElementById("memebg4").src = './tiles/3.svg'
      document.getElementById("memebg5").src = './tiles/4.svg'
    }


  }

  if (selected == 'b') {
    var elt = Array('1','2','3');
    var elt_ = elt[Math.floor(Math.random()*elt.length)];

    if (elt_ == '1'){
      document.getElementById("memebg").src = './tiles/5.svg'
      document.getElementById("memebg2").src = './tiles/6.svg'
      document.getElementById("memebg3").src = './tiles/c2.svg'
      document.getElementById("memebg4").src = './tiles/7.svg'
      document.getElementById("memebg5").src = './tiles/8.svg'
    }

    if (elt_ == '2'){
      document.getElementById("memebg").src = './tiles/6.svg'
      document.getElementById("memebg2").src = './tiles/5.svg'
      document.getElementById("memebg3").src = './tiles/c2.svg'
      document.getElementById("memebg4").src = './tiles/8.svg'
      document.getElementById("memebg5").src = './tiles/7.svg'
    }

    if (elt_ == '3'){
      document.getElementById("memebg").src = './tiles/8.svg'
      document.getElementById("memebg2").src = './tiles/7.svg'
      document.getElementById("memebg3").src = './tiles/c2.svg'
      document.getElementById("memebg4").src = './tiles/5.svg'
      document.getElementById("memebg5").src = './tiles/6.svg'
    }
  }

  if (selected == 'c') {
    var elt = Array('1','2','3','4');
    var elt_ = elt[Math.floor(Math.random()*elt.length)];

    if (elt_ == '1'){
      document.getElementById("memebg").src = './tiles/9.svg'
      document.getElementById("memebg2").src = './tiles/10.svg'
      document.getElementById("memebg3").src = './tiles/c3.svg'
      document.getElementById("memebg4").src = './tiles/11.svg'
      document.getElementById("memebg5").src = './tiles/12.svg'
    }

    if (elt_ == '2'){
      document.getElementById("memebg").src = './tiles/10.svg'
      document.getElementById("memebg2").src = './tiles/9.svg'
      document.getElementById("memebg3").src = './tiles/c3.svg'
      document.getElementById("memebg4").src = './tiles/12.svg'
      document.getElementById("memebg5").src = './tiles/11.svg'
    }

    if (elt_ == '3'){
      document.getElementById("memebg").src = './tiles/12.svg'
      document.getElementById("memebg2").src = './tiles/11.svg'
      document.getElementById("memebg3").src = './tiles/c3.svg'
      document.getElementById("memebg4").src = './tiles/9.svg'
      document.getElementById("memebg5").src = './tiles/10.svg'
    }
    if (elt_ == '4'){
      document.getElementById("memebg").src = './tiles/11.svg'
      document.getElementById("memebg2").src = './tiles/10.svg'
      document.getElementById("memebg3").src = './tiles/c3.svg'
      document.getElementById("memebg4").src = './tiles/9.svg'
      document.getElementById("memebg5").src = './tiles/12.svg'
    }
  }



}
