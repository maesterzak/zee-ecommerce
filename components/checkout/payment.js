import { Grid, Input, Popover, Spacer, Text } from "@nextui-org/react"
import { usePaystackPayment } from 'react-paystack';
import { MyStyledButton } from "../Buttons/myStyledButton";
import { storeContext } from "../context/Store";
import { useContext } from "react";

const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_071281aa8222388e59425233f83b36d62d317c72',
  };

function Payment(){
    const {state, dispatch} = useContext(storeContext);


    // const payStack =()=>{
    
        
    //     const paystack = new PaystackPop()
    //     const modal =()=> this.context.setCheckOutModal({checkoutModal: false})
    //     try{
    //     paystack.newTransaction({
    //       key: "pk_test_071281aa8222388e59425233f83b36d62d317c72",
    //       email: 'abubakarzakari1703@gmail.com',
    //       name:'abubakar',
    //       amount: 200 * 100,
    //       phone: '08062257480',
    //       async onSuccess(transaction){
    //         modal()
    //         localStorage.setItem('cart', JSON.stringify({"content":[],"amount":0}))
            
    //         let success = true;
    //         await changeCart(success);
    //         let message = `Payment Completed Successfully!!. Your transaction reference is ${transaction.reference}. Thank you for shopping with us`
    //         alert(message)

    //       },
    //       onCancel(){
    //         alert("You have canceled the transaction")
    //       }

    //     })
    //     }
    //     catch(error){
    //       console.log("something went wrong")
    //     }
        
    //   }

    

    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
        dispatch({ type: "RESET_CART"});
      };
    
      // you can call this function anything
      const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
      }
  
    
    
    const PaystackHookExample = () => {
        const initializePayment = usePaystackPayment(config);
        return (
          
              <MyStyledButton
        onClick={() => {
            initializePayment(onSuccess, onClose)
        }}
        css={{
            fontSize:'large',
            background:'#b59677'
        }}
        >
            Paystack
        </MyStyledButton>
          
        );
    };
    
    
    return(
        <Grid direction="column" className="p-0 m-0"   xs={'6'}>
        
        <div className="row w-100" >
            <div className="col-12 col-md-7 " >
            <Text css={{fontSize:"x-large"}} h1>Order Details</Text>
            </div>
            
        </div>

        <Grid.Container direction="row"   css={{border:'2px solid var(--nextui-colors-text)', padding:'10px', borderRadius:'10px'}}>
            <Grid.Container>
                <Grid xs={3}>
                <Text  >Email</Text>
                </Grid>
                <Grid>
                <Text>abubakarzakari1703@gmail.com</Text>
                    
                </Grid>
            </Grid.Container>

            <Grid.Container>
                <Grid xs={3}>
                <Text  >Phone Number</Text>
                </Grid>
                <Grid>
                <Text>+2348062257480</Text>
                    
                </Grid>
            </Grid.Container>

            <Grid.Container>
                <Grid xs={3}>
                <Text  >Name</Text>
                </Grid>
                <Grid>
                <Text>Abubakar Zakari</Text>
                    
                </Grid>
            </Grid.Container>

            <Grid.Container>
                <Grid xs={3}>
                <Text  >Ship to</Text>
                </Grid>
                <Grid>
                <Text>Housing estate Abuja</Text>
                    
                </Grid>
            </Grid.Container>


            <Grid.Container>
                <Grid xs={3}>
                <Text  >Quantity</Text>
                </Grid>
                <Grid>
                <Text>10</Text>
                    
                </Grid>
            </Grid.Container>

            <Grid.Container>
                <Grid xs={3}>
                <Text  >Total</Text>
                </Grid>
                <Grid>
                <Text>$ 400</Text>
                    
                </Grid>
            </Grid.Container>

            
            

                
            
            
            
            
            
            
            
            
        </Grid.Container>
        
        
        <Spacer />
        
        <Spacer />
        
        <Text css={{fontSize:"x-large"}} h1>Payment</Text>
        <Text css={{fontSize:"large"}} h2>Select A Payment Method</Text>
        <Spacer />
        <Grid.Container direction={'column'} css={{gap:'10px'}}>
        <PaystackHookExample />
        <MyStyledButton
        css={{
            fontSize:'large',
            background:'#b59677'
        }}
        >
            Flutterwave
        </MyStyledButton>
        <MyStyledButton
        css={{
            fontSize:'large',
            background:'#b59677'
        }}
        >
            PayPal
        </MyStyledButton>
        <Spacer/>

        </Grid.Container>
          
        </Grid>
    )
}
export default Payment;