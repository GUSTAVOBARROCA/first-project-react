import React from 'react'

import {Button as ContainerButtton} from './style'

function Button({children, ...props }){

    return <ContainerButtton {...props}>{children}</ContainerButtton>
}

export default Button