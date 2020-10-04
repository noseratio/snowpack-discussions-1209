export class TestClass {
  #test() {
    console.log("testing...");
  }

  test() {
    this.#test();
  }
}
