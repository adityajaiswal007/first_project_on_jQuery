$("ul").on("click","li",function(){
	$(this).toggleClass("done");
});
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
    	remove();
    });
    event.stopPropagation();
});
$("input[type='text'").keypress(function(event){
    if(event.which===13){    	
    	var item=$(this).val();
    	$(this).val("");
    	$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+item+"</li>");
    }
});
$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});