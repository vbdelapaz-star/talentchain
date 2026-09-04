// tools/vc-generator.js
const fs = require('fs');

function generateCredential(studentName, institutionDid, courseTitle) {
  const credential = {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://schema.org"
    ],
    "id": `urn:uuid:${Math.random().toString(36).substring(2, 11)}`,
    "type": ["VerifiableCredential", "TechnicalDiplomaCredential"],
    "issuer": institutionDid,
    "issuanceDate": new Date().toISOString(),
    "credentialSubject": {
      "id": `did:ion:student:${studentName.toLowerCase().replace(/\s+/g, '-')}`,
      "name": studentName,
      "qualification": courseTitle,
      "assessmentLevel": "National Occupational Skills Standard (NOSS) Level 4"
    },
    "proof": {
      "type": "Ed25519Signature2020",
      "created": new Date().toISOString(),
      "verificationMethod": `${institutionDid}#key-1`,
      "proofPurpose": "assertionMethod",
      "proofValue": "z3jG7x...[SIMULATED_CRYPTOGRAPHIC_SIGNATURE]"
    }
  };

  fs.writeFileSync('./samples/sample-vc.json', JSON.stringify(credential, null, 2));
  console.log('✓ Verifiable Credential generated at ./samples/sample-vc.json');
}

generateCredential("Alex Tan", "did:ion:EiB2y_APEX_441029", "Diploma in Mechatronics Automation");
