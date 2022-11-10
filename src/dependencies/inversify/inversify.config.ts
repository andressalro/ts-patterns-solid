import 'reflect-metadata';
import { Container } from 'inversify';
import { IDepA } from './idepa';
import { TYPES } from './types';
import { ConcreteA } from './concretea'
import { ConcreteC } from './concretec';
import { ConcreteB } from './concreteb';
import { IDepB } from './idepb';
import { IDepC } from './idepc';

let container = new Container({
    defaultScope: "Transient"
});
container.bind<IDepA>(TYPES.IDepA).to(ConcreteA).inSingletonScope();
container.bind<IDepB>(TYPES.IDepB).to(ConcreteB).inTransientScope();
container.bind<IDepC>(TYPES.IDepC).to(ConcreteC).inRequestScope();

export default container;