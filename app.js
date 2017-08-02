

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




var nukeBomb = '<img class="nuke-bomb" src="images/nuke-bomb.png">';
var bactBomb = '<img class="bact-bomb" src="images/bacteriologique.png">';



$("#case1").click(function() {
  $("#case1").append(nukeBomb);
  	
});

------------------------------ enregistrer les players ---------------------------

// $("#valider").click (function() {
//   	var prenom = $("#first_name").val();
//   	var nom = $("#last_name").val();
//   	var age = $("#age").val();


//   	$("#texte-de-merde").html(prenom + " " + nom + " " + age + " ans");

//  });