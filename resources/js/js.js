(function(){


	// ****** GOOGLE MAP *******
	var map;

    var bl = new google.maps.LatLng(49.365975, 16.644523);

	var MY_MAPTYPE_ID = 'custom_style';

	function initialize() {

		var featureOpts = [
			{
				stylers: [
					{ saturation: -20 },
					{ lightness: 40 },
					{ visibility: 'simplified' },
					{ gamma: 0.8 },
					{ weight: 0.4 }
				]
			},
			{
				elementType: 'labels',
				stylers: [
					{ visibility: 'on' }
				]
			},
			{
				featureType: 'water',
				stylers: [
					{ color: '#dee8ff' }
				]
			}
		];

		var mapOptions = {
			zoom: 17,
			scrollwheel: false,
			panControl: false,
			mapTypeControl: false,
  			streetViewControl: true,
			center: bl,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
			},
			mapTypeId: MY_MAPTYPE_ID
		};

		map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);


var contentString = $('#address').html();

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

		var myLatLng = bl;
		var beachMarker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			 draggable: false,
             animation: google.maps.Animation.DROP
		});
		var styledMapOptions = {
			name: 'Custom Style'
		};

		var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

		map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

infowindow.open(map,beachMarker);
}
	google.maps.event.addDomListener(window, 'load', initialize);


})();
