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
