# KutumbAI &#x1FA94;
***India's Personal Family Intelligence Assistant***

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=${KUTUMBAI_REPO_URL})

KutumbAI is a digital platform designed to bridge the financial, health, and career connectivity gap for the 800+ million rural Indians currently underserved by the digital revolution. By transforming complex bureaucratic and financial systems into simple, conversational interactions, KutumbAI empowers families to manage their lives with confidence.

---

## 🎯 The Problem & Vision
While the UPI revolution connected India transactionally, rural families still struggle to navigate complex government healthcare schemes, discover career up-skilling opportunities, and securely track informal loans or family savings.

**KutumbAI** acts as their highly personalized, context-aware digital family advisor—simplifying these systems through an intuitive, multilingual interface.

## 🚀 Current Prototype (Vercel Demo)
This repository hosts the **Early-Stage Frontend Prototype** built to demonstrate the core user experience and AI functionality. It is completely static on the frontend with a serverless Vercel proxy.

**What is currently working in this demo:**
*   **Manual Onboarding**: Users input family size, location, occupation, and financial statements. 
*   **Smart Reminders**: Automatically calculates financial goals and scans the exact family profile to present child vaccination schedules and loan repayment reminders.
*   **Generative AI Symptom Checker**: Users input medical symptoms, and the system triages them, recommending local clinics/hospitals near their specified location.
*   **Occupation Advisor**: Specialized dashboards for Farmers, Daily Wage Labourers, and Small Business owners to receive curated AI business/farming advice.
*   **Multilingual Chat**: A globally scoped generative AI chatbot that dynamically detects the input language (Hindi, Tamil, English, etc.) and offers conversational advice on government schemes, savings, or education.

**Tech Stack (Demo):** Vanilla HTML/CSS, JavaScript (`localStorage`), Vercel Serverless Functions (`/api`), Google Gemini 3.1 Flash Lite API.

---

## 🏗️ The Future: Production Architecture
The prototype demonstrates the *“What”*. The final application will execute the *“How”*—built on a robust, highly secure, and deeply integrated architecture powered entirely by the **Microsoft Azure** ecosystem.

### Key Upgrades for the Final Application:

1. **Seamless, Zero-Type Onboarding via DPI**
   *   *(Demo)* Users manually type all details.
   *   *(Production)* Powered by **Azure API Management**, KutumbAI will securely integrate with India's Digital Public Infrastructure (DPI) like Aadhaar, PM Kisan databases, and secure Bank APIs (AA framework). This will instantly generate the complete family profile without the user typing a word.

2. **Enterprise-Grade AI & Data Privacy**
   *   *(Demo)* Uses raw API requests to public generative models.
   *   *(Production)* Rebuilt on **Azure OpenAI Service** guaranteeing enterprise-level privacy, so sensitive medical and financial data is strictly partitioned and never used for model training.

3. **Cloud Synchronization & Push Notifications**
   *   *(Demo)* Reminders are stored locally in the browser (`localStorage`).
   *   *(Production)* All data, goals, and tasks will synchronize securely across devices using **Azure Cosmos DB**. Event-driven **Azure Functions** will send automated, life-saving push notifications and basic SMS alerts (for non-smartphones).

4. **Location Intelligence & Telemedicine**
   *   *(Demo)* Recommends generalized hospitals via LLM text string.
   *   *(Production)* Integrates **Azure Maps** to calculate exact real-time routing to Ayushman Bharat-approved government hospitals and local Primary Health Centres (PHCs).

5. **Voice-First Accessibility**
   *   *(Demo)* Users must read and type queries textually.
   *   *(Production)* For illiterate or print-disabled users, **Azure AI Speech Services** will power real-time Speech-to-Text and Text-to-Speech in native rural dialects, allowing natural voice conversations with the Assistant.

---

## 💻 Local Setup (To Run The Prototype)

1. Clone the repository: `git clone https://github.com/YOUR_GITHUB_USERNAME/kutumbai.git`
2. Change into the directory: `cd kutumbai`
3. Since the API proxy requires Vercel to run, install the Vercel CLI globally: `npm i -g vercel`
4. Set up your local Google Gemini API Key. Ask the developer team for access and place it in a `.env` file like so:
   ```
   GEMINI_API_KEY=AIzaSy...
   ```
5. Run the local development proxy: `vercel dev`
6. Open your browser to `http://localhost:3000`

---
*Built to empower the next billion users.*
