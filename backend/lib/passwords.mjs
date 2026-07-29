import crypto from "node:crypto";

const HASH_ALGORITHM = "scrypt";
const SCRYPT_COST = 16384;
const SCRYPT_BLOCK_SIZE = 8;
const SCRYPT_PARALLELIZATION = 1;
const KEY_LENGTH = 64;
const SALT_LENGTH = 16;

const encodeHex = (value) => Buffer.from(value).toString("hex");

export const hashPassword = (password) => {
  const salt = crypto.randomBytes(SALT_LENGTH).toString("hex");
  const derived = crypto.scryptSync(password, salt, KEY_LENGTH, {
    N: SCRYPT_COST,
    r: SCRYPT_BLOCK_SIZE,
    p: SCRYPT_PARALLELIZATION,
  }).toString("hex");

  return `${HASH_ALGORITHM}$${SCRYPT_COST}$${SCRYPT_BLOCK_SIZE}$${SCRYPT_PARALLELIZATION}$${salt}$${derived}`;
};

export const verifyPassword = (password, storedHash) => {
  if (!storedHash || typeof storedHash !== "string") {
    return false;
  }

  const [algorithm, cost, blockSize, parallelization, salt, derived] = storedHash.split("$");
  if (
    algorithm !== HASH_ALGORITHM ||
    !cost ||
    !blockSize ||
    !parallelization ||
    !salt ||
    !derived
  ) {
    return false;
  }

  const computed = crypto.scryptSync(password, salt, derived.length / 2, {
    N: Number(cost),
    r: Number(blockSize),
    p: Number(parallelization),
  }).toString("hex");

  const left = Buffer.from(derived, "hex");
  const right = Buffer.from(computed, "hex");
  if (left.length !== right.length) {
    return false;
  }

  return crypto.timingSafeEqual(left, right);
};
