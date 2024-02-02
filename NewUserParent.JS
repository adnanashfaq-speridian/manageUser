// parentComponent.js
import { LightningElement, track } from 'lwc';

export default class NewUserParent extends LightningElement {
    @track isModalOpen = false;

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }
}
