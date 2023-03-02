const schema = `
  scalar Timestamp

  enum Major{
    COMPSCI
    MATH
    ENGLISH
    BUSINESS
  }


  enum Type{
    DANCEANDMUSIC
    RECREATIONAL
    HOUSEPARTY
    DORM
    FRATERNITY
  }

  type Party {
    id: ID
    name: String
    description: String
    address: String
    bannerUrl: String
    startTime: Timestamp
    endTime: Timestamp
    attending: [ID]
    type: Type
    school: [ID]
  }

  input PartyInput {
    id: ID
    name: String
    description: String
    address: String
    bannerUrl: String
    startTime: Timestamp
    endTime: Timestamp
    attending: [ID]
    type: Type
    school: [ID!]
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
`;

export default schema;
