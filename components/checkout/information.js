import { Card, Container, Grid, Input, Popover, Spacer, Text, Textarea } from "@nextui-org/react"
import Button1 from "../../components/Buttons/Button1"
import { LatestProducts } from "../../utils/data"
import styles from './styles.module.css'
import Link from "next/link"
import { useMediaQuery } from "../mediaQuery"
import { getCountries, getStates } from "country-state-picker"
import SelectDesktop from "../Select/SelectCountries"
import {useState} from 'react'
import SelectState from "../Select/SelectState"
function Information(){
    let countries = getCountries()
    
    const isMd = useMediaQuery(960);
    const [value, setValue] = useState({name:'Nigeria', code: 'ng'})
    const changeCountry = (param) =>{
        setValue(param)
        let states = getStates(param.code)
        setValue2(states[0])
    }
    const data = {
        options: countries,
        name: 'country',
        defaultValue: value.name,
        value: value,
        setValue: setValue,
        changeCountry : changeCountry
    }
    let states = getStates(value.code)
    const [value2, setValue2] = useState(states[0])
    const data2 = {
        options: states,
        name: 'states',
        defaultValue: value2,
        value: value2,
        setValue: setValue2
    }
    
    return(
        <Grid direction="column" className="p-0 m-0"   xs={'6'}>
        
        <div className="row w-100" >
            <div className="col-12 col-md-7 " >
            <Text css={{fontSize:"xx-large"}} h1>Contact Information</Text>
            </div>
            <div className="col-12 col-md-5 " css={{display:"flex", justifyContent:"flex-end", alignItems:"end"}}>
            <Text p>Already have an account ? <Link href={'#'}>log in</Link></Text>
            </div>
        </div>
        
        <div className="row">
            <div className="col-12 mt-1 mb-1">
            <label style={{color:"var(--nextui-colors-text)"}} >Email</label>
            <Input css={{width:'100%'}} type={'email'} placeholder="Email" /> 
            </div>
            <div className="col-12 mt-1 mb-1">
            <label style={{color:"var(--nextui-colors-text)"}}>Phone Number</label>
            <Input css={{width:'100%'}} type={'text'} placeholder="Phone number" /> 
            </div>
            <Spacer />
            <Text h2>Shipping Address</Text>
            <div className="col-12 mt-1 mb-1">
            <label style={{color:"var(--nextui-colors-text)"}}>Country</label>
            <SelectDesktop data={data} />
            </div>
            <Spacer/>
            <div className="col-6">
            <label style={{color:"var(--nextui-colors-text)"}}>First name</label>
            <br />
            <Input css={{width:'100%'}} type={'text'} placeholder="First name" /> 
            </div>
            <div className="col-6">
            <label style={{color:"var(--nextui-colors-text)"}}>Last name</label>
            <Input css={{width:'100%'}} type={'text'} placeholder="Last name" /> 
            </div>
            <div className="col-12 mt-1 mb-1">
            <label style={{color:"var(--nextui-colors-text)"}}>Address</label>
            <Input css={{width:'100%'}} type={'text'} placeholder="Address" /> 
            </div>
            

            <div className="col-4">
            <label style={{color:"var(--nextui-colors-text)"}}>City</label>
            <Input css={{width:'100%'}} type={'text'} placeholder="City" /> 
            </div>

            <div className="col-4">
            <label style={{color:"var(--nextui-colors-text)"}}>State</label>
            <SelectState data={data2} />
            </div>

            <div className="col-4">
            <label style={{color:"var(--nextui-colors-text)"}}>Postal Code</label>
            <Input css={{width:'100%'}} type={'text'} placeholder="Postal code" /> 
            </div>
            
        </div>
        <Spacer />
        <div className="d-flex justify-content-end">
            
                <Button1 text='Continue to Payment' />

        

        </div>
        
          
        </Grid>
    )
}
export default Information;