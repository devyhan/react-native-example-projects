import React from "react";
import { Button } from 'react-native';

type CounterProps = {
    onIncrease: () => void;
}

export default function Counter({onIncrease}: CounterProps) {
    return <Button onPress={onIncrease} title={"Increase"} />;
}