# Copyright (c) 2024, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class TraderOnboardingProcess(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.sop.doctype.traders_documents.traders_documents import TradersDocuments
		from frappe.types import DF

		account_details: DF.Data
		alternative_idletters: DF.Attach
		bank_verification_number_bvn: DF.Data
		business_location_address: DF.SmallText
		credit_limit: DF.Currency
		documents_table: DF.Table[TradersDocuments]
		email: DF.Data
		feedback: DF.SmallText | None
		mobile_number: DF.Phone
		name1: DF.Data
		naming_series: DF.Literal["TRADER-ONBOARD-.DD.-.MM.-.YYYY.-"]
		national_identification_number_nin: DF.Data
		proof_of_business_operations: DF.Attach
		residential_address: DF.SmallText
	# end: auto-generated types
	pass
