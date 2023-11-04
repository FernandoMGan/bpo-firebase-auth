// lib/firebase-config.js

import { initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseApiKey = "AIzaSyAIQSb8WzERpk4XQWuI3huEB_z7FCONKBs";
const firebaseAuthDomain = "bpo-change-web.firebaseapp.com";
const firebaseProjectId = "bpo-change-web";
const firebaseStorageBucket = "bpo-change-web.appspot.com";
const firebaseMessagingSenderId = "532125362246";
const firebaseAppId = "1:532125362246:web:1946532793f1a4aa6ec247";

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: firebaseAuthDomain,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessagingSenderId,
  appId: firebaseAppId,
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }