//props of src,alt, will be received
interface iconProps {
    src: string;
    alt: string;
  }
  
import Image from 'next/image'

const Icon : React.FC<iconProps>= (props) => {
  return (
    <Image {...props} width={80} height={80} />
  )
}

export default Icon
