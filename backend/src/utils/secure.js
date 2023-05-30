import crypto from 'crypto';

export function HashPassword (password) {
  // Any random string here (ideally should be atleast 16 bytes)
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 32).toString('hex');
  return hash + salt;
}

export function ComparePassword (password, hash) {
  // extract salt from the hashed string
  // our hex password length is 32*2 = 64
  const salt = hash.slice(64);
  const originalPassHash = hash.slice(0, 64);
  const currentPassHash = crypto.scryptSync(password, salt, 32).toString('hex');
  console.log(salt, salt.length);
  return originalPassHash === currentPassHash;
}