

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


      // Compteur de coups
      var coups = 0 ;

      // Images joueur 1 joueur 2 et fond

      var nukeBomb = '<img class="nuke-bomb" src="images/nuke-bomb.png">';
	  var bactBomb = '<img class="bact-bomb" src="images/bacteriologique.png">';
	  var fondBlanc = '<img class="fond-Blanc" src="images/fond-blanc.jpg">';




var joueur = 1;

$(".case").on("click",function donneImage(){
		if(joueur===1 ){
			$(this).html(nukeBomb);
			joueur=2;
		}else{
			$(this).html(bactBomb);
			joueur=1;
		}
});

      // function donneImage(i)
      // {
      //     if (i%2)
      //         return $(this).html(nukeBomb) ;
      //     else
      //         return $(this).html(bactBomb) ;
      // }



          // if (   document.images[a].src == document.images[b].src
          //     && document.images[b].src == document.images[c].src
          //     && document.images[c].src != fondBlanc.src)
          // {
          //     window.alert ('Nous avons un gagnant !') ;
          //     // return true ;
          // }

      //     return false ;
      // }



      function gagnant()
      {
          return verifier($("#case1")=(0), $("#case2")=(1), $("#case3")=(2))
              || verifier($("#case4")=(3), $("#case5")=(4), $("#case6")=(5))
              || verifier($("#case7")=(6), $("#case8")=(7), $("#case9")=(8))
              || verifier($("#case1")=(0), $("#case4")=(3), $("#case7")=(6))
              || verifier($("#case2")=(1), $("#case5")=(4), $("#case8")=(7))
              || verifier($("#case3")=(2), $("#case6")=(5), $("#case9")=(8))
              || verifier($("#case1")=(0), $("#case5")=(4), $("#case9")=(8))
              || verifier($("#case2")=(1), $("#case5")=(4), $("#case7")=(6)) ;

      }

      function joue(n)
      {
          if (coups > 8)
          {
              window.alert('Partie terminée.\nRechargez la page pour rejouer.') ;
              return ;
          }
          if (document.images[n].src.search('images/fond-blanc.jpg') != -1)
          {

              document.images[n].src = donneImage(coups).src ;

              if (gagnant())
              {

                  coups = 9 ;
              }
              else
              {

                  coups++ ;
              }
          }
          else
          {
              window.alert ('Position déjà jouée') ;
          }
      }