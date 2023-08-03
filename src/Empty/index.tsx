import React, { useMemo, FC, memo } from 'react'

import { EmptyStyle,EmptyProps } from './interface'
import Button from '../Button'
import './Empty.module.less'


const Empty: FC<EmptyStyle & EmptyProps> = memo((props) => {

    let { description, image ,image_size,children} = props
    console.log(props);
    

    return (
        <div className='Emptybox'>
            <div className='EmptyCount'>
                <img src={image ? image:"https://img.tukuppt.com/png_preview/00/12/65/gtXRwDn9X0.jpg!/fw/780"}
                style={{width:image_size ? image_size : "100%"}}
                
                alt="" /> 
            </div>
            <div className='EmptyZi'>{description}</div>
            {children}
        </div>
    )
})

Empty.defaultProps={
    description:'暂无数据'
}

export default Empty