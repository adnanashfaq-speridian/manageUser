import { LightningElement, wire } from 'lwc';
import getUsers from '@salesforce/apex/UserListController.getUsers';

export default class UsersList extends LightningElement {
    users;

    @wire(getUsers)
    wiredUsers({ error, data }) {
        if (data) {
            this.users = data;
        } else if (error) {
            console.error('Error fetching user data:', error);
        }
    }
}
