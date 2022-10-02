import React, { useEffect, useState } from 'react';
import { Address } from '../model/Address';
import { Name } from '../model/Name';
import { Response } from '../model/Response';
import { Result } from '../model/Result';
import { User } from '../model/User';
import AddressComponent from './AddressComponent';
import NameComponent from './NameComponent';

export default function UserComponent() {

    const [user, setUser] = useState<User>();
    const [isLoaded, setIsLoaded] = useState<Boolean>(false)
    useEffect(() => {
        fetch('https://randomuser.me/api/')     
        .then(res => res.json())
        .then((response: Response) => {
            const result: Result = response.results[0];
            const age: number = result.dob.age;
            const address: Address = new Address(result.location.city, result.location.street.name, result.location.street.number, result.location.postcode);
            const name: Name = result.name;
            const user = new User(age, address, name);
            setUser(user);
            setIsLoaded(true);
            console.log(user);
        })
    }, []);

    return (
        <div>
            <NameComponent name = {user?.name}/>
            <AddressComponent address = {user?.address} />
        </div>        
    )
}
