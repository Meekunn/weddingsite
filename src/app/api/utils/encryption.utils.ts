import * as crypto from "crypto";
import * as jose from "jose";
// import { decode, sign, verify } from "jsonwebtoken";
import { NextResponse } from "next/server";
// import { decode, sign, verify } from '../../../server/exps';

export function signPassword(un_encrypted_data: string): string | any {
    try {
        if (!un_encrypted_data) {
            return NextResponse.json({ message: "No valid data to sign" }, { status: 400 });
        }

        const privateKey = process.env.SERVER_SEC_KEY || process.env.NEXT_PUBLIC_SERVER_SEC_KEY;
        if (!privateKey) {
            throw new Error("An error occurred while trying to sign the data");
        }

        return crypto.sign("sha512", Buffer.from(un_encrypted_data), { key: privateKey }).toString("base64");
    } catch (error) {
        throw new Error("An error occurred while trying to sign the data");
    }
}

export function verifyPassword(un_encrypted_data: string, encrypted_data: string): boolean | any {
    try {
        if (!un_encrypted_data) {
            return NextResponse.json({ message: "No valid data to sign" }, { status: 400 });
        }

        const privateKey = process.env.SERVER_SEC_KEY || process.env.NEXT_PUBLIC_SERVER_SEC_KEY;

        if (!privateKey) {
            throw new Error("An error occurred while trying to sign the data");
        }

        const result = crypto.verify("sha512", Buffer.from(un_encrypted_data), { key: privateKey }, Buffer.from(encrypted_data, "base64"));

        return result;
    } catch (error) {
        throw new Error("An error occurred while trying to verify the data");
    }
}

export async function encodeJwt(data: any) {
   try {
    let key: any = process.env.JWT_KEY
    if (!key) {
        throw new Error("Please make sure a valid key is present");
    }
      key =  new TextEncoder().encode(key)

    const result = await new jose.SignJWT({}).setProtectedHeader({alg:"HS256"}).setSubject(data).setExpirationTime("6h").sign(key)

    console.log(result)
    return result;
   } catch (error) {
    console.error(error)
    throw new Error("An error occurred while trying to encode the data");
    
   }
}

export function decodeJwt(data: any) {
    // const result = decode(data);
    // return result;
}

// Verify number
// Save number
// Send airtime



export async function verifyJwt(data: any) {
  try {
    let key: any = process.env.JWT_KEY
    if (!key) {
        throw new Error("Please make sure a valid key is present");
    }
      key =  new TextEncoder().encode(key)
      
    const result = await jose.jwtVerify(data, key);
    return result;
  } catch (error) {
    console.error(error)
    throw new Error("An error occurred while trying to verify the data");
  }
}

// const toBase64 = (obj: any): string => {
//     const str = JSON.stringify({...obj, exp: 872990, iss: 'wedding_site'});
//     return Buffer.from(str).toString("base64");
// };

// const replaceSpecialChars = (b64string: string) => {
//     // create a regex to match any of the characters =,+ or / and replace them with their // substitutes
//     return b64string.replace(/[=+/]/g, (charToBeReplaced): any => {
//         switch (charToBeReplaced) {
//             case "=":
//                 return "";
//             case "+":
//                 return "-";
//             case "/":
//                 return "_";
//                 default:
//                     break
//         }
//     });
// };

// // suppose we have this header
// const header = {
//     alg: 'HS256',
//     typ: 'JWT',
//   };
//   const b64Header = toBase64 (header);
//   const jwtB64Header = replaceSpecialChars(b64Header);

//   const createSignature =(jwtB64Header: any,jwtB64Payload: any): any=>{
//     // create a HMAC(hash based message authentication code) using sha256 hashing alg
//         let signature = crypto.createHmac ('sha256', String(process.env.SERVER_SEC_KEY));

//     // use the update method to hash a string formed from our jwtB64Header a period and
//     //jwtB64Payload
//         signature.update (jwtB64Header + '.' + jwtB64Payload);

//     //signature needs to be converted to base64 to make it usable
//         signature = signature.digest ('base64');

//     //of course we need to clean the base64 string of URL special characters
//         signature = replaceSpecialChars (signature);
//         return signature
//     }
//     // create your secret to sign the token
//     const secret = 'super_secret_society';
//     const signature= createSignature(jwtB64Header,jwtB64Payload,secret);
//     console.log ("the signature is: ",signature);
