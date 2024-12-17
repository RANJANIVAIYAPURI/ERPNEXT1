# Copyright (c) 2024, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class GPSandDocumentCollection(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.sop.doctype.traders_documents.traders_documents import TradersDocuments
		from frappe.types import DF

		documents: DF.Table[TradersDocuments]
		verification_status: DF.Literal["Not Collected", "Collected", "Verified"]
	# end: auto-generated types
	pass
