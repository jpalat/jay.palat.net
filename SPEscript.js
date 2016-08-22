
  var _snoopDemo=document.getElementById('snoopDemo');
  if (!_snoopDemo) {
     var tbody = document.getElementsByTagName("body")[0];
     var tnode = document.createElement('div');
         tnode.id='snoopDemo';
         tbody.appendChild(tnode);
         _snoopDemo=document.getElementById('snoopDemo');
         _snoopDemo.style.position='absolute';
         _snoopDemo.style.display='block';
         _snoopDemo.style.backgroundColor='#ffdead';
         _snoopDemo.style.border='2px solid #800000';
         _snoopDemo.style.width='600px';
         _snoopDemo.style.height='380px';
         _snoopDemo.style.zIndex='1000';
         _snoopDemo.style.textAlign='left';
         _snoopDemo.style.fontFamily='verdana';
         _snoopDemo.style.fontSize='9pt';
         _snoopDemo.style.padding='2px';
         _snoopDemo.style.MozBorderRadius='10';
   }

   var _xmlStr='';

// 

	function collectSPE(doc){
		var title = doc.title;
		var location = doc.location;
		var dateModified = new Date();
		var node = "This is SPE Specific";
		var ca = document.cookie.split(';');
		var cookielist = "<quote>";
		for (var i=0; i< ca.length; i++){
			cookielist = cookielist + ca[i] + "\n<br>  ";
		}
		cookielist = cookielist + "</quote>";
		var metaData = document.getElementsByTagName("meta");
		for(var i = 0; i < metaData.length; i++) {
			if (metaData[i].name == 'SpeServerId2') {
			node = metaData[i].content;
			}
		}
		_xmlStr = "title: "+ title  + "\n<br>URL: " + location +"<br>\nDate:" + dateModified;
		_xmlStr = _xmlStr + "<br>\n Node: " + node + "<br>\nCookies:\n<p> " + cookielist;
		
	}


   function snoopHide() {
      _snoopDemo.style.display='none';
      _snoopDemo.innerHTML='';
   }

   collectSPE(document);

   // set the x and Y coordinates so window is visible.
   var scrollTop = 0;
   if (document.documentElement && document.documentElement.scrollTop)
      scrollTop = document.documentElement.scrollTop;
   else if (document.body)
      scrollTop = document.body.scrollTop;

   _snoopDemo.style.top=scrollTop+50+'px';
   _snoopDemo.style.left='75px';

   var myStr='<A HREF="" onClick="snoopHide(); return false">Close This Layer</A><BR>';
   //myStr= myStr + '<A HREF = "" onClick="window.clipboardData.setData(\'text\',_xmlStr)"> Copy to Clipboard</A><BR>';
   myStr= myStr + '<BR><div style="overflow: auto; height: 350px">Browser:<BR>'+(navigator.userAgent)+'<BR><BR>Document:<BR>'+_xmlStr+'</div>';

   _snoopDemo.innerHTML=myStr;
   _snoopDemo.style.display='block';
