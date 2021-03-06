const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLList,
} = require("graphql");

const ResumeRole = require("../models/resume-role");
const ResumeSummary = require("../models/resume-summary");

const ResumeType = new GraphQLObjectType({
  name: "Resume",
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLID },
    name: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    position: { type: GraphQLString },
    isPublished: { type: GraphQLBoolean },
    rolesList: {
      type: new GraphQLList(ResumeRoleType),
      resolve(parent) {
        return ResumeRole.find({ resumeId: parent.id });
      },
    },
    summaryList: {
      type: GraphQLNonNull(new GraphQLList(ResumeSummaryType)),
      resolve(parent) {
        return ResumeSummary.find({ resumeId: parent.id });
      },
    },
  }),
});


const ResumeRoleType = new GraphQLObjectType({
  name: "ResumeRole",
  fields: () => ({
    resumeId: { type: GraphQLID },
    company: { type: GraphQLString },
    endMonth: { type: GraphQLString },
    endYear: { type: GraphQLString },
    isCurrent: { type: GraphQLBoolean },
    location: { type: GraphQLString },
    position: { type: GraphQLString },
    startMonth: { type: GraphQLString },
    startYear: { type: GraphQLString },
  }),
});

const ResumeSummaryType = new GraphQLObjectType({
  name: "ResumeSummary",
  fields: () => ({
    resumeId: { type: GraphQLID },
    text: { type: GraphQLString },
  }),
});

module.exports = {
  ResumeType,
  ResumeRoleType,
  ResumeSummaryType,
};
