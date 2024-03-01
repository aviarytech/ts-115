# TS-115 Requirements

Participate:
~ [GitHub repo](https://github.com/aviarytech/ts-115)
~ [File a bug](https://github.com/aviarytech/ts-115/issues)
~ [Commit history](https://github.com/aviarytech/ts-115/commits/main)

# Introduction

The Technical Specification for Digital Credentials and Digital Trust Services, developed by the [Digital Credentials Consortium (DGC)](https://dgc-cgn.org/standards/find-a-standard/standards-in-digital-credentials/digital-credentials/), sets a comprehensive framework for issuing, storing, and verifying digital credentials. Aimed at revolutionizing the way educational and professional qualifications are recognized across digital platforms, this standard ensures interoperability, security, and privacy. By adopting this standard, organizations can facilitate seamless verification processes, enhance the credibility of digital credentials, and support the mobility of learners and professionals in a global landscape. This document outlines the requirements and best practices established by the DGC to empower stakeholders in the digital credential ecosystem.

# Components

## Digital Credentials Requirements

[[def: RDC1]]
~ The digital credential shall be composed of three components:

  a. Credential metadata: One or more credential attributes that describe the properties or characteristics of the credential and cryptography method used;

  b. Credential payload: A set of one or more claims asserted about one or more Subjects; and
  
  c. Credential proofs: One or more methods or mechanisms (typically cryptographic) that are used to verify that the issuer authored the digital credential and that the digital credential has not been tampered with.

  Digital credentials shall:

  a. be presentable;

  b. contain claims about one or more Subjects;

  c. identify the Issuer;

  d. define a validity period;

  e. be tamper-evident and unique within a specified population;

  f. be machine readable; and

  g. be revocable, and where applicable, contain revocation method details.

  Digital credentials should:

  a. be suspendible; and

  b. be recoverable.

[[def: RDC2]]
~ The authorship of a digital credential shall be cryptographically verifiable.

[[def: RDC3]]
~ It shall be demonstrated that the digital credential can be stored within and presented from a minimum of two implementations.

[[def: RDC4]]
~ It shall be demonstrated that the digital credential can be cryptographically verified using a minimum of two implementations.

[[def: RDC5]]
~ The digital credential shall be bound to one or more authenticators.

## Data Protection Requirements

[[def: RDP1]]
~ All data shall be protected during data-in-transit and data-at-rest in accordance with [Cryptographic Module Requirements](#cryptographic-module-requirements).

::: note Basic Note
An organization should consider the use of CAN/CIOSC 100-1, Data governance – Part 1: Data-centric security, for the purposes of protecting the digital credential, and/or the issuer, holder and verifier component data at-rest, in-transit, and in-use.
:::

[[def: RDP2]]
~ All data held in device-based or cloud-based storage shall be encrypted in accordance with [Cryptographic Module Requirements](#cryptographic-module-requirements)

[[def: RDP3]]
~ Cloud-based storage shall be implemented in accordance with ISO/IEC 27018 to protect personally identifiable information (PII) and ISO/IEC 29100 to protect personal information (PI).

## Cryptographic Module Requirements

[[def: RC1]]
~ Data shall be encrypted using a Cryptographic Module Validation Program – certified encryption module.

[[def: RC2]]
~ Data should be protected using CAN/CIOSC100-1, Data governance – Part 1: Data-centric security.

[[def: RC3]]
~ Data-in-transit protection shall be provided using TLS1.2, or subsequent versions.

[[def: RC4]]
~ Cryptographic algorithms shall be compliant with the recommendations for Protected B information in the CSE publication Cryptographic Algorithms for Unclassified, Protected A, and Protected B Information and Guidance on Securely Configuring Network Protocols (ITSP.40.111
and ITSP.40.062).

[[def: RC5]]
~ The cryptographic module shall ensure support for quantum-safe cryptography using cryptographic algorithms, cryptographic parameter sizes, key lengths and crypto periods which are configurable, and which can be updated within protocols, applications and services to be consistent with transition guidance in time to meet specified transition dates.

## Decentralized Identifier Requirements

[[def: RDID1]]
~ Decentralized Identifiers shall be implemented in accordance with a published international specification and the [Cryptographic Module Requirements](#cryptographic-module-requirements) of this Specification. (e.g., Decentralized Identifiers (DIDs) v1.0 W3C Recommendation).

## Issuer Component Requirements

[[def: RI1]]
~ The Issuer Component shall identify the Issuer of the digital credential.

[[def: RI2]]
~ The Issuer Component shall be able to create a decentralized identifier for the Issuer, in accordance with [Decentralized Identifier Requirements](#decentralized-identifier-requirements).

::: note Basic Note
This specification is intended to be technology framework agnostic, and not prescriptive regarding the decentralized identifiers that can be used beyond narrowing decentralized identifiers to those covered by a published international specification.
:::

[[def: RI3]]
~ The Issuer Component shall process any information related to the digital credential in accordance with the general characteristics specified in Subsection 5.1 of this Specification.

[[def: RI4]]
~ The Issuer Component shall protect the digital credential, source data for the digital credential and all other sensitive data, including personally identifiable information (PII) and personal information (PI), in accordance with Section 6 of this Specification.

[[def: RI5]]
~ The Issuer Component shall conform to the Harmonized European Standard on Accessibility requirements for ICT products and services (EN 301-549)

[[def: RI6]]
~ The Issuer Component shall provide support for official languages of the jurisdiction, and should provide support for additional languages (e.g., Indigenous languages).

::: note Basic Note
The official languages of Canada are French and English.
:::

[[def: RI7]]
~ The Issuer Component shall be designed to create and update claims with respect to the Subject(s) resulting from identity linking, identity verification, identity evidence determination, and identity continuity processes of the Issuer in accordance with CAN/CIOSC 103-1.

[[def: RI8]]
~ Where the Issuer Component is reliant upon a Digital Trust Registry for issuing digital credentials and for verifiers to verify digital credentials, the Digital Trust Registry shall be implemented in accordance with Section 12 of this Specification.

[[def: RI9]]
~ The Issuer Component shall require the Holder to respond to administrator-initiated digital credential authenticator binding.

::: note Basic Note
As an example, the Holder may interact with an independent channel such as email, text message, QR code scanning
:::

[[def: RI10]]
~ The Issuer Component should provide to the Holder the ability to update the authenticators bound to a digital credential issued to the Holder.

[[def: RI11]]
~ The issuer Component shall check whether the Holder controls the authenticator when binding a digital credential to a specific authenticator, e.g., verifying proof-of-possession of a private key that is stored on the device. This process shall be protected against replay attacks.

[[def: RI12]]
~ The Issuer Component should have the capability to inform the Holder of a change in digital credential status.

[[def: RI13]]
~ The Issuer Component should provide to the Holder the ability to request the recovery of a suspended digital credential.

[[def: RI14]]
~ The Issuer Component should provide to the Holder the ability to request revocation of a digital credential issued to the Holder.

[[def: RI15]]
~ The Issuer Component shall keep a record of the digital credential issuance, such as information about the Holder to which a digital credential was assigned.

[[def: RI16]]
~ The Issuer Component should have the ability to suspend, recover, and revoke a digital credential issued to a Holder.

[[def: RI17]]
~ The Issuer Component shall have the ability to reissue the digital credential with updated claims.

[[def: RI18]]
~ The Issuer Component shall maintain an audit log for a digital credential attribute modification, and date of modification.

[[def: RI19]]
~ The Issuer Component shall provide a defined validity period on the digital credential.

::: note Basic Note
A defined validity period may be open-ended. For example, a period may have no specific expiry date.
:::

[[def: RI20]]
~ The Issuer Component shall retain all digital credential events in an audit log for a predefined period.

[[def: RI21]]
~ The Issuer Component shall issue the digital credential to an authenticated Holder Component.

[[def: RI22]]
~ The Issuer Component shall be able to raise an exception for a digital credential and notify the Issuer.

[[def: RI23]]
~ The Issuer Component shall record the following information when suspending a digital credential:

  a. the effective date of suspension;

  b. the reason for suspension; and

  c. the initiating party for a suspension.

[[def: RI24]]
~ The Issuer Component shall make available to the Holder and Verifiers the means for determining the status of a digital credential.

[[def: RI25]]
~ The Issuer Component shall initiate a process to render a digital credential unusable, potentially leading to revocation, if there is an exception for a digital credential regarding compromised information, compromised automated processing or compromised authenticator.

[[def: RI26]]
~ Where suspension and recovery are supported the Issuer Component shall have the ability to recover a suspended digital credential.

[[def: RI27]]
~ Where suspension and recovery are supported the Issuer Component shall make available recovery information to the Holder and any Verifier.

[[def: RI28]]
~ The Issuer Component shall record at minimum the following information upon revoking a digital credential:
  
  a. the effective date of revocation;

  b. the reason for revocation; and

  c. the initiating party for a revocation.

[[def: RI29]]
~ The Issuer Component shall have the capability to perform identity verification of the Holder prior to digital credential recovery.

[[def: RI30]]
~ The Issuer Component shall record the following recovery information:

  a. the effective date of recovery; and

  b. the initiating party for the recovery action.

## Holder Component Requirements

[[def: RH1]]:
~ The Holder Component shall process digital credentials in accordance with the general characteristics specified in Subsection 5.1 of this Specification.

[[def: RH2]]:
~ The Holder Component shall ensure all digital credential data and all other sensitive data, including personally identifiable information (PII) and personal information (PI), is protected in accordance with Section 6 of this Specification.

[[def: RH3]]
~ The Holder Component shall conform to the Harmonized European Standard on Accessibility requirements for ICT products and services (EN 301-549).

[[def: RH4]]
~ The Holder Component shall provide support for official languages of the jurisdiction, and should provide support for additional languages (e.g., Indigenous languages).

[[def: RH5]]
~ The Holder Component shall enable the Holder to manage privacy and sharing settings.

[[def: RH6]]
~ The Holder Component shall enable the Holder to control the sharing of digital credential data, in whole, in part, or as a derivation, and should encourage the Holder to avoid oversharing data.

::: note Basic Note
Selective disclosure is an example of what is covered in this context by “in part, or as a derivation.
:::

[[def: RH7]]
~ The Holder Component shall use shared secret (e.g., passwords, passphrase, PINs) or biometric authentication to prevent unauthorized access.
  
  a. The Holder Component should encourage the use of shared secrets that are in accordance with Best practices for passphrases and passwords (ITSAP.30.032).

  b. The Holder Component shall limit the number of unsuccessful authentication attempts without negative consequences (e.g., suspending access to the Holder Component or wiping the contents of the Holder Component).
  
  c. The Holder Component shall require re-authentication after being idle for a period of time, with that period of time being configurable by the Holder.
  
  d. The Holder Component may support the ability to remotely allow, suspend or restore access to the Holder Component.

[[def: RH8]]
~ The Holder Component shall be able to persist digital credentials with native format encoding to ensure that it can fully produce the original record intact.

[[def: RH9]]
~ The Holder Component shall store digital credentials with sufficient metadata to allow execution of the minimal functions in Section 6 of this Specification.

[[def: RH10]]
~ The Holder Component may be able to unpack the digital credential payload, but it is not required to do so.

[[def: RH11]]
~ The Holder Component shall have a mechanism to share digital credential data with a Verifier Component in response to:

  a. A Holder action.

  b. A request for digital credential data from a Verifier, if approved by the Holder.

[[def: RH12]]
~ The Holder Component shall be able to request a digital credential from an Issuer.

[[def: RH13]]
~ The Holder Component shall detect and inform the Holder of indications of potential digital credential misuse or compromise of the identity information.

::: note Basic Note
Examples could include the expiry date having been exceeded or the detection of suspicious activity such as attempts to tamper with or steal the data.
:::

[[def: RH14]]
~ The Holder Component shall have the capability to allow Holder and Subject binding for high assurance digital credential requests.

::: note Basic Note
Examples include pairwise decentralized identifiers, other decentralized identifiers, and other methods resulting in a URI identifier that can serve as a Subject in a Verifiable Credential or a Holder in a Verifiable Presentation
:::

[[def: RH15]]
~ The Holder Component may be able to generate proofs of identifier control.

[[def: RH16]]
~ The Holder Component may be able to subscribe or unsubscribe to a digital credential subscription model, where the Holder authorizes in advance to being issued or reissued one or more digital credentials in the future.

[[def: RH17]]
~ The Holder Component shall be able to receive digital credentials from an Issuer.

[[def: RH18]]
~ The Holder Component shall be able to decline digital credentials from an Issuer.

[[def: RH19]]
~ The Holder Component shall be able to respond to a Holder’s request to remove a digital credential and stop persisting that digital credential.

[[def: RH20]]
~ The Holder Component shall assign control over an issued digital credential so that the Holder’s control of that digital credential may be subsequently verified.

[[def: RH21]]
~ The Holder Component shall request Holder authorization before sharing digital credential data, including authorizing the recipient Verifier(s) and the data to be shared.

[[def: RH22]]
~ The Holder Component shall request Holder authorization before accepting, declining, or removing digital credentials.

[[def: RH23]]
~ The Holder Component shall have the capability to notify the Holder of any changes to the digital credential.

## Verifier Component Requirements

[[def: RV1]]
~ The Verifier Component shall process digital credentials, in accordance with the general characteristics specified in Subsection 5.1 of this Specification.

[[def: RV2]]
~ The Verifier Component shall ensure all digital credential data and all other sensitive data, including personally identifiable information (PII) and personal information (PI), are protected in accordance with Section 6 of this Specification.

[[def: RV3]]
~ The Verifier Component shall conform to the Harmonized European Standard on Accessibility requirements for ICT products and services (EN 301-549).

[[def: RV4]]
~ The Verifier Component shall provide support for official languages of the jurisdiction, and should provide support for additional languages (e.g., Indigenous languages).

::: note Basic Note
The official languages of Canada are French and English.
:::

[[def: RV5]]
~ The Verifier Component shall have the capability to request from the Holder Component the sharing of digital credential data, in whole, in part, or as a derivation.

::: note Basic Note
Selective disclosure is an example of what is covered in this context by “in part, or as a derivation”.
:::

[[def: RV6]]
~ The Verifier Component should have the capability to present to the Verifier a derivation from received digital credential data (e.g., derivation from the date of birth that a Subject is above a certain age), with the original received information only being available to a Verifier with elevated privileges (e.g., auditor).

[[def: RV7]]
~ The Verifier Component shall use acceptable methods to ensure that a digital credential is not tampered with, corrupted, or modified.

::: note Basic Note
Examples of acceptable methods include cryptographic methods or examination by a trained examiner.
:::

[[def: RV8]]
~ Where the Verifier Component is verifying a digital credential that uses a decentralized identifier, the decentralized identifier shall be resolved in accordance with Section 8 of this Specification.

[[def: RV9]]
~ The Verifier Component shall inform the Verifier of an attempt to use a suspended or revoked digital credential.

[[def: RV10]]
~  The Verifier Component may have the capability to inform the Issuer of an attempt to use a suspended or revoked digital credential is detected or when digital credential misuse or compromise is detected.

[[def: RV11]]
~  The Verifier Component shall have the capability to determine whether the Holder has demonstrated control over a digital credential by means of one or more authenticators.

[[def: RV12]]
~  The Verifier Component shall inform the Holder when the Holder has demonstrated control over a digital credential by means of one or more authenticators.

[[def: RV13]]
~  The Verifier Component shall indicate an authentication failure when a digital credential is suspended or revoked, or when digital credential misuse or compromise is detected.

## Digital Trust Registry Component Requirements

[[def: RTR1]]
~ The Digital Trust Registry Component shall have the capability to store keys and other relevant data needed for the issuance and verification of digital credentials, in accordance with Section 6 of this Specification.

[[def: RTR2]]
~ The Digital Trust Registry Component shall employ authentication and access control to prevent against unauthorized access, compromise, or destruction of data.

[[def: RTR3]]
~ The Digital Trust Registry Component shall provide cryptographic assurances that the keys and other relevant data stored in the Digital Trust Registry have not been altered and are complete, in accordance with Section 7 of this Specification.

[[def: RTR4]]
~ Where the Digital Trusty Registry Component is supporting decentralized identifiers, the decentralized identifiers shall be supported in accordance with Section 8 of this Specification.
