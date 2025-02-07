# Image-Caption Matcher dApp

The **Image-Caption Matcher dApp** is a **Confidential Computing application** that verifies whether an uploaded image matches a given textual description.  
It leverages **iExec's Trusted Execution Environments (TEE)** and the **BLIP model** from Hugging Face for secure, private computation.

## 🚀 Features
- **Confidential Computing** ensures that images remain private and are processed securely.
- **Decentralized Execution** using the iExec network.
- **BLIP model-based similarity scoring** to check how well an image matches its textual description.

---

## 🏗 **Run the dApp Locally**

### 1️⃣ **Set Up Your Development Environment**
Follow the iExec guide for setting up a local dApp:  
🔗 [Your First iExec App](https://protocol.docs.iex.ec/for-developers/your-first-app)

### 2️⃣ **Build and Run the dApp Locally**
1. **Build the docker image non-tee**:

   ```sh  
   docker build . -t image-caption-matcher  
    ```
2. **Prepare input file**:  
   Create a folder called `iexec_in` and put inside a **binary zip file** containing a picture in the root of the zip file called `image`.  

   **Commands to Achieve This:**  

   1️⃣ Ensure you have an image file in the same directory and rename it to `image` (without an extension).  

   ```sh  
   mv yourimage.png image  # Change 'yourimage.png' to your actual image file  
    ```
   2️⃣ Create the ZIP file with a name that starts with `0x` and contains the binary image inside:  

   ```sh  
   zip -q -X 0xmyzipfile image  
    ```
   3️⃣ Create input folder:  

   ```sh  
   mkdir iexec_in  
    ```
   4️⃣ Move your previously created zip file to `iexec_in` folder:  

   ```sh  
   mv 0xmyzipfile iexec_in/0xmyzipfile  
    ```
3. **Run the dApp in Docker**:  

   ```sh  
   docker run --rm \  
   -v ./iexec_in:/iexec_in \  
   -v ./iexec_out:/iexec_out \  
   -e IEXEC_IN=/iexec_in \  
   -e IEXEC_OUT=/iexec_out \  
   image-caption-matcher "A woman and dog sitting on the beach"  
    ```
---

## 🏗 **Deploy and Run on iExec Stack** 🌍

1️⃣ **Build and Push Non-TEE Image to Docker Hub**  

   ```sh  
   docker build . -t yourdockerhubusername/image-caption-matcher:non-tee  
   docker push yourdockerhubusername/image-caption-matcher:non-tee  
```
2️⃣ **Sconify the Image** (Make it SGX-Enabled)  

   Modify the first three lines in `sconify.sh` to match your DockerHub username:  

   ```sh  
   IMG_NAME=image-caption-matcher  
   IMG_FROM=yourdockerhubusername/${IMG_NAME}:non-tee  
   IMG_TO=yourdockerhubusername/${IMG_NAME}:tee  
```
   Then, run:  

   ```sh  
   ./sconify.sh  
```
3️⃣ **Push the SGX-Enabled Image to Docker Hub**  

   ```sh  
   docker push yourdockerhubusername/image-caption-matcher:tee  
```
4️⃣ **Deploy Your dApp on iExec**  
   Follow the official iExec guide to deploy an SGX-enabled dApp:  
   🔗 [Deploy an SGX App](https://protocol.docs.iex.ec/for-developers/confidential-computing/create-your-first-sgx-app)  

5️⃣ **Publish a dApp Order**  
   Once deployed, you must publish a dApp order to allow usage:  
   🔗 [Manage App Orders](https://protocol.docs.iex.ec/for-developers/advanced/manage-your-apporders)  

---

## 🔐 **Using Protected Data with `@iexec/dataprotector` (Node.js Example)**

To enhance security, you can create **protected datasets** using the `@iexec/dataprotector` SDK. These datasets remain **encrypted** and can only be **decrypted inside the enclave** during computation.

---

### 1️⃣ **Install `@iexec/dataprotector`**
```sh  
npm install @iexec/dataprotector  
```
---

### 2️⃣ **Protect Your Image Data**
This step encrypts your image and stores it securely on iExec.

```javascript  
import { getWeb3Provider, IExecDataProtector } from "@iexec/dataprotector";  
import fs from 'fs/promises';  

async function getImageBinaryData(imagePath) {  
    try {  
        const data = await fs.readFile(imagePath);  
        return new Uint8Array(data);  
    } catch (error) {  
        console.error('Error reading the image:', error);  
    }  
}  

async function protectImageData(imagePath) {  
    const provider = getWeb3Provider('REPLACE_WITH_YOUR_WALLET_PRIVATE_KEY');  
    const client = new IExecDataProtector(provider, { iexecOptions: { smsURL: 'https://sms.scone-debug.v8-bellecour.iex.ec/' } });  

    const binaryData = await getImageBinaryData(imagePath); 

    const data = await client.core.protectData({ data: { image: binaryData } });  

    return data.address;  
}  

protectImageData("./image.png");  
```
---

### 3️⃣ **Grant Access to the dApp**
Once the image is protected, you must **grant access** to an authorized user and app.

```javascript  
async function grantAccess(protectedDataAddress) {  
    const provider = getWeb3Provider('REPLACE_WITH_YOUR_WALLET_PRIVATE_KEY');  
    const client = new IExecDataProtector(provider);  

    const grant = await client.core.grantAccess({  
        protectedData: protectedDataAddress,  
        authorizedUser: 'REPLACE_WITH_REQUESTER_WALLET_ADDRESS',  
        authorizedApp: 'REPLACE_WITH_YOUR_DEPLOYED_DAPP_ADDRESS',  
        numberOfAccess: 100  
    });  

    console.log("Grant Created:", grant);  
}  

grantAccess("0xYourProtectedDataAddress");  
```
---

### 4️⃣ **Execute the dApp with Protected Data**
After granting access, execute the dApp securely inside an enclave.

```javascript  
async function executeDapp(protectedDataAddress) {  
    const provider = getWeb3Provider('REPLACE_WITH_YOUR_WALLET_PRIVATE_KEY');  
    const client = new IExecDataProtector(provider);  

    const execute = await client.core.processProtectedData({  
        protectedData: protectedDataAddress,  
        app: 'REPLACE_WITH_YOUR_DEPLOYED_DAPP_ADDRESS',  
        workerpool: 'debug-v8-learn.main.pools.iexec.eth',  
        args: "A pair of pixelated 8-bit sunglasses, commonly associated with the deal with it meme, floating on a black background."  
    });  

    console.log('Executed successfully:', execute);  
}  

executeDapp("0xYourProtectedDataAddress");  
```
---

### 5️⃣ **Complete Example**
This script **protects the image**, **grants access**, and **executes the dApp** in one flow.

```javascript  
import { getWeb3Provider, IExecDataProtector } from "@iexec/dataprotector";  
import fs from 'fs/promises';  

async function getImageBinaryData(imagePath) {  
    try {  
        const data = await fs.readFile(imagePath);  
        return new Uint8Array(data);  
    } catch (error) {  
        console.error('Error reading the image:', error);  
    }  
}  

const protectAndProcessProtectedData = async () => {  
    const provider = getWeb3Provider('REPLACE_WITH_YOUR_WALLET_PRIVATE_KEY');  
    const client = new IExecDataProtector(provider, { iexecOptions: { smsURL: 'https://sms.scone-debug.v8-bellecour.iex.ec/' } });  

    const imagePath = './image.png';  
    const binaryData = await getImageBinaryData(imagePath); 

    const data = await client.core.protectData({ data: { image: binaryData } });  

    const grant = await client.core.grantAccess({  
        protectedData: data.address,  
        authorizedUser: 'REPLACE_WITH_REQUESTER_WALLET_ADDRESS',  
        authorizedApp: '0xc8c5e295d2beda01d1fb8dd4d85a1cb769185a34',  
        numberOfAccess: 100  
    });  

    console.log("Grant Created:", grant);  

    const execute = await client.core.processProtectedData({  
        protectedData: data.address,  
        app: 'REPLACE_WITH_YOUR_DEPLOYED_DAPP_ADDRESS',  
        workerpool: 'debug-v8-learn.main.pools.iexec.eth',  
        args: "A pair of pixelated 8-bit sunglasses, commonly associated with the deal with it meme, floating on a black background."  
    });  

    console.log('Executed successfully:', execute);  
};  

protectAndProcessProtectedData().catch(console.error);  
```
