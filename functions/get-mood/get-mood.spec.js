import { buildLogger } from './logger';
import { getMood } from './fake-mood';

import { handler } from './get-mood';

jest.mock('./logger');
jest.mock('./fake-mood');

describe('handler: happy path mood is returned', () => {
  const exit = jest.fn();
  const error = jest.fn();

  const callback = jest.fn();

  beforeEach(async () => {
    jest.clearAllMocks();
    buildLogger.mockReturnValue({ exit, error });
    getMood.mockReturnValue(Promise.resolve('groovy'));
    await handler('event', 'context', callback);
  });

  test('logger is built', () => expect(buildLogger).toHaveBeenCalledWith({
    context: 'context',
    event: 'event',
  }));

  test('getMood function is called', () => expect(getMood).toHaveBeenCalledWith({ exit, error }));

  test('logger.exit is called', () => expect(exit).toHaveBeenCalledWith({
    data: {
      mood: 'groovy',
    },
    function: 'get-mood:sucess',
    statusCode: 200,
  }));

  test('logger.error is not called', () => expect(error).not.toHaveBeenCalled());

  test('callback returns expected data', () => expect(callback).toHaveBeenCalledWith(null, {
    body: '{"mood":"groovy"}',
    headers: {},
    statusCode: 200,
  }));
});

describe('handler: not so happy path 😔', () => {
  const exit = jest.fn();
  const error = jest.fn();

  const callback = jest.fn();

  beforeEach(async () => {
    jest.clearAllMocks();
    buildLogger.mockReturnValue({ exit, error });
    getMood.mockReturnValue(Promise.reject(Error('Boom')));
    await handler('event', 'context', callback);
  });

  test('logger is built', () => expect(buildLogger).toHaveBeenCalledWith({
    context: 'context',
    event: 'event',
  }));

  test('getMood function is called', () => expect(getMood).toHaveBeenCalledWith({ exit, error }));

  test('logger.exit is not called', () => expect(exit).not.toHaveBeenCalled());

  test('logger.error is called', () => expect(error).toHaveBeenCalledWith({
    data: { message: 'Boom' },
    function: 'get-mood:error',
    statusCode: 500,
  }));

  test('callback returns expected data', () => expect(callback).toHaveBeenCalledWith(null, {
    body: '{"message":"Boom"}',
    headers: {},
    statusCode: 500,
  }));
});
