import { Card, Container, Grid, Input, Popover, Spacer, Text, Textarea } from "@nextui-org/react"
import { defaultHead } from "next/head";
import { useState } from "react";

function SelectState(params) {
    
    const {name, options, defaultValue, value, setValue} = params.data
    
    return(
        <>
        <Popover placement={'bottom'}>
            <Popover.Trigger>
            <Input value={value} name={name}  css={{width:'100%'}} type={'text'} /> 
            </Popover.Trigger>
            <Popover.Content className=" p-3" css={{background:'var(--nextui-colors-background);', width:'600px', maxHeight:'400px'}}>
                {options.map((item, index)=>{
                    return(
                        <div key={index}><button  onClick={()=>setValue(item)} style={{textAlign:'start', color:"var(--nextui-colors-text)"}} className="btn btn-block btn-md w-100">{item}</button></div>
                    )
                })}
                
                
            </Popover.Content>
            </Popover>
        </>
    )
}
export default SelectState;