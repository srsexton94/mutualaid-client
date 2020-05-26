import React from 'react'
import { NavLink } from 'react-router-dom'

// `Home` component returns JSX to be displayed at `/` route
// includes descriptive content for the project and multiple navigation routes
// to `/posts` route to aid accessibility
const Home = () => (
  <section className="home">
    <NavLink to='/posts'>
      <button className="btn btn-info btn-block">View our Mutual Aid Resources!</button>
    </NavLink>
    <h4>What are we doing here?</h4>
    <p><em>Mutual Aid, Dual Power</em> is a community-generated project to help
    people to connect with social networks, resources, community actions, and
    eachother in the name of Mutual Aid.</p>
    <p>Recently, in the wake of the COVID-19 global crisis, Mutual Aid networks
    and resources have emerged all over the world. <em>Mutual Aid, Dual Power</em>
    is meant to compile them and get you to what you need, in the medium that
    works for you.</p>
    <h4>But what <em>is</em> Mutual Aid?</h4>
    <p>&apos;Mutual Aid&apos; is an organizing theory that refers to reciprocal
    community support. It&apos;s meant to be <em>non-hierarchical</em>, <em>voluntary</em>,
    and <em>free</em> exchanges between members of a society or group.  That means,
    in essence, we all survive and thrive not because we&apos;re competing to be
    the best, but because we help eachother along the way.</p>
    <h4>And... Dual Power?</h4>
    <p>&apos;Dual Power&apos; on the other hand refers to <em>coexistence</em> and <em>competition</em> between
    two &quot;powers&quot; in our world, as we move together towards a more just
    world. It also recognizes the need for collective action.  To care for one
    another we must also speak against, and protect eachother from, the powers
    that harm us all.</p>
    <h4>How you can help!</h4>
    <p>Sign up for an account and contribute to the project! Do you know of an
    existing Mutual Aid network doing great work? Post it! A free resource that
    could benefit people? Absolutely! An action to support our community?
    We&apos;d love to support your work!</p>
    <p>And of course, do you have something you need help with?  Or something
    you could offer? Nothing is too small - go ahead, post it!
    </p>
    <NavLink className="home-btns" to='/posts'>
      <button className="btn btn-info">View Posts</button>
    </NavLink>
    <NavLink className="home-btns" to='/sign-in'>
      <button className="btn btn-secondary">Sign In</button>
    </NavLink>
  </section>
)

// exports component for use in `App`
export default Home
