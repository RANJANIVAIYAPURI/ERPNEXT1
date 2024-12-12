# Copyright (c) 2024, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class StockistsOnboardingProcess(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		agreement_to_terms_and_conditions: DF.Check
		bank_verification_number_bvn: DF.Data
		business_location_address: DF.SmallText
		email: DF.Data
		mobile_number: DF.Phone
		name1: DF.Data
		national_identification_number_nin: DF.Data
		residential_address: DF.SmallText
	# end: auto-generated types
	pass
