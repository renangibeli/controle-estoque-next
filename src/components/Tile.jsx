import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styled from 'styled-components'

const AItem = styled.a`
    display: flex;
    flex-direction: column;
    width: calc(100%/6);
    color: #f5f5f5ce;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    border-radius: 1rem;
    text-decoration: none;

    &:hover {
        color: whitesmoke;
        opacity: 0.9;
        background-color: rgba(0, 0, 0, 0.5);
        transition: .3s ease-in;
        transform: scale(1.1)
    }
`

const PItem = styled.p`
    height: 30%;
    font-size: 1.5rem;
    padding: 25px;
    font-weight: bold;
`

library.add(fas)

export function Tile(props) {
    return (
        <AItem href={props.href} className="row-items-details">
            <PItem>{props.name}</PItem>
            <FontAwesomeIcon icon={props.iconName} style={{height: '70%', fontSize:'8rem'}}></FontAwesomeIcon>
        </AItem>
    )
}