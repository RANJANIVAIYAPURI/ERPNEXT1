# Copyright (c) 2024, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class AdminFeedbackandCreditLimit(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		admin_feedback: DF.Text | None
		approval_status: DF.Literal["Approved", "Rejected"]
		credit_limit: DF.Currency
		field_agent_feedback: DF.Text | None
		task_id: DF.Link | None
	# end: auto-generated types
	pass
