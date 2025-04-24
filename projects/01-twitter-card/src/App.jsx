import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
import './index.css';

export function App() {

  return (

    <section className='App'>
        <TwitterFollowCard
        userName="emetebe"
        name="Bernardo Marozzi"
        />

        <TwitterFollowCard
        userName="midudev"
        name="Migue Ángel Durán"
        /> 
    </section>

  );
}