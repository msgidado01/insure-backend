const { db } = require('../models');

const createAgent = async (userId, agentBody) => {
  return await db.agent.create({
    userId,
    ...agentBody,
  });
};

const getAgentById = async (agentId) => {
  return await db.agentfindOne({
    where: {
      id:agentId
    }
  });
}

module.exports = {
  createAgent,
  getAgentById
};
