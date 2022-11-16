import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProfileImg } from 'src/app/models/profileImg-model';

@Component({
  selector: 'resell-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls: ['./profile-img.component.css']
})
export class ProfileImgComponent implements OnInit {

  images: ProfileImg[] = [
    {
      url: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1668603859~exp=1668604459~hmac=cbc6871d5f866e5e714879e432ee7aa71aa2ac893634c00acb8d1e7aeaf393dd'
    },
    {
      url: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1668603909~exp=1668604509~hmac=da21a951d28a7e3b520c583cb91cd6b38ee077a0557341c24c942a7e8c536bb5'
    },
    {
      url: 'https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?w=740&t=st=1668603931~exp=1668604531~hmac=c321e25c2b1468d0579bb0dbf758110d485acd532367047a0ca90cbb849cf2cb'
    },
    {
      url: 'https://img.freepik.com/free-psd/3d-illustration-person-with-rainbow-sunglasses_23-2149436196.jpg?w=740&t=st=1668603947~exp=1668604547~hmac=2fe93cc8a1fb536b03f79bc0ceaab451f0d345b268bf98b85417db2d38d2e01b'
    },
    {
      url: 'https://img.freepik.com/free-psd/3d-illustration-person_23-2149436182.jpg?w=740&t=st=1668603969~exp=1668604569~hmac=e34b9e5aee061b10c5f9630325095bed837075b7859149ac47bee8869b5926cc'
    },
    {
      url: 'https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=740&t=st=1668603988~exp=1668604588~hmac=d0bb57b2a41f75cbfe831bc39eb4d8b3a00905483d812293f2815b2bdc107d80'
    }
  ]

  constructor(
    private _dialogRef: MatDialogRef<ProfileImgComponent>
  ) { }

  ngOnInit(): void {
  }

  imageSelected(image: ProfileImg): void {
    console.log(image);
    this._dialogRef.close(image);
  }

}
