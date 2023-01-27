import { IconName, TypeIcon } from '../type'
import { FC } from 'react'
import { IconMaterialIcons, IconAntDesign, IconMaterialCommunityIcons } from './style'
import icons from '../../icons'

interface Iprops {
    children: any
    icon?: IconName
    typeIcon?: TypeIcon
}

const Icon: FC<Iprops> = ({ icon, typeIcon , children}) => {
    if (icon) {
        if (typeIcon === 'MaterialIcons') {
            return <IconMaterialIcons name={icon} size={30}/>
        } else if (typeIcon === 'AntDesign') {
            return <IconAntDesign name={icon} size={30}/>
        } else if (typeIcon === 'MaterialCommunityIcons') {
            return <IconMaterialCommunityIcons name={icon} size={30}/>
        } else if (typeIcon === 'Custom') {
            const IconCustom = icons[icon]

            return <IconCustom/>
        }
    } else {
        return children
    }
}

export default Icon