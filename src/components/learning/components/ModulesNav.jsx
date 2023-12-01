import _ from 'lodash';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MouleContext } from './MainTemplate';

const ModulesNav = ({ semestre }) => {
  const {setModule} = useContext(MouleContext)
  const handleClick = (id) => { 
    const module = _.find(semestre, { id })
    setModule(module);
    return
  }
  return (
      <nav className='w-full bg-green-500 flex'>
        {semestre.map(module => {
          const { id, moduleName } = module;
          return <NavLink key={id} className="block py-1" onClick={() => handleClick(id)}>
            {moduleName} 
          </NavLink>
        })}
      </nav>
  )
}

export default ModulesNav