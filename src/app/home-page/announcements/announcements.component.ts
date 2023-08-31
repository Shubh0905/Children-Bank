import { Component } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent {
  announcements = [
    {link:'123.com',
    description: 'Checkout our newly launched Credit Cards'},
    {link:'#',
    description: 'Terms and Conditions Updated for our Loan Services. Click here to review it'},
    {link:'#',
    description:  'RBI revises its repo rates. Click here to check how it affects you'},
    {link:'#',
    description: 'Interest Rate revised for the Fixed Deposit. Click here to checkout'},
    {link:'#',
    description: 'Change of our leaders. CLick here to check it.'},
    {link:'#',
    description: 'New Feature added to calculate your taxes'}    
    // Add more announcements
  ];
}
