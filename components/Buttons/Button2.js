import { styled, Button } from '@nextui-org/react';

const Button2=(params) => {
    const MyStyledButton = styled(Button, {
      boxShadow: '$md', // shadows.md
      variants: {
        size: {
          mysize: {
            height: '$12', // space[12]
            borderRadius: '$xs' // radii.xs
          }
        },
        color: {
          mycolor: {
            background: '$linkColor', // colors.green800
            color: 'white', 
            
            border: '$space$1 solid transparent',
            '&:hover': {
              background: '#c5ac93',
              
              border:'$linkColor solid 2px'
            },
            '&:active': {
              background: '$linkColor',
            },
            '&:focus': {
              borderColor: '#c5ac93',
            },
          }
        }
      }
    });
    return (
        <MyStyledButton 
          
          
          auto 
          css={{height:"40px", width:"30%",}}
          size="mysize"
          color="mycolor">
            {params.text}
        </MyStyledButton>
      ) 
    }

export default Button2;