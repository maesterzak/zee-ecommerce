import React from 'react';
import { Button } from '@nextui-org/react';

const Button1 = (params) => {
//   const handleConfetti = () => {
//     confetti({...});
//   };

  return (
    <Button
      auto
      rounded
      ripple={false}
      size="xl"
    //   onClick={handleConfetti}
      css={{
        background: '$white',
        fontWeight: '$semibold',
        boxShadow: '$md',
        position: 'relative',
        overflow: 'visible',
        color: '#878787',
        px: '$18',
        
        '&:after': {
          content: '""',
          position: 'absolute',
          width: '70%',
          height: '70%',
          background: '$white',
          opacity: 1,
          borderRadius: '$pill',
          transition: 'all 0.4s ease'
        },
        '&:hover': {
          transform: 'translateY(-5px)',
          '&:after': {
            transform: 'scaleX(1.5) scaleY(1.6)',
            opacity: 0, 
          }
        },
        '&:active': {
          transform: 'translateY(-2px)',
        }
      }}
    >
      {params.text}
    </Button>
  );
};

export default Button1;