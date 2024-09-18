import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Seed } from './seed';

@Injectable({
  providedIn: 'root',
})
export class SeedService {
  constructor(private firestore: Firestore) {}

  getSeeds(): Observable<Seed[]> {
    const seedsCollection = collection(this.firestore, 'seeds');
    return collectionData(seedsCollection, { idField: 'id' }); // `idField` adds the document ID
  }

  addSeed(seed: Seed): Promise<any> {
    const seedsCollection = collection(this.firestore, 'seeds');
    return addDoc(seedsCollection, seed);
  }
}

// addTodo(text: string): Observable<string> {
//   const todoToCreate = { text, isCompleted: false };
//   const promise = addDoc(this.todosCollection, todoToCreate).then(
//     (response) => response.id
//   );
//   return from(promise);
// }
