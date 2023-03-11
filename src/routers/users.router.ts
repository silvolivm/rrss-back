import { Router } from 'express';
import { UsersController } from '../controllers/users.controller.js';
import { UsersMongoRepo } from '../repository/users.mongo.repo.js';
import createDebug from 'debug';
import { logged } from '../interceptors/logged.js';
const debug = createDebug('RRSS:router:users');
// eslint-disable-next-line new-cap
export const usersRouter = Router();
debug('loaded');
const repo = UsersMongoRepo.getInstance();
const controller = new UsersController(repo);
usersRouter.get('/all', logged, controller.getAll.bind(controller));
usersRouter.get('/:id', logged, controller.getById.bind(controller));
usersRouter.post('/register', controller.register.bind(controller));
usersRouter.post('/login', controller.login.bind(controller));
usersRouter.patch(
  '/change',
  logged,
  controller.changeRelations.bind(controller)
);
usersRouter.delete('/:id', logged, controller.delete.bind(controller));
