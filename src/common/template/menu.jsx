import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' label='Dashboard' icon='dashboard' />
        <MenuTree label='Ferramentas' icon='cogs'>
            <MenuItem path='#importar' label='Importar' icon='upload' />
        </MenuTree>
    </ul>
)