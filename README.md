# LWC API Not Reactive Demo

## Scnario

Parent component - expenseReportOneItem. Manages a @track property named 'item'.
Child component - expenseOneItem. Manages an @api property named 'item'.

Parent component supplies 'item' to the child component.

In child component, user enters a date for the expense item which causes the JavaScript handler to fire. A custom event is fired which is caught by the parent component.

The parent component updates the tracked item with the new date. As this is an @api property in the child component, I expect it to react to the change. However, the vanilla output of the field {item.Date__c} remains empty.

If I change the @api property to a primitive named 'date', and pass 'item.Date__c' from the parent, everything works as expected.