import './styles/global.css';
import ReactLogo  from './assets/reactLogo.svg'
import { Heading } from './Components/Heading';
import { Text } from './Components/Text';
import { TextInput } from './Components/TextInput';
import { Envelope, LockKey } from 'phosphor-react';
import { Checkbox } from './Components/Checkbox';
import { Button } from './Components/Button';
import { SignIn } from './pages/SignIn';

export function App() {
  return (
    <SignIn />
  )
}
