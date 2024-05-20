import * as fs from "fs";

// Read the JSON file synchronously
const rawData = fs.readFileSync("./codes.json", "utf-8");
const codes = JSON.parse(rawData);
export class MyError extends Error {
  constructor(name = "CustomError", opts = {}) {
    super(name);
    this.name = name;
    this.opts = opts;
    const errorInfo = codes[name];
    if (!errorInfo) {
      throw new Error(`Error code "${name}" not found in codes.json`);
    }
    this.customCode = errorInfo.customCode;
    this.message = errorInfo.message;
  }

  toObject() {
    return {
      customCode: this.customCode,
      message: this.message,
      ...this.opts.body,
    };
  }
}

export default MyError;
