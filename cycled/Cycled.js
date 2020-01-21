
class Cycled {
  constructor(fixture) {
    this.fixture = fixture;
    this.currentIndex = 0;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    return this.step(1);
  }

  current() {
    return this.fixture[this.currentIndex];
  }

  previous() {
    return this.step(-1);
  }

  step(jumpBy) {
    const normalisedJumpBy = jumpBy % this.fixture.length;
    const newIndex = (this.currentIndex + this.fixture.length + normalisedJumpBy) % this.fixture.length;
    this.currentIndex = newIndex;
    return this.current();
  }

  reversed() {
    this.fixture = this.fixture.reverse();
  }

  indexOf(value) {
    return this.fixture.indexOf(value);
  }
}


export {
  Cycled,
};
