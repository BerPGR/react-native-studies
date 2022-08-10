import React from "react";
import { Button } from "react-native";

export default props => {

    function doIt() {
        console.warn('Exec');
    }
    
    return (
        <>
        <Button 
            title="Action 1!"
            onPress={doIt}
        />

        <Button  
            title="Action 2!"
            onPress={function() {
                console.warn('Exec 2')
            }}/>

        <Button  
            title="Action 3!"
            onPress={() => console.warn('Exec 3')}/>
        </>
    )
}