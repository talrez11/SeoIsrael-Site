/**
 * Main Javascript
 * SEO-ISRAEL
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors:Tal Reznic
 */
var Caracal = Caracal || {};

// create or use existing site scope
var Site = Site || {};

// make sure variable cache exists
Site.variable_cache = Site.variable_cache || {};


/**
 * Check if site is being displayed on mobile.
 * @return boolean
 */
Site.is_mobile = function() {
	var result = false;

	// check for cached value
	if ('mobile_version' in Site.variable_cache) {
		result = Site.variable_cache['mobile_version'];

	} else {
		// detect if site is mobile
		var elements = document.getElementsByName('viewport');

		// check all tags and find `meta`
		for (var i=0, count=elements.length; i<count; i++) {
			var tag = elements[i];

			if (tag.tagName == 'META') {
				result = true;
				break;
			}
		}

		// cache value so next time we are faster
		Site.variable_cache['mobile_version'] = result;
	}

	return result;
};



function on_site_load() {

	Caracal.animation_pages = new PageControl('div.animation_page','div.animate')
	Caracal.animation_pages.showPage(0)

	$('form:last()').on('dialog-show', function() {
			$('form').hide();
			$('div.send').hide();
			Caracal.animation_pages.nextPage();
			return false;
		});

	$('form:first()').on('dialog-show', function() {
			// $('form').hide();
			// $('div.send').hide();
			var domainS="http://";
			var url1="www.";
			var url=$('input[name="url"]').val();
			$('form:last() input[name="url"]').val(domainS + url1 + url);
			$('div.form_text span:first-of-type').text(url1 + url);
			Caracal.animation_pages.nextPage();
			setTimeout(function() {
				Caracal.animation_pages.nextPage()
			}, 14000);
			return false;

	});

	if (Site.is_mobile()) $("div.contact span").html("<a style='background-image:none; color: #00BBE3; text-decoration: none; width: 100%; font-size: 0.75em;' class='phone' href='tel:073-2240000'><span style='padding-left: 5px;'>צור קשר</span></a>");



	// $('div.controls button').eq(0).click(check_domain);

	// function check_domain(event){
	// 	// prevent form from submitting
	// 	event.preventDefault();

	// 	Caracal.animation_pages.nextPage()
	// 	var url=$('input[name="url"]').val();
	// 	var domain="www." + url;
	// 	new Communicator('tools')
	// 			.on_success(function(data) {
	// 				if (data){
	// 					var domainS="http://";
	// 					var url1="www.";
	// 				 	var url=$('input[name="url"]').val();
	// 					$('form:last() input[name="url"]').val(domainS + url1 + url);
	// 					$('div.form_text span:first-of-type').text(url1 + url);
	// 					setTimeout(function() {
	// 					Caracal.animation_pages.nextPage()
	// 					}, 14000);
	// 				}else {
	// 					Caracal.animation_pages.showPage(0);
	// 					$('form:first() input[name="url"]').val('');
	// 					$('form:first() input[name="url"]').attr('placeholder','Enter A Valid Url');


	// 				}

	// 			})

	// 			.on_error(function() {

 //                })
	// 			.use_cache(true)
	// 			.get('check_domain', {domain:domain});
	// }

	$('form').last().on('analytics-event', function(event, data) {
	    // register Google AdWords conversion
	    var google_conversion_id = 1070698718;
	    var google_conversion_label = "GY3pCPK--FoQ3qHG_gM";
	    image = new Image(1,1);
	    image.src = 'http://www.googleadservices.com/pagead/conversion/' + google_conversion_id + '/?label=' + google_conversion_label + '&script=0&guid=ON';
	    console.log ("ppc conversion");
	});

}

$(on_site_load);

