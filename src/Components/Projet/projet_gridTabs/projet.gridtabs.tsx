import React from 'react'
import { GridTabs } from '../../GridTabs/GruidTabs'
import { current } from './items/current'
type propsType = {
    type: 'current'|'passed'
}
const ProjetGridtabs = (props:propsType) => {

    
  return (
    <><GridTabs rows={current.rows} columns={current.columns}/></>
  )
}

export default ProjetGridtabs