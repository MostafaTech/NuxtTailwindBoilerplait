export const state = () => ({
  items: [
    { id: '1', name: 'The Catalyzer', views: '1.2k', comments: '6', body: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.' },
    { id: '2', name: 'The 400 Blows', views: '800', comments: '4', body: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.' },
    { id: '3', name: 'Shooting Stars', views: '2.6k', comments: '12', body: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.' },
  ]
})

export const getters = {
  items: (state) => state.items,
}
