import { LightningElement,track} from 'lwc';

export default class ManageUser extends LightningElement {
    
    @track isOpenItem1 = false;
    @track isOpenItem2 = false;
    @track isOpenItem3 = false;
    @track isOpenItem4 = false;
    elections;
    users;

    handleMainItemClick(event) {
        const selectedItem = event.currentTarget.dataset.item;

        // Close all other sub-menus
        this.isOpenItem1 = selectedItem === 'item1';
        this.isOpenItem2 = selectedItem === 'item2';
        this.isOpenItem3 = selectedItem === 'item3';
        this.isOpenItem4 = selectedItem === 'item4';
    }

    connectedCallback(){
        this.elections = false;
        this.users = false;
    }

    updateMessage(event) {
        
        console.log('event.detail.message  == '+event.detail.message );
        
        if(event.detail.message === 'Manage-Elections'){
            this.users = false;
            this.elections = true;
        }
        else if(event.detail.message === 'Manage-Users'){
            this.elections = false;
            this.users = true;
        }
        this.message = event.detail.message;
    }
}
