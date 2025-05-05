import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone : true,
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
  imports : [CommonModule]
})
export class DoctorsComponent {
  doctors = [
    {
      name: 'Dr. Arjun Reddy',
      speciality: 'Cardiologist',
      qualification: 'MBBS, MD, DM (Cardiology)',
      experience: '15 years',
      image: '/assets/doctors/doctor1.jpg'
    },
    {
      name: 'Dr. Priya Sharma',
      speciality: 'Neurologist',
      qualification: 'MBBS, DM (Neurology)',
      experience: '10 years',
      image: '/assets/doctors/doctor2.jpg'
    },
    {
      name: 'Dr. Suresh Babu',
      speciality: 'Orthopedic Surgeon',
      qualification: 'MBBS, MS (Ortho)',
      experience: '12 years',
      image: '/assets/doctors/doctor3.jpg'
    }
  ];
}
