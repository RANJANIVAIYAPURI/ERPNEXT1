# Copyright (c) 2024, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class TraderOnboardingProcess(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		alternative_idletters: DF.Attach
		bank_verification_number_bvn: DF.Data
		business_location_address: DF.SmallText
		email: DF.Data
		mobile_number: DF.Phone
		name1: DF.Data
		national_identification_number_nin: DF.Data
		proof_of_business_operations: DF.Attach
		residential_address: DF.SmallText
	# end: auto-generated types
	pass
