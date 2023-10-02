import React from 'react'
import './index.css'
import { useState } from 'react'
import { List, X } from "@phosphor-icons/react"

export function Header() {
  const [controle, setControle] = useState (false)

  function handleControleMenu(){
    if(controle){
      setControle(false)
      return
    }

    setControle(true)
  }

  return (
    <header>
        <div className="menu-mobile">
            <div className="botao-menu">
              <button onClick={handleControleMenu} >{controle ? <X size={32}/> : <List size={32}/>}</button>
            </div>

            <div className={`menu ${controle ? "" : "close"}`} >
              <nav>
                <a href="">Configurações</a>
                <a href="">Login</a>
                <a href="">Sobre</a>
              </nav>
            </div>
        </div>
    </header>
  )
}
