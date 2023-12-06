// const Joi = require('joi');

// const agentsValidation = Joi.object({
// 	firstName: Joi.string().required(),
// 	lastName: Joi.string().required(),
// 	gender: Joi.string().required(),
// });

// module.exports = {
//   agentsValidation,
// };

// const joi = require('joi');

// const createAgent = {
//   body: joi.object().keys({
//     firstName: joi.string(),
//     lastName: joi.string(),
//     gender: joi.string(),
//   }),
// };

// const getAgent = {
//   query: joi.object().keys({
//     firstName: joi.string(),
//     lastName: joi.string(),
//     gender: joi.string(),
//     sortBy: joi.string(),
//     limit: joi.number().integer(),
//     page: joi.number().integer(),
//   }),
// };

// const updateAgent = {
//   body: joi.object().keys({
//     firstName: joi.string(),
//     lastName: joi.string(),
//     gender: joi.string(),
//   }),
// };

// const deleteAgent = {
//   params: joi.object().keys({
//     agentId: joi.string().required(),
//   }),
// };

// module.exports = {
//   createAgent,
//   updateAgent,
//   deleteAgent,
//   getAgent,
// };