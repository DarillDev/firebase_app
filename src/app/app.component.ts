import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'firebase-app';

  constructor(
    private readonly fs: AngularFirestore,
    private auth: AngularFireAuth
  ) {}

  public ngOnInit(): void {
    // this.fs
    //   .collection('users')
    //   .get()
    //   .pipe(map((snapshot) => snapshot.docs.map((doc) => doc.data())))
    //   .subscribe((docs) => {
    //     console.log(docs);
    //   });
  }
  public login(): void {
    const googleAuthProvider = new GoogleAuthProvider();
    from(this.auth.signInWithPopup(googleAuthProvider)).subscribe((user) => {
      console.log(user);
    });
  }
  public logout(): void {
    from(this.auth.signOut()).subscribe((res) => {
      console.log(res);
    });
  }
  public getData(): void {
    const usersPostsWithCommentsReg = this.fs.collectionGroup('posts');
    usersPostsWithCommentsReg
      .get()
      .subscribe((querySnapshot) =>
        console.log(querySnapshot.docs.map((doc) => doc.data()))
      );
  }
  public async editUser(): Promise<void> {
    from(
      this.fs.doc('users/jshj2T4CReSfotMtQmLyNqU2iLD2').update({ name: 'Azis' })
    ).subscribe(
      (res) => {},
      (err) => {
        console.table(err);
      }
    );
  }
}
