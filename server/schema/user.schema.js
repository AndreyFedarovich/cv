const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = require("graphql");
const { ResumeType } = require("./resume.schema");

const Resume = require("../models/resume");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    resumeList: {
      type: new GraphQLList(ResumeType),
      resolve(parent) {
        return Resume.find({ userId: parent.id });
      },
    },
  }),
});

module.exports = {
  UserType,
};
