// Copyright (c) 2024, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on("Trader Onboarding Process", {
	
    validate: function (frm) {

        if (!frm.doc.name || !frm.doc.mobile_number || !frm.doc.residential_address || !frm.doc.gps_coordinates) {
            frappe.throw(__('Please complete all mandatory fields.'));
        }
        if (!frm.doc.phone_number) {
            frappe.throw(__('Phone number is mandatory for Two-Factor Authentication.'));
        }
        // frappe.call({
        //     method: "frappe.integrations.utils.send_otp",
        //     args: {
        //         phone_number: frm.doc.phone_number
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
