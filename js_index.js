

var wave1 = $('#feel_the_wave').wavify({
    height: 30,
    bones: 5,
    amplitude: 60,
    
    color: '#f4e0f7',
    speed: .25
  });
  
  var wave2 = $('#feel_the_wave_two').wavify({
    height: 80,
    bones: 4,
    amplitude: 40,
    color: '#38df8b',
    speed: .20
  });
  var wave3 = $('#feel_the_wave_three').wavify({
    height: 140,
    bones: 4,
    amplitude: 20,
    color: '#1d7177',
    speed: .15
  
  });

var svg = document.getElementById("swimming-girl");
var s = Snap(svg);
var Rarm1 = Snap.select('#r-arm-1');
var Rarm2 = Snap.select('#r-arm-2');
var Rarm3 = Snap.select('#r-arm-3');
var Rarm4 = Snap.select('#r-arm-4');
var Rarm5 = Snap.select('#r-arm-5');
var Larm1 = Snap.select('#l-arm-1');
var Larm2 = Snap.select('#l-arm-2');
var Larm3 = Snap.select('#l-arm-3');
var Larm4 = Snap.select('#l-arm-4');
var Larm5 = Snap.select('#l-arm-5');
var Rleg1 = Snap.select('#r-leg-1');
var Rleg2 = Snap.select('#r-leg-2');
var Rleg3 = Snap.select('#r-leg-3');
var Rleg4 = Snap.select('#r-leg-4');
var Rleg5 = Snap.select('#r-leg-5');
var Lleg1 = Snap.select('#l-leg-1');
var Lleg2 = Snap.select('#l-leg-2');
var Lleg3 = Snap.select('#l-leg-3');
var Lleg4 = Snap.select('#l-leg-4');
var Lleg5 = Snap.select('#l-leg-5');
var swimpos=Snap.select('#swimming-girl');
var head=Snap.select('head');

var Rarm1Points = Rarm1.node.getAttribute('d');
var Rarm2Points = Rarm2.node.getAttribute('d');
var Rarm3Points = Rarm3.node.getAttribute('d');
var Rarm4Points = Rarm4.node.getAttribute('d');
var Rarm5Points = Rarm5.node.getAttribute('d');
var Larm1Points = Larm1.node.getAttribute('d');
var Larm2Points = Larm2.node.getAttribute('d');
var Larm3Points = Larm3.node.getAttribute('d');
var Larm4Points = Larm4.node.getAttribute('d');
var Larm5Points = Larm5.node.getAttribute('d');
var Rleg1Points = Rleg1.node.getAttribute('d');
var Rleg2Points = Rleg2.node.getAttribute('d');
var Rleg3Points = Rleg3.node.getAttribute('d');
var Rleg4Points = Rleg4.node.getAttribute('d');
var Rleg5Points = Rleg5.node.getAttribute('d');
var Lleg1Points = Lleg1.node.getAttribute('d');
var Lleg2Points = Lleg2.node.getAttribute('d');
var Lleg3Points = Lleg3.node.getAttribute('d');
var Lleg4Points = Lleg4.node.getAttribute('d');
var Lleg5Points = Lleg5.node.getAttribute('d');


var myMatrix= new Snap.Matrix();
myMatrix.translate(-20,0);
myMatrix.rotate(-1);

var myInvertedMatrix= myMatrix.invert();

var swimBack = function() {
swimpos.animate({ transform: myMatrix },1125, mina.easeinout, function() { swimpos.animate({ transform: myInvertedMatrix }, 1125, mina.easeinout) });
}



var toRarm1 = function() {
    Rarm1.animate({ d: Rarm1Points}, 450, mina.linear);
    Larm1.animate({ d: Larm1Points}, 450, mina.linear);
    Rleg1.animate({ d: Rleg1Points}, 450, mina.linear);
    Lleg1.animate({ d: Lleg1Points}, 450, mina.linear, toRarm2);
    
    swimBack();
}

var toRarm2 = function(){
  Rarm1.animate({ d: Rarm2Points}, 450, mina.linear);
  Larm1.animate({ d: Larm2Points}, 450, mina.linear);
  Rleg1.animate({ d: Rleg2Points}, 450, mina.linear);
  Lleg1.animate({ d: Lleg2Points}, 450, mina.linear, toRarm3);
}

var toRarm3 = function(){
  Rarm1.animate({ d: Rarm3Points}, 450, mina.linear);
  Larm1.animate({ d: Larm3Points}, 450, mina.linear);
  Rleg1.animate({ d: Rleg3Points}, 450, mina.linear);
  Lleg1.animate({ d: Lleg3Points}, 450, mina.linear, toRarm4);
}

var toRarm4 = function(){
  Rarm1.animate({ d: Rarm4Points}, 450, mina.linear);
  Larm1.animate({ d: Larm4Points}, 450, mina.linear);
  Rleg1.animate({ d: Rleg4Points}, 450, mina.linear);
  Lleg1.animate({ d: Lleg4Points}, 450, mina.linear, toRarm5);
}

var toRarm5 = function(){
  Rarm1.animate({ d: Rarm5Points}, 450, mina.linear);
  Larm1.animate({ d: Larm5Points}, 450, mina.linear);
  Rleg1.animate({ d: Rleg5Points}, 450, mina.linear);
  Lleg1.animate({ d: Lleg5Points}, 450, mina.linear, toRarm1);
}


toRarm1();