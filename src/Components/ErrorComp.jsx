import { Alert, AlertIcon } from '@chakra-ui/react';
import React from 'react';

const ErrorComp = ({message}) => {
  return (
    <Alert status='error' pos={'fixed'} left={'50%'} top={'50%'} transform={'translate(-50% , -50%)'} w={'sm'} borderRadius={'10px'}>
      <AlertIcon/>
      {message}
    </Alert>
  );
}
export default ErrorComp;
