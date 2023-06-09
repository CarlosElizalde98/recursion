const LinkedList = require('./linked-list.js');

describe('#Prepend element', () => {
  test('It adds the element to the beginning of the list', () => {
    const ll = new LinkedList();
    ll.prepend(10);
    const oldHead = ll.head;
    ll.prepend(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.nextNode).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});

describe('#Get At index', () => {
  describe('With index less than 0', () => {
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getAtIndex(-1)).toBeNull();
    });
  });

  describe('With index greater than length', () => {
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getAtIndex(5)).toBeNull();
    });
  });

  describe('with index 0', () => {
    test('it returns the head', () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getAtIndex(0).value).toBe(10);
    });
  });

  describe('with index in the middle', () => {
    test('it returns the middle', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);

      expect(ll.getAtIndex(2).value).toBe(30);
    });
  });
});
