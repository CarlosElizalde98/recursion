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

describe('#pop', () => {
  test('removes the last element in the list', () => {
    const ll = LinkedList.fromValues(10, 20, 30, 40);
    ll.pop();

    expect(ll.length).toBe(3);
    expect(ll.tail().value).toBe(30);
  });

  test('works if only one element is in list', () => {
    const ll = LinkedList.fromValues(10);
    ll.pop();
    expect(ll.length).toBe(0);
    expect(ll.head).toBeNull();
  });

  test('returns null is no elements are in list', () => {
    const ll = new LinkedList();

    expect(ll.pop()).toBeNull();
  });
});

describe('#Insert at Index', () => {
  test('it adds to head correctly', () => {
    const ll = LinkedList.fromValues(20, 30, 40);
    ll.insertAtIndex(0, 10);
    expect(ll.head.value).toBe(10);
    expect(ll.length).toBe(4);
  });
  test('It returns null if index is negative', () => {
    const ll = LinkedList.fromValues(10, 20, 30);
    const result = ll.insertAtIndex(-1, 40);
    expect(result).toBeNull();
  });

  test('it inserts in the middle', () => {
    const ll = LinkedList.fromValues(10, 20, 30, 40);
    ll.insertAtIndex(2, 35);

    expect(ll.getAtIndex(2).value).toBe(35);
    expect(ll.length).toBe(5);
  });
});

describe('#Remove the head', () => {
  test('removes the head', () => {
    const ll = LinkedList.fromValues(10, 20, 30);
    ll.removeHead();
    expect(ll.head.value).toBe(20);
    expect(ll.length).toBe(2);
    expect(ll.head.nextNode.value).toBe(30);
  });
});

describe('#Contains method', () => {
  test('Returns true if value is in list', () => {
    const ll = LinkedList.fromValues(10, 20, 30, 40);
    const result = ll.contains(30);

    expect(result).toBe(true);
  });

  test('returns false is value is not in list', () => {
    const ll = LinkedList.fromValues(10, 20, 30);
    const result = ll.contains(50);
    expect(result).toBe(false);
  });
});

describe('#Find method', () => {
  test('returns index of node containing value', () => {
    const ll = LinkedList.fromValues(10, 20, 30);
    const result = ll.find(20);

    expect(result).toBe(1);
  });

  test('returns null if index is not found', () => {
    const ll = LinkedList.fromValues(10, 20, 30);
    const result = ll.find(40);
    expect(result).toBeNull();
  });
});

describe('#removeAt function', () => {
  describe('With index less than 0', () => {
    test('It returns null', () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      const result = ll.removeAtIndex(-1);

      expect(result).toBeNull();
    });
  });

  describe('With index greater than length', () => {
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.removeAtIndex(5)).toBeNull();
    });
  });

  describe('with index 0', () => {
    test('it removes the head', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(0);
      expect(ll.head.value).toBe(20);
    });
  });

  describe('with index in the middle', () => {
    test('it removes the middle', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      ll.removeAtIndex(2);
      expect(ll.getAtIndex(2).value).toBe(40);
    });
  });
});
