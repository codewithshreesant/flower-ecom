import React, { useContext } from 'react'
import { useState } from 'react'
import { AppContext } from './Context/FlowersContext'
// import { useContext } from 'react'
import styled from 'styled-components'
const FilterSection = () => {
  const InputStyle={
    padding: '0.5rem 1.5rem 0.5rem 1.5rem',
    fontSize: '1.5rem',
    borderRadius: '0.5rem'
  }
   const {filter:{text}, updateFilterSection} = useContext(AppContext);
  return (
    <div>
        <form>
            <input type="text" style={InputStyle} name='text' value={text} onChange={updateFilterSection} autoFocus/>
        </form>
    </div>
  )
}




export default FilterSection