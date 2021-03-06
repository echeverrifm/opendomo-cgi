$(function() {
	$("fieldset.filterable ul").each(function(item) {
		var rawhtml = "<input name='filter' placeholder='Filter text' class='filterbox' data-reference='" + $(this).attr('id') + "'  id='" + $(this).attr('id') + "_filter' type='search'>";
		$(rawhtml).insertBefore($(this));
	});
	$("fieldset.filterable input.filterbox").on("change",function() {
		var ref = $(this).data("reference");
		filterList(ref, $(this).val());
	});
});

/**
 * Filter the contents of a list
 * 
 * This function hides all the items in a list that doesn't match the specified string
 * 
 * @author	Oriol Palenzuela
 * @param listID	list's ID
 * @param text 		string to match the selection
 */
function filterList(listID,text){
	$("#" + listID+ " li").each(function(item){
		if ($(this).text().indexOf(text)==-1){ 
			$(this).addClass("hidden");
		} else {
			$(this).removeClass("hidden");
		}
	});
}
