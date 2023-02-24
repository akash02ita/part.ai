import { buildSchema } from "graphql";

const schema = buildSchema(`
  enum Major{
    COMPSCI
    MATH
    ENGLISH
    BUSINESS
  }

  type User {
    id: ID
    email: String
    name: String
    password: String
    description: String
    profilePicture: String
    major: Major
  } 

  type Party {
    id: ID
    name: String
    description: String
    address: String
    startTime: Int
    endTime: Int
    attending: [ID]
  }

  input PartyInput {
    id: ID
    name: String
    description: String
    address: String
    startTime: Int
    endTime: Int
    attending: [ID]
  }

   type Query {
    getParty(id: ID): Party
    getAllParties: [Party]
  }

  type Mutation {
    createParty(input: PartyInput): Party
    updateParty(input: PartyInput): Party
    deleteParty(id: ID!): String
  }
`);

export default schema;

