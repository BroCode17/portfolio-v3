import React from 'react'
import { Github, Instagram, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
const RenderIcon = ({name}: {name:string}) => {
    const renderIcon = (name: string) => {
        switch(name){
          case 'linkedin':
            return <Linkedin />
          case 'github':
            return <Github />
          case 'x':
            return <FaXTwitter  />
          default:
            return <Instagram />
        }
    }
  return renderIcon(name)
}

export default RenderIcon