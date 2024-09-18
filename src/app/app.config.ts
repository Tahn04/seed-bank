import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

const firebaseConfig = {
  apiKey: "AIzaSyC49Ezzg2wAmaJhGrdTpxO8rS2OTDZHRxw",
  authDomain: "seed-bank-14f3a.firebaseapp.com",
  projectId: "seed-bank-14f3a",
  storageBucket: "seed-bank-14f3a.appspot.com",
  messagingSenderId: "743949896154",
  appId: "1:743949896154:web:e0090344d0e16677e118e3"
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(), 
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
  ]
};
