import React from 'react'
import { Name } from '../model/Name';

type Props = {
    name: Name | undefined;
}

export default function NameComponent(props: Props) {
  const { name } = props;
  return (
    <div>
        <p>{name?.first}</p>
        <p>{name?.last}</p>
        <p>{name?.title}</p>
    </div>
  )
}
