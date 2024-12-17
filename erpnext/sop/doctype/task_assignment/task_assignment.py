# Copyright (c) 2024, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class TaskAssignment(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		assigned_to: DF.Link | None
		description: DF.Text | None
		status: DF.Literal["Assigned", "In Progress", "Review", "Rejected for Approval", "Submitted", "Rejected", "Completed"]
		task_title: DF.Data | None
	# end: auto-generated types
	pass
