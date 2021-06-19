import React from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import {useState,useEffect} from 'react';
import CustomTextField from './CustomTextField';
import {commerce} from '../../components/lib/commerce';

const AddressForm = ({checkoutToken}) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();

    const fetchShippingCountries = async(checkoutTokenId) => {

        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);

        console.log(countries);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0])
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    },[])
    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <CustomTextField required name="firstName" label="First name"/>
                        <CustomTextField required name="lastName" label="Last name"/>
                        <CustomTextField required name="Address" label="Address"/>
                        <CustomTextField required name="Email" label="Email"/>
                        <CustomTextField required name="City" label="City"/>
                        <CustomTextField required name="PostalCode" label="Postal Code"/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {console.log(Object.entries(shippingCountries).map(([code,name]) => ({id:code, label:name})))}
                                {/* <MenuItem key={} value={} >
                                    Select Me
                                </MenuItem> */}
                            </Select>
                        </Grid>
                        {/* <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={} >
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={} >
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid> */}
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
 