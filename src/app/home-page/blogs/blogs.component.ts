import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  blogs = [
    { link:'https://www.axisbank.com/progress-with-us-articles/money-matters/save-invest/build-your-retirement-corpus-stress-free-with-nps' ,description: 'How to build a robust retirement corpus with NPS?', image: './assets/blogs/Blog1.jpg' },
    {link:'https://www.axisbank.com/progress-with-us-articles/money-matters/borrow/how-rbi-repo-rate-impacts-your-home-loan-emi', description: 'How a change in RBI’s repo rate impacts your home loan EMIs?', image: './assets/blogs/Blog2.jpg' },
    {link:'https://www.axisbank.com/progress-with-us-articles/money-matters/borrow/3-tax-benefits-of-taking-a-personal-loan', description: 'Top 3 tax benefits of Personal Loans', image: './assets/blogs/Blog3.jpg' },
    
    {link:'https://www.axisbank.com/progress-with-us/money-matters/save-invest/tips-to-earn-maximum-interest-on-ppf-account',  description: 'Tips to earn maximum interest on PPF', image: './assets/blogs/Blog4.jpg' },
    {link:'https://www.axisbank.com/progress-with-us-articles/managing-credit/why-keeping-your-credit-card-active-is-important',  description: 'Why keeping your Credit Card active is important', image: './assets/blogs/Blog5.jpg' },
    {link:'https://www.axisbank.com/progress-with-us-articles/other/create-a-home-gym-to-accelerate-your-fitness-journey', description: 'Stay fit with your personal home gym', image: './assets/blogs/Blog6.jpg' },
    // Add more blogs
  ];
}
