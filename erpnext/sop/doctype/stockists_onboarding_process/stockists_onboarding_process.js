// Copyright (c) 2024, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on("Stockists Onboarding Process", {
    validate: function (frm) {
        // Check for mandatory fields
        if (!frm.doc.name || !frm.doc.mobile_number || !frm.doc.business_location_address || !frm.doc.gps_coordinates) {
            frappe.throw(__('Please complete all mandatory fields.'));
        }

        // Check agreement to terms and conditions
        if (!frm.doc.agreement_to_terms_and_conditions) {
            frappe.throw(__('Stockist must agree to the terms and conditions.'));
        }

        // Check phone number for OTP
        if (!frm.doc.mobile_number) {
            frappe.throw(__('Mobile number is mandatory for Two-Factor Authentication.'));
        }

        // Send OTP for Two-Factor Authentication
        // frappe.call({
        //     method: "frappe.integrations.utils.send_otp",
        //     args: {
        //         phone_number: frm.doc.mobile_number
        //     },
        //     callback: function (response) {
        //         if (response.message) {
        //             frappe.msgprint(__('OTP sent successfully to the mobile number.'));
        //         } else {
        //             frappe.throw(__('Failed to send OTP. Please check the phone number.'));
        //         }
        //     }
        // });
    }
});
