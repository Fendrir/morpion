

// --------------------------------- image bacteriologique ------------------------

// <img class="bact-bomb" src="images/bacteriologique.png">

// ----------------------------- image nuke bomb ---------------------------------

// <img class="nuke-bomb" src="images/nuke-bomb.png">

// ---------------------------- id des cases --------------------------------------

// id :
// 	case1
// 	case2
// 	case3
// 	case3
// 	case4
// 	case5
// 	case6
// 	case6
// 	case7
// 	case8
// 	case9

// ------------------------- deplacer une image ------------------------




// var nukeBomb = '<img class="nuke-bomb" src="images/nuke-bomb.png">';
// var bactBomb = '<img class="bact-bomb" src="images/bacteriologique.png">';



// $("#case1").click(function() {
//   $("#case1").append(nukeBomb);
  	
// });

// $("#case2").click(function() {
//   $("#case2").append(bactBomb);
  	
// });

// ------------------------------ enregistrer les players ---------------------------
var objet = {};

// ------------ player 1 -----------------


$("#valider_player_1").click (function() {
  	var joueur1 = $("#player_1").val();
    objet.joueur1 = joueur1;

$("#texte-player-1").html("bienvenue "+objet.joueur1);

 });

$('#player_1').change(function(){
    objet.joueur1 = $("#player_1").val();

    $("#texte-player-1").html("bienvenue "+objet.joueur1);
});

//------------------------ Player 2 --------------------------------

$("#valider_player_2").click (function() {
  	var joueur2 = $("#player_2").val();
    objet.joueur2 = joueur2;

$("#texte-player-2").html("bienvenue "+ objet.joueur2);

 });


$('#player_2').change(function(){
    objet.joueur2 = $("#player_2").val();

    $("#texte-player-2").html("bienvenue "+objet.joueur2);
});
// -------------------------- condition positionning tour par tour -------------------




      // Images joueur 1 joueur 2 et fond

      var nukeBomb = '<img class="nuke-bomb" src="images/nuke-bomb.png">';
	  var bactBomb = '<img class="bact-bomb" src="images/bacteriologique.png">';
	  var fondBlanc = '<img class="fond-Blanc" src="images/fond-blanc.jpg">';



// ---------- position des images + verification pour positionner une image -----------------------
var joueur = 1;

$(".case").on("click",function donneImage(){
		if(joueur===1 ){

      if ($(this).html()==""){
      $(this).html(nukeBomb);
      joueur=2;

      }else{

        alert("Case pleine");

      }

		}else if (joueur===2){

      if ($(this).html()==""){

			$(this).html(bactBomb);
			joueur=1;

      }else{

        alert("case pleine");

      }
		}
});


// -------------------------------------------- vérification --------------------------------------------


// ----------------------------- fonction de vérification et message du winner --------------------------

function verifier(a, b, c){

    if (a==b && a==c){

      if (a==nukeBomb){
      alert( 'Le joueur 1 gagne et atomise le joueur 2 !') ;
       
    }else if (a==bactBomb){

      alert('Le joueur 2 gagne et désintègre le joueur 1');

    }
  }

};


// ---------------------------- fonction condtions des positions impage pour gagner ---------------------

      $(".case").on("click",function gagnant()
      {
          return verifier($("#case1").html(), $("#case2").html(), $("#case3").html())
              || verifier($("#case4").html(), $("#case5").html(), $("#case6").html())
              || verifier($("#case7").html(), $("#case8").html(), $("#case9").html())

              || verifier($("#case1").html(), $("#case4").html(), $("#case7").html())
              || verifier($("#case2").html(), $("#case5").html(), $("#case8").html())
              || verifier($("#case3").html(), $("#case6").html(), $("#case9").html())

              || verifier($("#case1").html(), $("#case5").html(), $("#case9").html())
              || verifier($("#case3").html(), $("#case5").html(), $("#case7").html()) ;

       });

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------___------___------------------------------------------------
// ------------------------ |  |   /\  \    /  |        |     |   |  |\  |   | -----------------------------
// ------------------------ |--|  /__\  \  /   |--      |--   |   |  | \ |   | -----------------------------
// ------------------------ |  | /    \  \/    |___     |     |___|  |  \|   . -----------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------