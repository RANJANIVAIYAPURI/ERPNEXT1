frappe.ui.form.on("Trader Onboarding Process", {
    validate: function (frm) {
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

        // If any mandatory field is missing, throw an error
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


        const default_credit_limit = 20000; // Default to 20,000 NGN
        console.log("Default Credit Limit:", default_credit_limit);
        console.log("User-defined Credit Limit:", frm.doc.credit_limit);

        // Check if user-defined credit limit exceeds the default
        if (frm.doc.credit_limit > default_credit_limit) {
            // set frm.doc.credit_limit == 0
            frm.set_value("credit_limit", 0);
           
            frappe.throw(__(`Credit Limit Exceeded! The credit limit cannot exceed ₦${default_credit_limit}.`));
        }
    },


});
