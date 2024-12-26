frappe.ui.form.on("Trader Onboarding Process", {
    // Preload Nigeria coordinates on form load
    onload(frm) {
        if (!frm.doc.gps_coordinates) {
            frm.set_value("gps_coordinates", "9.0820, 8.6753"); // Nigeria's center coordinates
            console.log("Default GPS coordinates for Nigeria set.");
        }
    },

    // setup(frm) {
    //     frm.fields_dict.gps_coordinates.map_ready = function() {
    //         console.log("Map Ready function triggered");

    //         // Nigeria center coordinates
    //         const nigeriaCenter = [9.0820, 8.6753];

    //         // Define Nigeria polygon GeoJSON
    //         const nigeriaPolygon = {
    //             "type": "Feature",
    //             "geometry": {
    //                 "type": "Polygon",
    //                 "coordinates": [
    //                     [
    //                         [3.3515, 6.5244],  // Lagos (South-West)
    //                         [7.3964, 9.0765],  // Abuja (Center)
    //                         [8.6753, 9.0820],  // Jos (Plateau)
    //                         [13.1461, 10.3094], // Maiduguri (North-East)
    //                         [13.1500, 6.2349],  // Calabar (South-East)
    //                         [3.3515, 6.5244]   // Closing loop back to Lagos
    //                     ]
    //                 ]
    //             }
    //         };

    //         // Access the map instance
    //         const map = frm.fields_dict.gps_coordinates.map;

    //         if (map) {
    //             console.log("Map instance available");

    //             // Add Nigeria polygon
    //             const nigeriaLayer = L.geoJSON(nigeriaPolygon, {
    //                 style: { color: "red", weight: 2, fillOpacity: 0.4 }
    //             });
    //             nigeriaLayer.addTo(map);
    //             map.fitBounds(nigeriaLayer.getBounds());

    //             // Add marker with label for Nigeria's center
    //             const nigeriaMarker = L.marker(nigeriaCenter)
    //                 .addTo(map)
    //                 .bindPopup("Nigeria Center") // Label popup
    //                 .openPopup();

    //             console.log("Nigeria polygon and marker with label added to the map.");
    //         } else {
    //             console.error("Map instance not available. Check Geolocation field setup.");
    //         }
    //     };
    // },


    
        setup(frm) {
            frm.fields_dict.gps_coordinates.on_each_feature = function(feature, layer) {
                if (feature.geometry.type == "Polygon") {
                    layer.setStyle({color: "red"});
                }
                
            };
        },

    //     gps_coordinates: function(frm){
    //         console.log("/////////////>>>>>>>>>>>>>>>>>>",frm.doc.gps_coordinates);
    //         console.log(JSON.parse(frm.doc.gps_coordinates));
    //         console.log(JSON.parse(frm.doc.gps_coordinates));
    // // let mapdata = JSON.parse(cur_frm.doc.gps_coordinates).features[0];
    // // if (mapdata && mapdata.geometry.type === 'Point') {
    // //     let lat = mapdata.geometry.coordinates[1];
    // //     let lon = mapdata.geometry.coordinates[0];
    // //     console.log(lat, lon);

    // //     // Make an API call
    // //     frappe.call({
    // //         type: "GET",
    // //         url: `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`, // Dotted path to s
    // //         callback: function(r) {
    // //             console.log(r); // Code snippet
    // //             frm.set_value('business_location_address', r.display_name);
    // //             frm.set_value('latitude', r.lat);
    // //             frm.set_value('longitude', r.lon);
    // //         }
    // //     });
    // // }

    // // if (!mapdata) {
    // //     // below fields should be empty
    // //     frm.set_value('business_location_address', '');
    // //     frm.set_value('latitude', '');
    // //     frm.set_value('longitude', '');
    


    // // }

    
   


    //     },

    business_location_address: function(frm) {
        let address = frm.doc.business_location_address;
        if (address) {
            console.log("Business Location Address entered: ", address);

            // API call to geocode the business address
            frappe.call({
                type: "GET",
                url: `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`,
                callback: function(response) {
                    if (response && response.length > 0) {
                        let lat = response[0].lat;
                        let lon = response[0].lon;

                        console.log("Business Location Coordinates: ", lat, lon);

                        // Update Business GeoJSON
                        let businessGeoJSON = {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [parseFloat(lon), parseFloat(lat)]
                            },
                            properties: {
                                color: "red", // Marker color for Business Location
                                type: "Business Location"
                            }
                        };

                        frm.set_value('gps_coordinates', JSON.stringify(businessGeoJSON));
                        frm.set_value('latitude', lat);
                        frm.set_value('longitude', lon);

                        frappe.msgprint(__('Business Location pointer updated successfully!'));
                    } else {
                        frappe.msgprint(__('Unable to find coordinates for the entered business location address.'));
                    }
                }
            });
        } else {
            frappe.msgprint(__('Please enter a Business Location address.'));
            frm.set_value('gps_coordinates', '');
            frm.set_value('latitude', '');
            frm.set_value('longitude', '');
        }
    },

    residential_address: function(frm) {
        let address = frm.doc.residential_address;
        if (address) {
            console.log("Residential Address entered: ", address);

            // API call to geocode the residential address
            frappe.call({
                type: "GET",
                url: `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`,
                callback: function(response) {
                    if (response && response.length > 0) {
                        let lat = response[0].lat;
                        let lon = response[0].lon;

                        console.log("Residential Coordinates: ", lat, lon);

                        // Update Residential GeoJSON
                        let residentialGeoJSON = {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [parseFloat(lon), parseFloat(lat)]
                            },
                            properties: {
                                color: "blue", // Marker color for Residential Location
                                type: "Residential Location"
                            }
                        };

                        frm.set_value('gps_coordinates_1', JSON.stringify(residentialGeoJSON));
                        frm.set_value('latitude_1', lat);
                        frm.set_value('longitude_1', lon);

                        frappe.msgprint(__('Residential Location pointer updated successfully!'));
                    } else {
                        frappe.msgprint(__('Unable to find coordinates for the entered residential address.'));
                    }
                }
            });
        } else {
            frappe.msgprint(__('Please enter a Residential address.'));
            frm.set_value('gps_coordinates_1', '');
            frm.set_value('latitude1', '');
            frm.set_value('longitude1', '');
        }
    },
    
    
    
    

    // Validation method to ensure all mandatory fields are filled
    validate: function(frm) {
        // Define mandatory fields
        const mandatory_fields = [
            { fieldname: "name1", label: "Name" },
            { fieldname: "mobile_number", label: "Mobile Number" },
            { fieldname: "residential_address", label: "Residential Address" },
            { fieldname: "gps_coordinates", label: "GPS Coordinates" }
        ];

        // Check for missing fields
        const missing_fields = [];
        mandatory_fields.forEach(field => {
            if (!frm.doc[field.fieldname]) {
                missing_fields.push(field.label);
            }
        });

        // Throw error if mandatory fields are missing
        if (missing_fields.length > 0) {
            frappe.throw(
                __("Please complete the following mandatory fields: ") +
                missing_fields.join(", ")
            );
        }

        // Additional validation for mobile number
        if (!frm.doc.mobile_number) {
            frappe.throw(__('Phone number is mandatory for Two-Factor Authentication.'));
        }

        // Validate Credit Limit
        const default_credit_limit = 20000; // Default to 20,000 NGN
        console.log("Default Credit Limit:", default_credit_limit);
        console.log("User-defined Credit Limit:", frm.doc.credit_limit);

        if (frm.doc.credit_limit > default_credit_limit) {
            // Reset the credit limit
            frm.set_value("credit_limit", 0);
            frappe.throw(__(`Credit Limit Exceeded! The credit limit cannot exceed ₦${default_credit_limit}.`));
        }
    }
});
