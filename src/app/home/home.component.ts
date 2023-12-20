import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  apiLoaded = false; 

  videoId1='chb3ZY8YrFo';
  videoId2='UnOUEePeVfM';
  count: number = 0;
  accuratecount: number = 0;
  revenuecount: number = 0;
  counter: number = 0;
  activeIndex: number = -1;


  constructor(private router: Router) {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateToFoodCategory(category: string): void {
    this.router.navigate(['/food-categories', category]);
    this.scrollToTop();
  }


  ngAfterViewInit(): void {
    AOS.init(
      {
        offset: 120,
        duration: 700,
      }
    );
    console.log("animation");
  }
  //services
  services = [
  {image: '../../assets/sector/turnkey.jpg',caption:'Turnkey project setup', content:'We handle every aspect of factory design under one roof, encompassing Process, Building and Civil, Utilities, Electrical and Automation, Quality Assurance, and more.Our designs adhere to global standards for food safety and hygienic engineering.From the ground up, we construct new factories to the highest standards, ensuring that your food facility is not just built, but built to be a source of pride.' },
  { image: '../../assets/sector/project-report.jpg', caption:'Detailed Project Report', content: 'A Detailed Project Report (DPR) for a food business typically includes comprehensive information about the proposed venture. Our hand on experienced on preparation of report with expertise, financial experts ,engg team, data analyst leads to success' },
  { image: '../../assets/sector/new-product.jpg', caption:'New Product Development', content: 'Core expertise with the product development as well as standardization according to the FSSAI Norms we developed innovative products bt nurturing the idea in mind of client. 20 + years experienced food technologist team continuously upgrade their knowledge and form products that have match the expectation of client.' },
  ];

  //home
  slides = [
    { image: '../../assets/Home/homepage1.jpeg', name:'Leading Food Consultant in India' },
    { image: '../../assets/Home/processing line.png', },
    { image: '../../assets/Home/homeimg2.jpg', },
    { image: '../../assets/sector/img3.avif', },
    { image: '../../assets/Home-Section/home1.jpeg', },
  ];

  //sectors
  slides1: any[] = [
    {
      title: 'Fruits-&-Vegetable',
      imageUrl: '../../assets/sector/fruits & vegetable.png',
      text: 'Fruits & Vegetables',
    },
    {
      title: 'Cereal-Products',
      imageUrl: '../../assets/sector/cereals.jpg',
      text: 'Cereal Products',
    },
    {
      title: 'Functional-Food',
      imageUrl: '../../assets/sector/Standardised Food Product.jpg',
      text: 'Functional Food',
    },
    {
      title: 'Confectionary-Products',
      imageUrl: '../../assets/sector/Cocoa.png',
      text: 'Confectionary Products',
    },
  ]
  slides2: any[] = [
    {
      title: 'Meat-Polutry',
      imageUrl: '../../assets/sector/MeatPolutry.png',
      text: 'Meat Polutry',
    },
    {
      title: 'Milk-&-Dairy-Products',
      imageUrl: '../../assets/sector/Dairy.png',
      text: 'Milk & Dairy Products',
    },
    {
      title: 'Instant-Premixes',
      imageUrl: '../../assets/sector/instant-primixes.jpg',
      text: 'Instant Premixes',
    },
    {
      title: 'Frozen-Products',
      imageUrl: '../../assets/sector/frozen.jpg',
      text: 'Frozen Products',
    },
  ]
  slides3: any[] = [
    {
      title: 'Beverages-&-Packaged-drinking-water',
      imageUrl: '../../assets/sector/Beverages.jpg',
      text: 'Beverages & Packaged Dinking Water',

    },
    {
      title: 'Spices-&-Condiments',
      imageUrl: '../../assets/sector/Salts, spices, soups, sauces, salads and protein products.jpg',
      text: 'Spices & Condiments',
    },
    {
      title: 'Bakery-products',
      imageUrl: '../../assets/sector/bakery.jpg',
      text: 'Bakery Products',
    },
    {
      title: 'Sweeteners',
      imageUrl: '../../assets/sector/Sweetners.jpg',
      text: 'Sweeteners',
    },
  ]
  slides4: any[] = [
    {
      title: 'Fish-products',
      imageUrl: '../../assets/sector/fish.jpg',
      text: 'Fish Products',
    },
    {
      title: 'Eggs-products',
      imageUrl: '../../assets/sector/eggs.jpg',
      text: 'Eggs Products',
    },
    {
      title: 'Snacks-products',
      imageUrl: '../../assets/sector/INDIAN SNACKS & SAVOURIES PRODUCTS.jpg',
      text: 'Snacks Products',
    },
    {
      title: 'Fats-&-oils',
      imageUrl: '../../assets/sector/oil.jpg',
      text: 'Fats & Oil',
    },
  ]
  //
  items1: any[] = [
    {
      imageUrl: '../../assets/clients/q.png',

    },
    {
      imageUrl: '../../assets/clients/b.png',
    },
    {
      imageUrl: '../../assets/clients/c.png',
    },
    {
      imageUrl: '../../assets/clients/d.png',
    },
    {
      imageUrl: '../../assets/clients/e.png',
    },
    {
      imageUrl: '../../assets/clients/f.jpg',
    },
  ]
  items2: any[] = [
    {
      imageUrl: '../../assets/clients/g.png',
    },
    {
      imageUrl: '../../assets/clients/h.png',
    },
    {
      imageUrl: '../../assets/clients/i.png',
    },
    {
      imageUrl: '../../assets/clients/j.png',
    },
    {
      imageUrl: '../../assets/clients/k.png',
    },
    {
      imageUrl: '../../assets/clients/l.png',

    },
  ]
  items3: any[] = [
    {
      imageUrl: '../../assets/clients/m.jpg',
    },
    {
      imageUrl: '../../assets/clients/p.png',

    },
    {
      imageUrl: '../../assets/clients/n.jpg',
    },
    {
      imageUrl: '../../assets/clients/o.png',
    },
    {
      imageUrl: '../../assets/clients/a.png',
    },
    {
      imageUrl: '../../assets/clients/r.png',
    },
  ]
  items4: any[] = [
    {
      imageUrl: '../../assets/clientsImg/cc.jpg',
    },
    {
      imageUrl: '../../assets/clientsImg/mm.png',

    },
    {
      imageUrl: '../../assets/clientsImg/t.jpg',
    },
    {
      imageUrl: '../../assets/clientsImg/x.png',
    },
    {
      imageUrl: '../../assets/clientsImg/yu.jpg',
    },
    {
      imageUrl: '../../assets/clients/f.jpg',
    },
  ]
  items5: any[] = [
    {
      imageUrl: '../../assets/clientsImg/df.png',
    },
    {
      imageUrl: '../../assets/clientsImg/kk.png',

    },
    {
      imageUrl: '../../assets/clientsImg/pp.png',
    },
    {
      imageUrl: '../../assets/clientsImg/s.png',
    },
    {
      imageUrl: '../../assets/clientsImg/w.png',
    },
    {
      imageUrl: '../../assets/clientsImg/y.png',
    },
  ]

  faqs = [
    {
      question: "How can I start my food business?",
      answers: ["We provide end to end handholding services for food start-up. Our 12 Months handholding services will bring your dream into reality to know more."]
    },
    {
      question: "Where will I get government subsidies Information?",
      answers: ["There are various state and central government subsidies available in India under various scheme for setting up food processing business. MoFPI, NHB, NABARD, APEDA. SFAC  are few of the agencies provides subsidies under various schemes to know more."]
    },
    {
      question: "How To Chose a Food Product?",
      answers: ["We have very methodological approach for selecting a right product considering your investment, location, market potential etc. to schedule a free call with our expert."]
    },
    {
      question: "What are the government license required for food production?",
      answers: ["There are various licenses and government regulation for setting up food factory FSSAI, Pollution Control Board, Legal Meterology are few of them to know more"]
    },
    {
      question: "How can I select Best Packaging for my product?",
      answers: ["We have packaging and branding team who will help you to design right packaging for your product. We also help you to verify your label as per FSSAI requirements. Reach to us."]
    },
    {
      question: "How can I formulate my product?",
      answers: ["We have dedicated product development team which will help you to formulate product of your choice by selecting right ingredients to book a virtual meeting with our NPD team."]
    },
    {
      question: "My food business is not profitable what should I do?",
      answers: ["With our 15+ years of experience we help you to understand various aspects of food industry. We will audit your business and make some recommendation which may help you to make your business profitable to book an appointment with our expert."]
    },
    {
      question: "How Can I check Feasibility of my Idea?",
      answers: ["We can prepare and present a detailed feasibility study report of your shortlisted product before investing in business which will give you clear roadmap to go ahead."]
    },
    {
      question: "How to reduce cost in food business?",
      answers: ["There are various means where we can save. Cost of raw material, Cost of Utilities, Labour Cost, Sales and Marketing Cost. Lets undertsand where you are losing your money. We will help you by auditing your processes and systems to save your cost to know more"]
    },
    {
      question: "We are not able to scale-up ?",
      answers: ["To scale up systems and processing needs to be standardized in todays scenario there are various softwares like ERP, CRM, Real Time Tracking are available to standarize systems and process. Our tech team can help you to chose right solution for scaling up your business."]
    },

  ];
  companies = [
    {
      iconClass: 'fas fa-taxi',
      title: 'Process Oriented',
      description: 'We are following process to get deliver things in a time.'
    },
    {
      iconClass: 'fas fa-map-signs',
      title: 'Experienced Team',
      description: 'Have a great experience team who already work on various projects'
    },
  ]
  getDelay(index: number): string {
    const delays = ['.1s', '.3s', '.5s', '.9s', '.10s', '.1s'];
    return delays[index] || '.1s';
  }
  toggleAccordion(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = -1; 
    } else {
      this.activeIndex = index; 
    }
  }
}

