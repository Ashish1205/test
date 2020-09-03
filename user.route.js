const userController = require('./user.controller');
const Joi = require('joi');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    options: {
      handler: userController.find,
      tags: ['api'],
      description: 'Get all user',
      notes: 'Returns all user',
    },
  },
  {
    method: 'POST',
    path: '/users',
    options: {
      handler: userController.create,
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          address: Joi.string().required(),
        }),
      },
      tags: ['api'],
      description: 'Create new User',
      notes: 'Returns newly created User',
    },
  },
  {
    method: 'GET',
    path: '/users/{id}',
    options: {
      validate: {
        params: Joi.object({
          id: Joi.string().required(),
       }),
      },
      handler: userController.findOne,
      tags: ['api'],
      description: 'Getting candidate by id',
      notes: 'Returns candidate by id',
    },
  },
  {
    method: 'PUT',
    path: '/users/{id}',
    options: {
      validate: {
        params: Joi.object({
          id: Joi.string().required(),
        }),
      },
      handler: userController.update,
      tags: ['api'],
      description: 'Update  User Id',
      notes: 'Returns newly Updated User',
    },
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    options: {
      validate: {
        params: Joi.object({
          id: Joi.string().required(),
        }),
      },
      handler: userController.delete,
      tags: ['api'],
      description: 'Delete User By id',
      notes: 'Delete User Id',
    },
  },
];