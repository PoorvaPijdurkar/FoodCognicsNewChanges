import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      education: ['', Validators.required],
      resume: [null, Validators.required]
    });
  }

  //services
  services = [
    { image: '../../assets/sector/skill.jpg', caption: 'Skill Development', content: 'Consultancy services are essential to skill development because they provide customised training plans and strategic direction. To maximise workforce skills, we pinpoint specific skill shortages inside organisations, create learning courses that are specifically targeted at those gaps, and offer expert guidance. Using consulting services to support skill development guarantees a tailored strategy, matching training programmes to the goals of the company for increased productivity and competitiveness.' },
    { image: '../../assets/sector/mentor.jpg', caption: 'Mentorship Programs', content: ' Consultancy services often facilitate mentorship programs, connecting experienced mentors with individuals seeking professional guidance. These programs offer personalized advice, skill transfer, and valuable insights, fostering a supportive learning environment. Through consultancy-driven mentorship, organizations can enhance employee development, boost morale, and cultivate a culture of continuous learning and collaboration.' },
    { image: '../../assets/sector/industry.jpg', caption: 'Industry Exposure', content: 'Consultancy services offer valuable industry exposure by providing clients with insights into market trends, best practices, and competitive landscapes. Through strategic analysis and market research, these services enable businesses to stay abreast of industry developments, enhancing their adaptability and decision-making. This exposure equips organizations with the knowledge needed to navigate challenges, identify opportunities, and maintain a competitive edge in their respective sectors' },
    { image: '../../assets/sector/technical.jpg', caption: 'Technical Training', content: 'Technical training involves imparting specialized knowledge and skills related to specific technologies, tools, or methodologies. These programs equip individuals with the practical know-how needed to excel in technical roles, fostering proficiency in areas such as programming, data analysis, or system administration. Technical training is essential for staying abreast of industry advancements and ensuring workforce competence in rapidly evolving technological landscapes.' },
    { image: '../../assets/sector/education.jpg', caption: 'Collaboration with Educational Institutions' , content:'Consulting services frequently help organisations and academic institutions work together to close the knowledge gap between what is taught in the classroom and what employers need. These services collaborate with colleges or training facilities to design specialised curricula that correspond with current business trends and give students real-world experience and transferable skills.' },
  ];

  onSubmit(): void {
    console.log('Form submitted:', this.form.value);
  }
}

