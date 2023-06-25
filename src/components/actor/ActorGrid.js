import React from 'react'
import ActorsCard from './ActorsCard'
import NOT_FOUND_IMAGE from '../../images/not-found.png'
import { FlexGrid } from '../styled'

const ActorGrid = ({data}) => {
  return <FlexGrid>
    {
        data.map(({person}) => <ActorsCard key={person.id} name={person.name} country={person.country ? person.country.name : null} birthday={person.birthday} deathday={person.deathday} gender={person.gender} image={person.image ? person.image.medium : NOT_FOUND_IMAGE}/>)
    }
  </FlexGrid>
}

export default ActorGrid