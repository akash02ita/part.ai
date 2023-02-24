import { createRequire } from "module";
import _ from "lodash";
import { Party } from "./Party.js";
// const require = createRequire(import.meta.url);

const resolvers = {
  getParty: ({ id }) => {
    return new Promise((resolve) => {
      Party.findById({ _id: id }, (err, product) => {
        if (err) _.reject(err);
        else resolve(product);
      });
    });
  },

  getAllParties: () => {
    return Party.find({});
  },

  createParty: ({ input }) => {
    const newParty = new Party({
      name: input.name,
      description: input.description,
      bannerUrl: input.bannerUrl,
      startTime: input.startTime,
      endTime: input.endTime,
      attending: input.attending
    });

    newParty.id = newParty._id;

    return new Promise((resolve) => {
      newParty.save((err) => {
        if (err) _.reject(err);
        else resolve(newParty);
      });
    });
  },

  updateParty: ({ input }) => {
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

  deleteParty: ({ id }) => {
    return new Promise((resolve) => {
      Party.remove({ _id: id }, (err) => {
        if (err) _.reject(err);
        else resolve("Sucessfully Deleted Party.");
      });
    });
  },
};

export default resolvers;
