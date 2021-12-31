import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/Validators';
import './PlaceForm.css';
import { UseForm } from '../../shared/hooks/form-hook';

const NewPlace = () => {
 const [formState, inputHandler] = UseForm({
    title:{
      value:'',
      isValid:false
    },
    descrition:{
      value:'',
      isValid:false
    },
    address:{
      value:'',
      isValid:false
    },
  }, false);


  const placeSubmitHandler = event => {
    event.preventDefault();
  }

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input 
         id='title'
         element="input"
         type="text"
         label="Title" 
         validators={[VALIDATOR_REQUIRE()]} 
         errorText="please enter a valid value"
         onInput={inputHandler}
         />
      <Input 
         id='description'
         element="textarea"
         label="Description" 
         validators={[VALIDATOR_MINLENGTH(5)]} 
         errorText="please enter a valid description"
         onInput={inputHandler}
         />
      <Input 
         id='address'
         element="input"
         label="Adress" 
         validators={[VALIDATOR_REQUIRE()]} 
         errorText="please enter a valid address"
         onInput={inputHandler}
         />
         <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
    </form>
  );
};

export default NewPlace;
