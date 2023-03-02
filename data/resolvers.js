import { createRequire } from "module";
import _ from "lodash";
import { Party } from "./dbConnector.js";
import { TimestampResolver } from "graphql-scalars";
const require = createRequire(import.meta.url);

const resolvers = {
  Timestamp: TimestampResolver,
  Query: {
    getParty: (_, { id }) => {
      return new Promise((resolve) => {
        Party.findById({ _id: id }, (err, party) => {
          if (err) _.reject(err);
          else resolve(party);
        });
      });
    },

    getAllParties: () => {
      return Party.find({});
    },
  },

  Mutation: {
    createParty: (_, { input }) => {
      const newParty = new Party({
        name: input.name,
        description: input.description,
        startTime: input.startTime,
        endTime: input.endTime,
        address: input.address,
        type: input.type,
        isPublic: input.isPublic,
        attending: input.attending,
        school: input.school,
      });

      newParty.id = newParty._id;

      return new Promise((resolve) => {
        newParty.save((err) => {
          if (err) _.reject(err);
          else resolve(newParty);
        });
      });
    },

    updateParty: (_, { input }) => {
      return new Promise((resolve) => {
        Party.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (err, party) => {
            if (err) _.reject(err);
            else resolve(party);
          }
        );
      });
    },

    deleteParty: (_, { id }) => {
      return new Promise((resolve) => {
        Party.remove({ _id: id }, (err) => {
          if (err) _.reject(err);
          else resolve("Sucessfully Deleted Party.");
        });
      });
    },
  },
};

export default resolvers;
