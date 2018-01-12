//Functions for side-menu


$(function(){
	$("#list li ul").slideToggle(); // hide all nested lists
	$("#list li ul").prev("a").click(function(){ // add fn to list items that have a nested list
		$(this).next("ul").slideToggle(250); // show/hide the nested list
		//Toggle between plus square and minus square when lists are expanded and contracted.
		var elem = $(this).prev('a').prev('a').prev('a');
		if(elem.hasClass("fa-plus-square-o")) {
			elem.removeClass("fa-plus-square-o").addClass("fa-minus-square-o");
		} else {
			elem.removeClass("fa-minus-square-o").addClass("fa-plus-square-o");
		}
		return false; // prevent scrolling
	});
});

//add new ARTCC entities to menu list
function onChanged(collection, added, removed, changed){
  for(var i = 0; i < added.length; i++) {
	  var entityId = added[i].name.toLowerCase();
    $("#ARTCC").append("<li id=" + added[i].id + " class='entity'>"
    + "<a href='.' onclick='return false;' class='fa fa-check-square' style='display: inline'></a>"
		+ "<a id=" + added[i].id + " href='#' class='entity' onclick='return false;' style='display: inline'>"
    + added[i].name + "</a></li>");
  }
}

//Add tracks and points to the menu list as they are received from the database
function streamChanged(collection, added, removed, changed){
  if (added.length == 1){
    entity = added[0]
    entityId = entity.id
    if (entity.name == 'flight'){
			//The menu looks cleaner if only the beginning of the GUFI is displayed. The full GUFI is displayed in the description box.
      var name = entityId.split('-');
      var list = 'list' + entityId;
			//The contents of an entity's description will be displayed in the box in the top right of cesium once the entity is selected
      added[0].description = '<center><img src="http://www.freeiconspng.com/uploads/glossy-3d-blue-plane-icon--clean-3d-iconset--mysitemywaym-29.png" alt="HTML5 Icon" style="width:50px;height:50px;"><table><tr><th>GUFI: </th></tr ><tr><td>' + entity.id + '</td></tr></table></center>';
			//The 'fa' classes display a symbol from fontawesome.com which are used for check boxes, plus boxes, and symbols for flight, SUA, and ARTCC lists
			$("#Flights").append("<li id=" + entityId + " class='entity flight'>"
      + "<a href='#' onclick='return false;' class='fa fa-plus-square-o' style='display: inline'></a> <a href='#' onclick='return false;' class='fa fa-check-square' style='display: inline'></a> "
      + "<a id=" + entityId + "text href='#' class='entity text' onclick='return false;' style='display: inline'>GUFI: "
      + name[0] + "</a><ul id="+list+" class='flightList'></ul></li>");
			addToggle(entityId);
    } else if (entityId.includes('trackpoint')){
      var name = entityId.split(';').pop().split('T');
      var parent = added[0].parent.id;
      var time = entityId.split(';').pop();
      var artcc = entityId.split(';')[1];
      added[0].description = '<center><img src="http://www.freeiconspng.com/uploads/glossy-3d-blue-plane-icon--clean-3d-iconset--mysitemywaym-29.png" alt="HTML5 Icon" style="width:50px;height:50px;"></center><table style="width:100%"><tr><th>Time:</th><td>' + time + '</td></tr><tr><th>ARTCC:</th><td>' + artcc + '</td><th>Flight GUFI:</th><td>' + parent + '</td></tr></tr></table>';
      $('#list'+ parent).append("<li id=" + entityId + " class='entity flight point'>"
      + "<a href='.' onclick='return false;' class='fa fa-check-square' style='display: inline'></a> "
      + "<a id=" + entityId + " href='#' class='entity text' onclick='return false;' style='display: inline'>"
      + name[1] + "</a></li>");
    }
  }
}
//Used by streamChanged
function addToggle(id) {
	var elem = $('#' + id + "text");
	elem.next("ul").slideToggle();
	elem.click(function(){
		elem.next("ul").slideToggle(250);
		var box = elem.prev('a').prev('a');
		if(box.hasClass("fa-plus-square-o")) {
			box.removeClass("fa-plus-square-o").addClass("fa-minus-square-o");
		} else {
			box.removeClass("fa-minus-square-o").addClass("fa-plus-square-o");
		}
		return false;
	});
}

//double click to fly to entity
$(document).on('dblclick', 'a.entity', function() {
	var id = $(this).attr('id').split('text')[0];		//split('text') is used to remove the postfix 'text' from the flight track's id
	if ($(this).closest('li').hasClass("flight")){
        var entity = czmlStream.entities.getById(id);
	}	else if ($(this).closest('li').hasClass("sua")){
		var entity = suas.getById(id);
	} else {
		var entity = viewer.entities.getById(id);
	}
	viewer.flyTo(entity);
	viewer.selectedEntity = entity;
});

//When a checkbox is clicked this function uses the id of the element
//that was selected to toggle the cesium entities show attirbute.
//It also switches between a checked box and a blank box.
$(document).on('click', 'a.fa-check-square, a.fa-square', function(){
  if ($(this).hasClass('fa-check-square')) {
    $(this).removeClass('fa-check-square').addClass('fa-square');
  } else {
    $(this).removeClass('fa-square').addClass('fa-check-square');
  }
  if ($(this).closest('li').hasClass("entity")) {
    var id = $(this).closest('li').attr('id').split('text')[0];
		toggleEntity(id);
  } else if ($(this).closest('li').hasClass("parent")) {  //If the element contains a list then toggle all children.
    var children = $(this).closest('li').find('ul li.entity');
    for (var i = 0; i < children.length ; i++) {
      var id = children[i].id;
			if (id.includes('trackpoint')){
				continue;
			}
      var elem = $('#' + id).find('a.fa-check-square, a.fa-square');
       if ($(this).hasClass('fa-square')) {
          if (elem.hasClass('fa-check-square')) {
            elem.removeClass('fa-check-square').addClass('fa-square');
            toggleEntity(id);
          }
        } else {
          if (elem.hasClass('fa-square')) {
            elem.removeClass('fa-square').addClass('fa-check-square');
            toggleEntity(id);
        }
      }
    }
  }
});
//When plus square is clicked expand list and switch to minus square
$(document).on('click', 'a.fa-plus-square-o, a.fa-minus-square-o', function() {
	var elem = $(this).next('a').next('a');		//I tried using $(this).next('.text') but it was not finding the element. This was the next best things.
	if (elem.hasClass('text')) {
		elem.click();
	} else {
		elem = elem.next('a');
		elem.click();
	}
})

//Used by the checkbox click function
function toggleEntity(id) {
	var entity = viewer.entities.getById(id);
	if (entity == undefined){
		entity = czmlStream.entities.getById(id);
	}
	if (entity == undefined){
		entity = suas.getById(id);
	}
	if (entity.show == true) {
		entity.show = false;
	} else {
		entity.show = true;
	}
}

//nav functions
  function openNav() {
      document.getElementById("GUI").style.width = "220px";
  }
  function closeNav() {
      document.getElementById("GUI").style.width = "0";
  }
