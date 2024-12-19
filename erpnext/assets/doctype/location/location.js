// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on("Location", {
	setup: function (frm) {
		frm.set_query("parent_location", function () {
			return {
				filters: {
					is_group: 1,
				},
			};
		});
	},

	onload_post_render(frm) {
		if (!frm.doc.location && frm.doc.latitude && frm.doc.longitude) {
			// Set map view using latitude and longitude
			frm.fields_dict.location.map.setView([frm.doc.latitude, frm.doc.longitude], 13);
			console.log(JSON.parse(JSON.stringify({
				message: "Setting map view with coordinates",
				latitude: frm.doc.latitude,
				longitude: frm.doc.longitude,
			})));
		} else {
			// Update latitude and longitude from the map center
			const mapCenter = frm.fields_dict.location.map.getCenter();
			frm.doc.latitude = mapCenter.lat;
			frm.doc.longitude = mapCenter.lng;
			console.log(JSON.parse(JSON.stringify({
				message: "Updating coordinates from map center",
				latitude: frm.doc.latitude,
				longitude: frm.doc.longitude,
			})));
		}
	},
});

