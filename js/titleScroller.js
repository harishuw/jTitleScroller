function setTitle()
   {
		var title=document.title;
		var tmp_title=title;
		var titletimer;
		var speed=200;
		var interval=800;
		if(document.getElementsByTagName("title")[0].hasAttribute('data-speed'))
			speed=document.getElementsByTagName("title")[0].getAttribute('data-speed');
			
		if(document.getElementsByTagName("title")[0].hasAttribute('data-interval'))
			interval=document.getElementsByTagName("title")[0].getAttribute('data-interval');	
			
			speed=isNaN(speed)?200:speed;	
			interval=isNaN(interval)?800:interval;	
			
		setTimeout(function(){
			titletimer=setInterval(function(){
			tmp_title=tmp_title.substr(1, tmp_title.length-1)
			document.title=tmp_title
			if(tmp_title.length==1)
			{
			tmp_title=title;
			document.title=title
			clearInterval(titletimer);
				setTitle();
				
			}
		},speed);		
				
	},interval);
   }
   setTitle();