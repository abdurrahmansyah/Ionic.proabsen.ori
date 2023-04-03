import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';
import { KaryawanData } from 'src/app/services/global.service';

export interface Item { name: string; }

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private authService: AuthService,
    public auth: AngularFireAuth,
    private afs: AngularFirestore,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.loginWithGoogleAuth(); 
    // this.authService.loginRedirect();
    // this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  addDataRandom(){
    var karyawanData: KaryawanData = { idKaryawan: "080989", namaKaryawan: "Nur Ridho A", bagian: "Bagian", jabatan: "Jabatan", jamKerja: "Jam Kerja", isAdmin: true, email: '', displayNameEmail: '', photoURL: '' };

    this.firebaseService.karyawanDataListCollection.add(karyawanData);
  }
}
