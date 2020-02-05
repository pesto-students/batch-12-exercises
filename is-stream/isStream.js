const EventEmitter = require('events');

function isStream(streamFn) {
  return streamFn instanceof EventEmitter;
}

export {
  isStream,
};
