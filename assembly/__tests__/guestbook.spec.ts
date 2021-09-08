import { addMessage, getMessages } from '../main';
import { PostedMessage, messages } from '../model';
import { VMContext, Context, u128 } from 'near-sdk-as';

function createMessage(text: string): PostedMessage {
  return new PostedMessage(/*Insert Code Here*/);
}

const message = createMessage('hello world');

describe('message tests', () => {
  afterEach(() => {
    //Insert Code Here
  });

  it('adds a message', () => {
    //Insert Code Here
  });

  it('adds a premium message', () => {
    //Insert Code Here
  });

  it('retrieves messages', () => {
    //Insert Code Here
  });

  it('only show the last 10 messages', () => {
    //Insert Code Here
  });
});

describe('attached deposit tests', () => {
  beforeEach(() => {
    //Insert Code Here
  });

  it('attaches a deposit to a contract call', () => {
    //Insert Code Here
  });
});
