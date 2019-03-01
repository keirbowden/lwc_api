import { LightningElement, api } from 'lwc';

export default class ExpenseOneItem extends LightningElement {
    @api
    item;

    handleDateChange(event) {
        let date=event.target.value;
        // eslint-disable-next-line no-console
        console.log('Item with index ' + this.item.index + ' Date Changed');
        this.dispatchEvent(new CustomEvent('datechanged', { detail : {index: this.item.index, value: date}}));
    }
}