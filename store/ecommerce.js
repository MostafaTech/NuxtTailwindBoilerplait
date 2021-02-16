export const state = () => ({
  products: [
    { id: '1', name: 'The Catalyzer', price: '$16.00' },
    { id: '2', name: 'Shooting Stars', price: '$21.15' },
    { id: '3', name: 'Neptune', price: '$12.00' },
    { id: '4', name: 'Pluto', price: '$24.99' },
  ]
})

export const getters = {
  products: (state) => state.products,
}
