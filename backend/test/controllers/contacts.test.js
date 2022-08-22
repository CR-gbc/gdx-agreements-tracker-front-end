const { getAll, getOne, updateOne, addOne } = require("../../src/controllers/contacts");
const contactsModel = require("../../src/models/contacts.js");

const contacts = [
  {
    id: 1,
    first_name: "Mike",
    last_name: "Lara",
    job_title: "Technical Analyst",
    ministry_id: "CITZ",
    notes: "This is a note about Lara",
  },
  {
    id: 2,
    first_name: "Sarah",
    last_name: "Gonzalez",
    job_title: "Business Analyst",
    ministry_id: "CITZ",
    notes: "This is a note about Sarah",
  },
  {
    id: 3,
    first_name: "John",
    last_name: "Lara",
    job_title: "Developer",
    ministry_id: "CITZ",
    notes: "This is a note about John",
  },
  {
    id: 4,
    first_name: "Jacob",
    last_name: "Valencia",
    job_title: "IT Admin",
    ministry_id: "CITZ",
    notes: "This is a note about Jacob",
  },
  {
    id: 5,
    first_name: "Eric",
    last_name: "Richardson",
    job_title: "Director",
    ministry_id: "CITZ",
    notes: "This is a note about Eric",
  },
];

// Mock user DB methods.
jest.mock("../../src/models/contacts");

describe("Testing user controllers", () => {
  it("Gets an array of all contacts", async () => {
    contactsModel.findAll.mockResolvedValue(contacts);
    const sampleRequest = {
      user: {
        capabilities: ["contacts_read_all"],
      },
    };
    const result = await getAll(sampleRequest);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(5);
    result.forEach((contactsObject) => expect("id" in contactsObject).toBe(true));
  });
  it("Gets a single contact", async () => {
    const expectedContact = contacts[1];
    contactsModel.findById.mockResolvedValue(expectedContact);
    const sampleRequest = {
      params: {
        id: 2,
      },
      user: {
        capabilities: ["contacts_read_all"],
      },
    };
    const result = await getOne(sampleRequest);
    expect(result).toBe(expectedContact);
  });
  it("Updates a single contact", async () => {
    contactsModel.updateOne.mockResolvedValue(1);
    const sampleRequest = {
      params: {
        id: 2,
      },
      body: {
        first_name: "test",
      },
      user: {
        capabilities: ["contacts_update_one"],
      },
    };
    const result = await updateOne(sampleRequest);
    expect(result).toBe(1);
  });
  it("Adds a single contact", async () => {
    contactsModel.addOne.mockResolvedValue(1);
    const sampleRequest = {
      body: {
        first_name: "test",
      },
      user: {
        capabilities: ["contacts_add_one"],
      },
    };
    const result = await addOne(sampleRequest);
    expect(result).toBe(1);
  });
});
exports.contacts = contacts;
