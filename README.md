# 🚑 Emergency Ambulance Booking System

A smart, responsive emergency ambulance management system designed to assist clients during urgent medical situations by helping them book and track ambulances from nearby sources.

---

## 🔥 Concept

This system operates on two ends:
- **Customer**: Initiates ambulance requests.
- **Receiver**: Manages incoming requests and dispatches ambulances based on availability and type.

### 🎯 Objective:
To streamline the ambulance request process and provide appropriate help—government, private, or hospital-based—quickly and efficiently.

---

## 👥 Roles

### 🔸 Customer
- Book ambulances based on availability.
- Choose between:
  - **Hospital**: Nearby hospitals with available ambulances are listed.
  - **Government**: Auto-location and direct call to nearby government services.
  - **Private**: Mobile numbers and details of registered private ambulance drivers.
- Track ambulance once allotted.
- Limited tracking for private ambulances not registered in the system.

### 🔸 Receiver
- Receives emergency requests.
- Checks availability and type of ambulance.
- Dispatches suitable ambulance based on user input and situation type.

---

## ✨ Features

1. 🚨 Intelligent advice for non-critical conditions using AI-powered symptom checker (quiz-based).
2. 🧑‍⚕️ Signed-in users can access medical checkup services.
3. 🚐 Ambulance drivers can register themselves in the private ambulance pool.
4. 📊 Users can view their medical checkup history.
5. 🤖 AI-powered emergency response tips and guidelines.
6. 🧯 Educational resources on how to act in hazardous/emergency scenarios.
7. 📍 Real-time ambulance tracking (for all except unlisted private ambulances).
8. 💸 Rate filter for private ambulance listings based on urgency type.

---

## 🧪 Working Flow

### Step-by-step Booking Process:

1. **Select Ambulance Type**:
   - `Government`
   - `Private`
   - `Hospital`

2. **Depending on the Type**:
   - **Hospital**:
     - Lists nearby hospitals with available ambulances and contact info.
   - **Government**:
     - Accesses user location.
     - Auto-connects to the nearest government office.
   - **Private**:
     - Accesses user location and patient's condition.
     - Displays a list of private ambulance drivers with filters (urgency, rate).
     - Allows driver selection.

3. **Tracking**:
   - Customers are notified once an ambulance is allotted.
   - Tracking is available for listed ambulances only.

---

## 🖌️ Theme & UI

- Color Scheme: `Yellow`, `Orange`, `Red`, and `White`
- Clean, accessible interface designed for emergency use with quick access options.

---

## 🛠️ Tech Stack (suggested if applicable)
- **Frontend**: React 
- **Backend**:  Firebase
- **Database**: MongoDB
- **Maps & Location**: Google Maps API

---

## Steps for using the app
1. Install
   -Node.js from
   -Android Studio from
---
2. In Android Studio open SDK Manager in Settings, select Show Packgages from bottom-right corner and check following boxes:
   - In SDK Platforms:
     - **Android 15 (VanillaIceCream)** in which check for 
        **Android SDK Platform 35** and **Intel x86 Atom_64 System Image** or **Google APIs Intel x86 Atom System Image**
   - In SDK Tools:
       - **Android SDK Build Tools 34**
       - **Android SDK Command-line Tools(latest)**
       - **Android Emulator**
       - **Android Emulator hypervisor driver(installer)**
       - **Android SDK Platform Tools**
       - **Google Play Licensing Libraries**
         
    If not installed check these boxes and install them.
---
3. Run the following command in command prompt(Run as Administrator)
   ```bash
   choco install -y nodejs-lts microsoft-openjdk17
   ```
---
4. Run following commands in your directory
   ```bash
   npx @react-native-community/cli init ambulancetrackingsystem
   ```
---
5. Open Android Studio and open Device Manager choose your connected device as device to be run in emulator.
---
6. Open this folder in VS Code and run following command in terminal for android devices else replace 'android' with 'ios'.
   ```bash
   npx react-native run-android
   ```
  This will install all required apps/folders for running this project on your device. Once completed will open your app in your device

---

## 🚀 Future Improvements
- Multi-language support
- Emergency SOS button integration
- AI-based predictive ambulance allocation
- Integration with local emergency response centers

---

