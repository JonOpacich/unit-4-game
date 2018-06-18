

//mouseover functionality for 
$(".btn").mouseover(function () {
  $("#attackDescription").show();
  $("#attackDescription").html("value");
})
  .mouseout(function () {
    $("#attackDescription").hide();
  });

//activate draggable functionality
  $(function () {
    $(".draggable").draggable({ revert: "invalid" });

var previousPokeID=5;

    $("#droppable").droppable({
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function (event, ui) {
        var currentPokeID=ui.draggable.attr("id")
        if (currentPokeID!==previousPokeID){ //added to prevent function running when moving around active pokemon
          changePokemon(currentPokeID);
          previousPokeID=currentPokeID;
        }
      }
    });
  });

function changePokemon(x) {
  if(parseInt(x)===1){
    $("#pikachuHealth").css("visibility","hidden");
  }
  else if (parseInt(x)===2){
    $("#charmanderHealth").css("visibility","hidden");;
  }
  else if (parseInt(x)===3){
    $("#bulbasaurHealth").css("visibility","hidden");;
  }
  else if (parseInt(x)===4){
    $("#squirtleHealth").css("visibility","hidden");;
  }
}
/*
pikachu
thundershock - Electric - Thunder Shock deals 40 electric-type damage and has a 10% chance of paralyzing the target.
thunderwave - paralyzes - 25% chance of not being able to attack
quick attack - deals 40 damage and always goes first
thunder - deals 90 damage, but has a 50% chance to miss

bulbasaur 
leech seed - grass - drain 1/8th of opponent's HP at the end of each turn and restore it that amount to your health
vine whip - grass - deal 45 grass-type damage
razor leaf - deal 55 normal damage
growl - reduce enemies attack damage by 25%

squirtle
water gun - water - deal 40 water-type damage
bite - deal 45 damage and a 30% chance to cause enemy to flinch
withdraw - reduce all incoming damage by 30% for 3 turns
bubble - water - deal 30 damage and enemy has 30% chance to miss their next attack

charmander
ember - deal 40 damage and has 25% chance of burning target for 30 damage over 3 turns
flamethrower - deal 55 damage to enemy and 20 to yourself
dragon rage - always deals 40 damage, regardless of type
slash - deal 40 damage, with a 15% chance of doing double damage

ditto-
transform

meowth
payday - deals 40 damage 
fury swipes - deals 18 damage 2-5 times
bite - deal 60 damage and has 30% chance to cause enemy to flinch
body slam - deals 85 damage and ahs a 30% chance of paralyzing the target

weepinbell
sleep powder - 50% chance to put target to sleep
sword dance - increases attack by 50% for 3 turns
solar beam - deal 120 damage after 1 turn
razor leaf - grass - deal 55 damage with a 20% chance to deal double damage
*/