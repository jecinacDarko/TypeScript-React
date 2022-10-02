import React from 'react'
import { Address } from '../model/Address';

type Props = {
  address: Address | undefined;
}

export default function AddressComponent(props: Props) {
  const { address } = props;
  return (
    <div>
      <p>{address?.city}</p>
      <p>{address?.streetName}</p>
      <p>{address?.streetNumber}</p>
      <p>{address?.postcode}</p>
    </div>
  )
}
