import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactPath = path.resolve("db", "contacts.json");

export const listContacts = async () => {
  const contacts = await fs.readFile(contactPath);
  return JSON.parse(contacts);
};
export const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  return contact || null;
};
export const removeContact = async (contactId) => {};
export const addContact = async (name, email, phone) => {};
