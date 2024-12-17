# Copyright (c) 2024, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class FieldAgentDoc(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.sop.doctype.traders_documents.traders_documents import TradersDocuments
		from frappe.types import DF

		company: DF.Link
		date_of_joining: DF.Date
		designation: DF.Data
		documents_table: DF.Table[TradersDocuments]
		email: DF.Data
		feedback: DF.SmallText | None
		field_agent_id: DF.Data
		field_agent_name: DF.Data
		mobile_number: DF.Phone
		residential_address: DF.SmallText | None
	# end: auto-generated types
	pass
