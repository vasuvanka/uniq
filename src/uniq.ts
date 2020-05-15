import url from "./url";
import { randomBytes } from "crypto"

export function uniq(size: number = 12): string {
  let id: string = "";
  const bytes = randomBytes(size);
  while (size--) id += url[bytes[size] & 63];
  return id;
};
