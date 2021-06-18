import React from 'react'
import styled from 'styled-components'

const NAV = styled.nav`
border:red 1px solid;
width:20%;
margin:1rem;
display:flex;
flex-flow:row nowrap;
justify-content: space-between;
`

const A = styled.a`
color:white;
`

class Nav extends React.Component {

    render(){
        return(
            <NAV>
                <A>link</A>
                <A>link</A>
                <A>link</A>
            </NAV>
        )
    }

}

export default Nav