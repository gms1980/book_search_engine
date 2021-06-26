import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

const [addUser, { error }] = useMutation(ADD_USER);

// submit form (notice the async!)
const handleFormSubmit = async event => {
    event.preventDefault();
  
    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState }
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  {error && <div>Sign up failed</div>}