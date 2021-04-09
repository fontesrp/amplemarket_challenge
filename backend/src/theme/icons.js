const source = 'https://fonts.gstatic.com/s/i/materialiconsoutlined'
const sizeAndExtension = '24px.svg'

const getIconUrl = path => `${source}/${path}/${sizeAndExtension}`

const icons = {
  gear: getIconUrl('settings/v14'),
  pencil: getIconUrl('edit/v10'),
  plus: getIconUrl('add/v13'),
  trash: getIconUrl('delete/v12')
}

export default icons
