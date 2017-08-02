

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

$("#valider_player_1").click (function() {
  	var joueur1 = $("#player_1").val();

$("#texte-player-1").append("bienvenue "+joueur1);

 });

$("#valider_player_2").click (function() {
  	var joueur2 = $("#player_2").val();

$("#texte-player-2").html("bienvenue "+ joueur2);

 });

// -------------------------- condition positionning tour par tour -------------------


      // Compteur de coups
      var coups = 0 ;

      // Images joueur 1 joueur 2 et fond

      var nukeBomb = '<img class="nuke-bomb" src="images/nuke-bomb.png">';
	  var bactBomb = '<img class="bact-bomb" src="images/bacteriologique.png">';
	  var fondBlanc = '<img class="fond-Blanc" src="images/fond-blanc.jpg">';


	  // 	function changeImage(i){
   //        if (i%2) {
			// if ($("#case1").click(function() {
          	
			// 	$("#case1").append(nukeBomb);
			// }) 
			// 	|| $("#case2").click(function() {
          	
			// 	$("#case2").append(nukeBomb);
			// }) 
			// 	|| $("#case3").click(function() {
          	
			// 	$("#case3").append(nukeBomb);
			// }) 
			// 	|| $("#case4").click(function() {
          	
			// 	$("#case4").append(nukeBomb);
			// }) 
			// 	|| $("#case5").click(function() {
          	
			// 	$("#case5").append(nukeBomb);
			// }) 
			// 	|| $("#case6").click(function() {
          	
			// 	$("#case6").append(nukeBomb);
			// }) 
			// 	|| $("#case7").click(function() {
          	
			// 	$("#case7").append(nukeBomb);
			// }) 
			// 	|| $("#case8").click(function() {
          	
			// 	$("#case8").append(nukeBomb);
			// }) 
			// 	|| $("#case9").click(function() {
          	
			// 	$("#case9").append(nukeBomb);
			// }));

   //        } else {

   //        	$("#case1").click(function() {
          	
			// 	$("#case1").append(bactBomb);
			// }) 
			// 	|| $("#case2").click(function() {
          	
			// 	$("#case2").append(bactBomb);
			// }) 
			// 	|| $("#case3").click(function() {
          	
			// 	$("#case3").append(bactBomb);
			// }) 
			// 	|| $("#case4").click(function() {
          	
			// 	$("#case4").append(bactBomb);
			// }) 
			// 	|| $("#case5").click(function() {
          	
			// 	$("#case5").append(bactBomb);
			// }) 
			// 	|| $("#case6").click(function() {
          	
			// 	$("#case6").append(bactBomb);
			// }) 
			// 	|| $("#case7").click(function() {
          	
			// 	$("#case7").append(bactBomb);
			// }) 
			// 	|| $("#case8").click(function() {
          	
			// 	$("#case8").append(bactBomb);
			// }) 
			// 	|| $("#case9").click(function() {
          	
			// 	$("#case9").append(bactBomb);
			// })

   //        }
   //  };


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


      function verifier(a, b, c)
      {
          if (   document.images[a].src == document.images[b].src
              && document.images[b].src == document.images[c].src
              && document.images[c].src != fondBlanc.src)
          {
              window.alert ('Nous avons un gagnant !') ;
              return true ;
          }

          return false ;
      }


      function gagnant()
      {
          return verifier($("#case1"), $("#case2"), $("#case3"))
              || verifier($("#case4"), $("#case5"), $("#case6"))
              || verifier($("#case7"), $("#case8"), $("#case9"))
              || verifier($("#case1"), $("#case4"), $("#case7"))
              || verifier($("#case2"), $("#case5"), $("#case8"))
              || verifier($("#case3"), $("#case6"), $("#case9"))
              || verifier($("#case1"), $("#case5"), $("#case9"))
              || verifier($("#case2"), $("#case5"), $("#case7")) ;

      }

      function joue(n)
      {
          if (coups > 8)
          {
              window.alert('Partie terminée.\nRechargez la page pour rejouer.') ;
              return ;
          }
          if (document.images[n].src.search('fond-blanc.jpg') != -1)
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