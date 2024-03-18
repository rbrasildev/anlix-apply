import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react'

export function StatusOnline({ isOnline }) {
    const [isOn, setIsOn] = useState(false)
    async function teste() {
        const on = await fetch(`http://170.245.175.14:9595/api/api.php?online=${isOnline}`).then((response) => response.json())
        setIsOn(on);
    }
    useEffect( () => {
        teste()
    }, [])


    return (
        <MaterialCommunityIcons style={{ color: isOn ? 'green' : 'red' }} name="wifi" size={20} />
    )
}