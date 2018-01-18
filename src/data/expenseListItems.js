function createItems() {
  let items = []

  for (let i = 0; i < 5; ++i) {
    items.push({
      date: new Date(),
      name: `Item ${i}`,
      price: 20.00,
      tag: 'groceries',
      notes: '',
    })
  }

  return items
}

export default createItems()
