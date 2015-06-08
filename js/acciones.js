// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	var basedatos= window.sqlitePlugin.openDatabase({name: "coloresBD.db",createFromLocation:1})
	cargarnombrejugador();
	function cargarnombrejugador ()
	{
		basedatos.transaction (function(ejecutar){
			var sql="SELECT NombreUsuario FROM Usuario";
			ejecutar.executeSql(sql,undefined,function(ejecutar,resultado){
				var datosjugador=resultado.row.item(0);
				$('#jugador').text(datosjugador.NombreUsuario)
			});
		});
	}
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('b1','audio/C.mp3',function(){},function(msg){alert("Error "+msg);});
	audio.preloadFX('b2','audio/D.mp3',function(){},function(msg){alert("Error "+msg);});
	audio.preloadFX('b3','audio/E.mp3',function(){},function(msg){alert("Error "+msg);});
	audio.preloadFX('b4','audio/F.mp3',function(){},function(msg){alert("Error "+msg);});
	$('#btnjugar').on('tap',function(){
		var pantalla=$.mobile.getScreenHeight();
		var encabezado=$('.ui-header').outerHeight();
		var pie=$('.ui-footer').outerHeight();
		var contenido=$('.ui-content').outerHeight();
		var alto=(pantalla - encabezado - pie)/2
		//alert('pantalla  '+ pantalla)
		//alert('encabezado  '+ encabezado)
		//alert('pie  '+ pie)
		//alert('contenido  '+ contenido)
		//alert('alto ' + alto)
		$('.cuadro').height(alto);
		
	});
	
	$('.cuadro').on('vmousedown',function(){
			$(this).addClass('pulsado');
		});
		$('.cuadro').on('vmouseup',function(){
			$(this).removeClass('pulsado');
		});
		function quien(q)
		{
			audio.play(q);
			return q.substring(1);
		}
		$('.cuadro').on('vmousedown',function(){
			$('#pantalla').append(quien($(this).attr('id')));
			$(this).addClass('pulsado');
			
		});
}); 
});

