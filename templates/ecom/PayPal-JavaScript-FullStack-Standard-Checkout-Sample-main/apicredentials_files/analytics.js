
function piResponse() {
		piSetCookie('visitor_id925803', '2518289691', 3650);
			piSetCookie('visitor_id925803-hash', '8ddd72de0de37f8006bf2a4be2914a02a998a6e73a93810a1960b0a9a4e7a5622d52ec2df0572c269db4008688ea06b4198ddbf7', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "pypd.paypal-mktg.com/analytics?";
		pi.tracker.visitor_id='2518289691';

				pi.tracker.visitor_id_sign='8ddd72de0de37f8006bf2a4be2914a02a998a6e73a93810a1960b0a9a4e7a5622d52ec2df0572c269db4008688ea06b4198ddbf7';
		
				pi.tracker.campaign_id='5717';
		
		var variables = 'conly=true';
		for (property in pi.tracker) {
					variables += "&" + property + "=" + pi.tracker[property];
				}
		var headID = document.getElementsByTagName("head")[0];
		piScriptObj[piScriptNum] = document.createElement('script');
		piScriptObj[piScriptNum].type = 'text/javascript';
		piScriptObj[piScriptNum].src = analytics_link + variables;
		headID.appendChild(piScriptObj[piScriptNum]);
		piScriptObj[piScriptNum].onload = function() { return; }
	}
	}
piResponse();




