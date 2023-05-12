import './App.css';
import { toast } from 'react-toastify';

const App = () => {
  const onButtonClicked = () => {
    toast.success('Hello Buddy!');
  };

  return (
    <div className='center-screen'>
      <div className='title'>
        <h1 data-testid='text-title'>Congratulation!</h1>
      </div>
      <div>
        <button 
        type='button'
        onClick={onButtonClicked}>Say Hello</button>
      </div>
    </div>
    
  );
};

export default App;
