import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St',
    phone: '555-1234',
  };

  profileForm!: FormGroup;
  editing = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', Validators.required],
    });

    this.profileForm.setValue({
      name: '',
      email: '',
      address: '',
      phone: ''

    })
  }

  get formControls() {
    return this.profileForm.controls;
  }

  editProfile(): void {
    this.editing = true;
  }

  saveProfile(): void {
    if (this.profileForm.valid) {
      this.user.name = this.profileForm.value.name;
      this.user.email = this.profileForm.value.email;
      this.user.address = this.profileForm.value.address;
      this.user.phone = this.profileForm.value.phone;

      this.editing = false;
    }
  }
}
