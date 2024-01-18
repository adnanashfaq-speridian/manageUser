import { LightningElement, track } from 'lwc';

    export default class TABlwc extends LightningElement {
        @track isTab1Active = true;
        @track isTab2Active = false;
        @track isTab3Active = false;


        value = 'option1';

        options = [
            { label: 'Run-off Elections', value: 'Run-off-Elections' },
            { label: 'Re-run Elections', value: 'Re-run-Elections' },
        ];

        handleChange(event) {
            const selectedOption = event.detail.value;
            console.log('Option selected with value: ' + selectedOption);
        }

        handleTabChange(event) {
            // Reset tab activation status
            this.isTab1Active = false;
            this.isTab2Active = false;
            this.isTab3Active = false;

            // Activate the selected tab
            if (event.target.label === 'Election Details') {
                this.isTab1Active = true;
            } else if (event.target.label === 'Voters') {
                this.isTab2Active = true;
            } else if (event.target.label === 'Notice and Instructions') {
                this.isTab3Active = true;
            }
        }
    }
