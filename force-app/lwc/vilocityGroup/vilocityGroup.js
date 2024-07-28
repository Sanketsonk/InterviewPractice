import { LightningElement, track } from 'lwc';

export default class StudentRegistrationForm extends LightningElement {
    @track firstName = '';
    @track lastName = '';
    @track email = '';
    @track phoneNumber = '';

    handleInputChange(event) {
        const field = event.target.dataset.id;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        } else if (field === 'email') {
            this.email = event.target.value;
        } else if (field === 'phoneNumber') {
            this.phoneNumber = event.target.value;
        }
    }

    handleSubmit() {
        const studentDetails = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phoneNumber: this.phoneNumber
        };
        
        // Perform further actions with the studentDetails object
        console.log('Student Details: ', JSON.stringify(studentDetails));
        
        // You can also dispatch a custom event with the student details
        const event = new CustomEvent('formsubmit', { detail: studentDetails });
        this.dispatchEvent(event);
    }
}