import { LightningElement , track} from 'lwc';

export default class SidebarMenu extends LightningElement {

    items = [

        {
            label: 'Dashboards',
            name: 'Dashboards',
            expanded: false,
            
        }, 

        {
            label: 'Manage Elections',
            name: 'Manage-Elections',
            expanded: false,
            
        }, 

        {
            label: 'Manage Users',
            name: 'Manage-Users',
            expanded: false,
            
        }, 

        {
            label: 'Reports',
            name: 'Reports',
            expanded: false,
            items: [
                {
                    label: 'Participation Report',
                    name: 'Participation-Report',
                },

                {
                    label: 'Vote Origin Report',
                    name: 'Vote-Origin-Report',
                },
            ],
        },

        {
            label: 'Change History',
            name: 'Change-History',
            expanded: false,
            items: [
                {
                    label: 'Internal Users',
                    name: 'Internal-Users',
                },

                {
                    label: 'Elections',
                    name: 'Elections',
                },
                {
                    label: 'Notice and Instructions',
                    name: 'Notice-and-Instructions',
                },

                {
                    label: 'Telephonic Phrases',
                    name: 'Telephonic-Phrases',
                },



            ],
        },

        {
            label: 'Manage Settings',
            name: 'Manage-Settings',
            expanded: false,
            items: [
                {
                    label: 'Telephonic Phrases',
                    name: 'Telephonic-Phrases',
                },

                {
                    label: 'Notice and Instructions',
                    name: 'Notice-and-Instructions',
                },
               

            ],
        },


    ];
 
    menuItem(evt) {
        console.log('in the event' + evt.detail.name);
        var selection = evt.detail.name;
        this.dispatchEvent(new CustomEvent('menuitem', {
            detail: {
                message: selection
            }
        }));
    }
}
