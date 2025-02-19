# 🖼️ Image-Caption Matcher Project

## 📌 Overview

The **Image-Caption Matcher Project** is a decentralized application (**dApp**) designed to validate how well an image matches a textual description using **Artificial Intelligence (AI)**. This project consists of two main components:

1️⃣ **idapp** - The iExec dApp that runs inside a **Confidential Computing enclave**, ensuring privacy-preserving AI computations.  
2️⃣ **front** - A front-end application that interacts with the deployed iExec dApp, providing an intuitive interface for users to submit images and descriptions for evaluation.

By leveraging **iExec's decentralized computing infrastructure**, this project ensures **secure, private, and verifiable AI processing**.

---

## 🧠 **AI-Powered Image Matching**

This project integrates **AI-powered image-text retrieval** using the **BLIP model** (Bootstrapped Language-Image Pretraining). The BLIP model is designed for **understanding and matching images with textual descriptions**.

- Given an image and a description, the model computes a **similarity score** between **0 and 100**, where **100** means a perfect match.
- The model runs inside a **Trusted Execution Environment (TEE)** to ensure **data confidentiality**.

---

## 🔗 **Integration with iExec Stack**

The **iExec stack** is used to deploy and execute the AI model in a **confidential and decentralized manner**. iExec provides a **secure enclave-based execution** environment, ensuring that:

✅ Images and descriptions remain **private** throughout processing.  
✅ The AI model runs in a **TEE-powered SGX enclave**.  
✅ Computation is **verifiable**, meaning results cannot be tampered with.  
✅ Users can interact with the AI model via **blockchain-based execution requests**.

### **How iExec Powers this Project**
- The **idapp** is deployed on iExec as an **SGX-secured AI model**.
- The **front** allows users to submit requests to the dApp via blockchain transactions.
- All computations occur inside a **secure enclave**, preventing unauthorized access to sensitive data.

---

## 🚀 **How It Works**

1️⃣ **User uploads an image and description** via the **front-end application**.  
2️⃣ The front-end **submits the request** to the deployed iExec **idapp**.  
3️⃣ The **AI model inside the iExec enclave** computes the **similarity score**.  
4️⃣ The **computed result** is returned to the user securely.  

---

## 🏗️ **Deployment and Usage**

### 1️⃣ **Deploying the iExec dApp (idapp)**
Follow the steps in idapp/README.md to:  
- Build the **SGX-compatible** Docker image  
- Deploy the **idapp** on the **iExec decentralized cloud**  
- Run the AI model securely inside an **enclave**  

Follow the steps in front/README.md to: 
- Build and run the **front end** application
---

## 📁 **Project Structure**
idapp/   # The iExec dApp running in an enclave (TEE)  
├── `src/` # AI model execution and processing logic  
├── `Dockerfile` # Containerization for SGX-enabled execution  
├── `sconify.sh` # Script to make the image compatible with iExec SGX 
├── `README.md`  # Instructions for deploying the dApp on iExec  

front/   # Front-end interface for users  
├── `src/` # Web application logic  
├── `README.md`  # Instructions for setting up and using the front-end  


## 📖 **Further Reading**
- [iExec Confidential Computing](https://protocol.docs.iex.ec/for-developers/confidential-computing/create-your-first-sgx-app)  
- [BLIP Model on Hugging Face](https://huggingface.co/docs/transformers/en/model_doc/blip)  
- [Intel SGX Trusted Execution Environments](https://www.intel.com/content/www/us/en/architecture-and-technology/software-guard-extensions.html)  

---

## 🤝 **Contributing**
Feel free to contribute to the project!  
- Open issues for **bug reports or feature requests**.  
- Submit **pull requests** with improvements or fixes.  

🚀 **Join us in building the future of decentralized, AI-powered confidential computing!**
