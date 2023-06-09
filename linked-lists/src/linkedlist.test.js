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

describe('#Size', () => {
  test('It returns 0 if list is empty', () => {
    const ll = new LinkedList();
    expect(ll.size()).toBe(0);
  });

  test('it returns the correct size of list', () => {
    const ll = LinkedList.fromValues(10, 20, 30);
    expect(ll.size()).toBe(3);
  });
});

describe('#Append', () => {
  test('It adds element to end of list', () => {
    const ll = LinkedList.fromValues(10, 20);
    ll.append(30);
    expect(ll.tail().value).toBe(30);
  });
});

describe('#Insert at Index', () => {
  test('it adds to head correctly', () => {
    const ll = LinkedList.fromValues(20, 30, 40);
    ll.insertAtIndex(0, 10);
    expect(ll.head.value).toBe(10);
  });
  test('It returns null if index is negative', () => {
    const ll = LinkedList.fromValues(10, 20, 30);
    const result = ll.insertAtIndex(-1, 40);
    expect(result).toBeNull();
  });
});
