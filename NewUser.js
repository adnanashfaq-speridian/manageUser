// userCreationScreen.js
import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import USER_OBJECT from '@salesforce/schema/User';

export default class NewUser extends LightningElement {
    @track firstName = '';
    @track lastName = '';

    handleFirstNameChange(event) {
        this.firstName = event.target.value;
    }

    handleLastNameChange(event) {
        this.lastName = event.target.value;
    }

    async createUser() {
        const fields = {
            FirstName: this.firstName,
            LastName: this.lastName,
            // Add more fields as needed (Email, Username, Password, etc.)
        };

        const recordInput = { apiName: USER_OBJECT.objectApiName, fields };
        try {
            await createRecord(recordInput);
            // Reset input fields after successful user creation
            this.firstName = '';
            this.lastName = '';
            // Optionally, show a success message
            // toastMessage('User created successfully', 'success');
        } catch (error) {
            // Handle any errors
            console.error('Error creating user:', error);
            // Optionally, show an error message
            // toastMessage('Error creating user', 'error');
        }
    }
}
