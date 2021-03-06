const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean,
} = require("graphql");

const { UserType } = require("./user.schema");
const {
  ResumeType,
  ResumeSummaryType,
  ResumeRoleType,
} = require("./resume.schema");

const User = require("../models/user");
const Resume = require("../models/resume");
const ResumeSummary = require("../models/resume-summary");
const ResumeRole = require("../models/resume-role");

const removeResume = (id) => {
  ResumeSummary.remove({ resumeId: id }, () => null);
  ResumeRole.remove({ resumeId: id }, () => null);
  return Resume.findByIdAndRemove(id).exec();
};

const Query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },

    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      },
    },

    resume: {
      type: ResumeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return Resume.findById(id);
      },
    },

    resumeListPublished: {
      type: new GraphQLList(ResumeType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Resume.find({ userId: args.id, isPublished: true });
      },
    },

    resumeListDrafts: {
      type: new GraphQLList(ResumeType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Resume.find({ userId: args.id, isPublished: false });
      },
    },

    resumeList: {
      type: new GraphQLList(ResumeType),
      resolve() {
        return Resume.find({});
      },
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve(parent, { name, lastname, email }) {
        const user = new User({
          name,
          lastname,
          email,
        });
        return user.save();
      },
    },

    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve(parent, { id, name, lastname, email }) {
        return User.findByIdAndUpdate(
          id,
          {
            $set: { name, lastname, email },
          },
          { new: true }
        );
      },
    },

    addResume: {
      type: ResumeType,
      args: {
        userId: { type: GraphQLID },
        name: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        position: { type: GraphQLString },
        isPublished: { type: GraphQLBoolean },
      },
      resolve(
        parent,
        { userId, name, lastname, email, phoneNumber, position, isPublished }
      ) {
        const resume = new Resume({
          userId,
          name,
          lastname,
          email,
          phoneNumber,
          position,
          isPublished: !!isPublished,
        });
        return resume.save();
      },
    },

    updateResume: {
      type: ResumeType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        position: { type: GraphQLString },
        isPublished: { type: GraphQLBoolean },
      },
      resolve(
        parent,
        { id, name, lastname, email, phoneNumber, position, isPublished }
      ) {
        return Resume.findByIdAndUpdate(
          id,
          {
            $set: { name, lastname, email, phoneNumber, position, isPublished },
          },
          { new: true }
        );
      },
    },

    addResumeSammary: {
      type: ResumeSummaryType,
      args: {
        resumeId: { type: GraphQLID },
        text: { type: GraphQLString },
      },
      resolve(parent, { resumeId, text }) {
        const resumeSummary = new ResumeSummary({
          resumeId,
          text,
        });
        return resumeSummary.save();
      },
    },

    addResumeRole: {
      type: ResumeRoleType,
      args: {
        resumeId: { type: GraphQLID },
        company: { type: GraphQLString },
        endMonth: { type: GraphQLString },
        endYear: { type: GraphQLString },
        isCurrent: { type: GraphQLBoolean },
        location: { type: GraphQLString },
        position: { type: GraphQLString },
        startMonth: { type: GraphQLString },
        startYear: { type: GraphQLString },
      },
      resolve(
        parent,
        {
          resumeId,
          company,
          endMonth,
          endYear,
          isCurrent,
          location,
          position,
          startMonth,
          startYear,
        }
      ) {
        const resumeRole = new ResumeRole({
          resumeId,
          company,
          endMonth,
          endYear,
          isCurrent,
          location,
          position,
          startMonth,
          startYear,
        });
        return resumeRole.save();
      },
    },

    deleteResume: {
      type: ResumeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return removeResume(id);
      },
    },

    deleteUser: {
      type: ResumeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        Resume.find({ userId: id }, function (err, resumeList) {
          resumeList.forEach(({ _id: resumeId }) => removeResume(resumeId));
        });
        return User.findByIdAndRemove(id);
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
