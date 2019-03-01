import { LightningElement, track } from 'lwc';

export default class ExpenseReportOneItem extends LightningElement {
    idx=1;

    @track
    item;

    constructor() {
        super();
        this.item={index: this.idx++};
    }

    handleItemDateChanged(event) {
        // eslint-disable-next-line no-console
        console.log('Got item date changed event!');
         const itemIndex=event.detail.index;
        // eslint-disable-next-line no-console
        console.log('Item Index = ' + itemIndex);
        this.item.Date__c=event.detail.value;

        // output the item to ensure that it has been updated as expected
        // eslint-disable-next-line no-console
        console.log('Item = ' + JSON.stringify(this.item, null, 4));
    }
}